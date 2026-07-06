import {
  BadRequestException,
  HttpException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomInt } from 'crypto';
import { Otp } from '../../generated/prisma/client';
import { OtpCanal, OtpType } from './otp.constants';
import { OtpRepository } from './repositories/otp.repository';

export interface CreateOtpResult {
  code: string;
  otp: Otp;
}

@Injectable()
export class OtpService {
  private readonly logger = new Logger(OtpService.name);

  constructor(
    private readonly otpRepository: OtpRepository,
    private readonly configService: ConfigService,
  ) {}

  /** Génère un OTP numérique à 6 chiffres (cryptographiquement sécurisé) */
  generateOtp(): string {
    return randomInt(100000, 999999).toString();
  }

  /** Vérifie si l'utilisateur peut demander un nouveau code (cooldown 60s) */
  async canRequestNewOtp(
    utilisateurId: bigint,
    canal: OtpCanal,
    type: OtpType,
  ): Promise<boolean> {
    const latest = await this.otpRepository.findLatest(utilisateurId, canal, type);
    if (!latest) {
      return true;
    }

    const cooldownMs = this.getResendCooldownMs();
    const elapsed = Date.now() - latest.createdAt.getTime();
    return elapsed >= cooldownMs;
  }

  /**
   * Crée un OTP : invalide les anciens, génère et persiste le nouveau.
   * Ne envoie PAS le code — c'est la responsabilité de l'appelant (AuthService).
   */
  async createOtp(
    utilisateurId: bigint,
    canal: OtpCanal,
    type: OtpType,
  ): Promise<CreateOtpResult> {
    const canRequest = await this.canRequestNewOtp(utilisateurId, canal, type);
    if (!canRequest) {
      const cooldownSec = this.getResendCooldownMs() / 1000;
      throw new HttpException(
        `Veuillez attendre ${cooldownSec} secondes avant de demander un nouveau code`,
        429,
      );
    }

    await this.invalidateOtp(utilisateurId, canal, type);

    const code = this.generateOtp();
    const expireAt = new Date(Date.now() + this.getExpiryMs());

    const otp = await this.otpRepository.create({
      code,
      canal,
      type,
      expireAt,
      utilisateur: { connect: { id: utilisateurId } },
    });

    this.logger.debug(`OTP créé [${canal}/${type}] pour utilisateur ${utilisateurId}`);

    return { code, otp };
  }

  /** Invalide tous les OTP actifs pour un utilisateur / canal / type */
  async invalidateOtp(
    utilisateurId: bigint,
    canal: OtpCanal,
    type: OtpType,
  ): Promise<void> {
    await this.otpRepository.invalidateAll(utilisateurId, canal, type);
  }

  /** Vérifie un OTP sans le marquer comme utilisé (pré-validation) */
  async validateOtpWithoutUse(
    utilisateurId: bigint,
    canal: OtpCanal,
    type: OtpType,
    code: string,
  ): Promise<Otp> {
    const otp = await this.otpRepository.findLatestActive(utilisateurId, canal, type);

    if (!otp || this.isExpired(otp)) {
      throw new BadRequestException('Code OTP invalide ou expiré');
    }

    if (otp.tentatives >= this.getMaxAttempts()) {
      throw new BadRequestException(
        'Nombre maximum de tentatives atteint. Veuillez demander un nouveau code',
      );
    }

    if (otp.code !== code) {
      await this.incrementAttempt(otp.id);
      throw new BadRequestException('Code OTP invalide');
    }

    return otp;
  }

  /** Vérifie un OTP et le marque comme utilisé en cas de succès */
  async verifyOtp(
    utilisateurId: bigint,
    canal: OtpCanal,
    type: OtpType,
    code: string,
  ): Promise<Otp> {
    const otp = await this.otpRepository.findLatestActive(utilisateurId, canal, type);

    if (!otp) {
      throw new BadRequestException('Code OTP invalide ou expiré');
    }

    if (this.isExpired(otp)) {
      throw new BadRequestException('Code OTP expiré');
    }

    if (otp.tentatives >= this.getMaxAttempts()) {
      await this.markAsUsed(otp.id);
      throw new BadRequestException(
        'Nombre maximum de tentatives atteint. Veuillez demander un nouveau code',
      );
    }

    if (otp.code !== code) {
      await this.incrementAttempt(otp.id);
      const updated = await this.otpRepository.findLatestActive(utilisateurId, canal, type);
      if (updated && updated.tentatives >= this.getMaxAttempts()) {
        await this.markAsUsed(updated.id);
        throw new BadRequestException(
          'Nombre maximum de tentatives atteint. Veuillez demander un nouveau code',
        );
      }
      throw new BadRequestException('Code OTP invalide');
    }

    await this.markAsUsed(otp.id);
    return otp;
  }

  async incrementAttempt(otpId: bigint): Promise<void> {
    await this.otpRepository.incrementAttempt(otpId);
  }

  isExpired(otp: Otp): boolean {
    return otp.expireAt < new Date();
  }

  async markAsUsed(otpId: bigint): Promise<void> {
    await this.otpRepository.markAsUsed(otpId);
  }

  /** Supprime les OTP expirés (tâche de maintenance) */
  async deleteExpiredOtp(): Promise<number> {
    const count = await this.otpRepository.deleteExpired();
    if (count > 0) {
      this.logger.log(`${count} OTP expiré(s) supprimé(s)`);
    }
    return count;
  }

  private getExpiryMs(): number {
    const minutes = this.configService.get<number>('otp.expiryMinutes') ?? 5;
    return minutes * 60 * 1000;
  }

  private getResendCooldownMs(): number {
    const seconds = this.configService.get<number>('otp.resendCooldownSeconds') ?? 60;
    return seconds * 1000;
  }

  private getMaxAttempts(): number {
    return this.configService.get<number>('otp.maxAttempts') ?? 5;
  }
}
