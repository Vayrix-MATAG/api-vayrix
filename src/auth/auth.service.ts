import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Utilisateur } from '../../generated/prisma/client';
import { APP_ROLES } from '../common/constants/roles.constant';
import { JwtPayload } from '../common/interfaces/jwt-payload.interface';
import { MailService } from '../mail/mail.service';
import { OTP_CANAL, OTP_TYPE } from '../otp/otp.constants';
import { OtpService } from '../otp/otp.service';
import { SmsService } from '../sms/sms.service';
import { UsersRepository } from '../users/repositories/users.repository';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { OtpRequestDto } from './dto/otp-request.dto';
import { OtpVerifyDto } from './dto/otp-verify.dto';
import { SendEmailOtpDto } from './dto/send-email-otp.dto';
import { VerifyEmailOtpDto } from './dto/verify-email-otp.dto';
import { SendPhoneOtpDto } from './dto/send-phone-otp.dto';
import { VerifyPhoneOtpDto } from './dto/verify-phone-otp.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ForgotPasswordEmailDto } from './dto/forgot-password-email.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ResetPasswordEmailDto } from './dto/reset-password-email.dto';
import { VerifyForgotPasswordEmailDto } from './dto/verify-forgot-password-email.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { ResendCodeDto } from './dto/resend-code.dto';
import {
  AuthResponseEntity,
  AuthUserEntity,
} from './entities/auth.entity';
import { MessageResponseEntity } from '../common/entities/message-response.entity';
import { AuthRepository, UtilisateurWithRoles } from './repositories/auth.repository';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly saltRounds = 12;

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly otpService: OtpService,
    private readonly smsService: SmsService,
    private readonly mailService: MailService,
  ) {}

  async signup(dto: SignupDto): Promise<AuthResponseEntity> {
    const existingEmail = await this.usersRepository.findByEmail(dto.email);
    if (existingEmail) {
      throw new ConflictException('Cet email est déjà utilisé');
    }

    const existingPhone = await this.usersRepository.findByTelephone(dto.telephone);
    if (existingPhone) {
      throw new ConflictException('Ce numéro de téléphone est déjà utilisé');
    }

    const hashedPassword = await bcrypt.hash(dto.password, this.saltRounds);
    const isClient = dto.role === APP_ROLES.CLIENT;

    const utilisateur = await this.authRepository.createSignup({
      nom: dto.nom,
      prenom: dto.prenom,
      telephone: dto.telephone,
      email: dto.email,
      motDePasse: hashedPassword,
      roleNom: dto.role,
      isClient,
    });

    this.logger.log(`Inscription réussie: ${utilisateur.email} (${dto.role})`);

    const response = await this.generateAuthResponse(utilisateur);

    // Email en arrière-plan après la fin des requêtes DB
    setImmediate(() => {
      this.mailService
        .sendWelcomeEmail(utilisateur.email, utilisateur.prenom, utilisateur.nom)
        .catch((err) => this.logger.error('Échec envoi email de bienvenue', err));
    });

    return response;
  }

  async login(dto: LoginDto): Promise<AuthResponseEntity> {
    const identifier = dto.email ?? dto.telephone ?? dto.login;
    if (!identifier) {
      throw new BadRequestException('Email ou téléphone requis');
    }

    const utilisateur = await this.findByLogin(identifier);
    if (!utilisateur) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, utilisateur.motDePasse);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    return this.loginUtilisateur(utilisateur);
  }

  // ─── OTP Téléphone ─────────────────────────────────────────────────────────

  async requestLoginOtp(dto: OtpRequestDto): Promise<MessageResponseEntity> {
    return this.sendPhoneOtp(dto);
  }

  async verifyLoginOtp(dto: OtpVerifyDto): Promise<AuthResponseEntity> {
    return this.verifyPhoneOtp(dto);
  }

  async sendPhoneOtp(dto: SendPhoneOtpDto | OtpRequestDto): Promise<MessageResponseEntity> {
    const utilisateur = await this.authRepository.findByTelephone(dto.telephone);
    if (!utilisateur) {
      throw new NotFoundException('Numéro de téléphone introuvable');
    }

    const { code } = await this.otpService.createOtp(
      utilisateur.id,
      OTP_CANAL.SMS,
      OTP_TYPE.LOGIN,
    );

    await this.smsService.sendOtp(dto.telephone, code, 'LOGIN');
    return { message: 'Code OTP envoyé par SMS' };
  }

  async verifyPhoneOtp(
    dto: VerifyPhoneOtpDto | OtpVerifyDto,
  ): Promise<AuthResponseEntity> {
    const utilisateur = await this.authRepository.findByTelephone(dto.telephone);
    if (!utilisateur) {
      throw new UnauthorizedException('Code OTP invalide');
    }

    await this.otpService.verifyOtp(
      utilisateur.id,
      OTP_CANAL.SMS,
      OTP_TYPE.LOGIN,
      dto.otp,
    );

    return this.loginUtilisateur(utilisateur);
  }

  // ─── OTP Email ─────────────────────────────────────────────────────────────

  async sendEmailOtp(dto: SendEmailOtpDto): Promise<MessageResponseEntity> {
    const utilisateur = await this.authRepository.findByEmail(dto.email);
    if (!utilisateur) {
      throw new NotFoundException('Adresse email introuvable');
    }

    const { code } = await this.otpService.createOtp(
      utilisateur.id,
      OTP_CANAL.EMAIL,
      OTP_TYPE.LOGIN,
    );

    await this.mailService.sendOtpEmail(utilisateur.email, utilisateur.prenom, code, 'connexion');
    return { message: 'Code OTP envoyé par email' };
  }

  async verifyEmailOtp(dto: VerifyEmailOtpDto): Promise<AuthResponseEntity> {
    const utilisateur = await this.authRepository.findByEmail(dto.email);
    if (!utilisateur) {
      throw new UnauthorizedException('Code OTP invalide');
    }

    await this.otpService.verifyOtp(
      utilisateur.id,
      OTP_CANAL.EMAIL,
      OTP_TYPE.LOGIN,
      dto.otp,
    );

    return this.loginUtilisateur(utilisateur);
  }

  // ─── Session ───────────────────────────────────────────────────────────────

  async logout(userId: string): Promise<MessageResponseEntity> {
    await this.authRepository.updateRefreshToken(BigInt(userId), null);
    return { message: 'Déconnexion réussie' };
  }

  async refresh(refreshToken: string): Promise<AuthResponseEntity> {
    let payload: JwtPayload;

    try {
      payload = this.jwtService.verify<JwtPayload>(refreshToken, {
        secret: this.configService.getOrThrow<string>('jwt.refreshSecret'),
      });
    } catch {
      throw new UnauthorizedException('Refresh token invalide ou expiré');
    }

    const utilisateur = await this.authRepository.findByIdWithPassword(BigInt(payload.sub));
    if (!utilisateur?.refreshToken) {
      throw new UnauthorizedException('Refresh token invalide ou expiré');
    }

    const isValid = await bcrypt.compare(refreshToken, utilisateur.refreshToken);
    if (!isValid) {
      throw new UnauthorizedException('Refresh token invalide ou expiré');
    }

    const withRoles = await this.authRepository.findById(utilisateur.id);
    if (!withRoles) {
      throw new UnauthorizedException('Utilisateur introuvable');
    }

    return this.generateAuthResponse(withRoles);
  }

  // ─── Mot de passe oublié — Téléphone ───────────────────────────────────────

  async forgotPassword(dto: ForgotPasswordDto): Promise<MessageResponseEntity> {
    const utilisateur = await this.authRepository.findByTelephone(dto.telephone);
    if (!utilisateur) {
      throw new NotFoundException('Numéro de téléphone introuvable');
    }

    const { code } = await this.otpService.createOtp(
      utilisateur.id,
      OTP_CANAL.SMS,
      OTP_TYPE.RESET_PASSWORD,
    );

    await this.smsService.sendOtp(dto.telephone, code, 'RESET_PASSWORD');
    return { message: 'Code de réinitialisation envoyé par SMS' };
  }

  async resetPassword(dto: ResetPasswordDto): Promise<MessageResponseEntity> {
    const utilisateur = await this.authRepository.findByTelephone(dto.telephone);
    if (!utilisateur) {
      throw new BadRequestException('Code OTP invalide');
    }

    await this.otpService.verifyOtp(
      utilisateur.id,
      OTP_CANAL.SMS,
      OTP_TYPE.RESET_PASSWORD,
      dto.otp,
    );

    await this.updatePasswordAndInvalidateSessions(utilisateur.id, dto.password);
    return { message: 'Mot de passe réinitialisé avec succès' };
  }

  // ─── Mot de passe oublié — Email ─────────────────────────────────────────

  async forgotPasswordEmail(dto: ForgotPasswordEmailDto): Promise<MessageResponseEntity> {
    const utilisateur = await this.authRepository.findByEmail(dto.email);
    if (!utilisateur) {
      throw new NotFoundException('Adresse email introuvable');
    }

    const { code } = await this.otpService.createOtp(
      utilisateur.id,
      OTP_CANAL.EMAIL,
      OTP_TYPE.RESET_PASSWORD,
    );

    await this.mailService.sendResetPasswordEmail(utilisateur.email, utilisateur.prenom, code);
    return { message: 'Code de réinitialisation envoyé par email' };
  }

  async verifyForgotPasswordEmail(
    dto: VerifyForgotPasswordEmailDto,
  ): Promise<MessageResponseEntity> {
    const utilisateur = await this.authRepository.findByEmail(dto.email);
    if (!utilisateur) {
      throw new BadRequestException('Code OTP invalide');
    }

    await this.otpService.validateOtpWithoutUse(
      utilisateur.id,
      OTP_CANAL.EMAIL,
      OTP_TYPE.RESET_PASSWORD,
      dto.otp,
    );

    return { message: 'Code OTP vérifié avec succès' };
  }

  async resetPasswordEmail(dto: ResetPasswordEmailDto): Promise<MessageResponseEntity> {
    const utilisateur = await this.authRepository.findByEmail(dto.email);
    if (!utilisateur) {
      throw new BadRequestException('Code OTP invalide');
    }

    await this.otpService.verifyOtp(
      utilisateur.id,
      OTP_CANAL.EMAIL,
      OTP_TYPE.RESET_PASSWORD,
      dto.otp,
    );

    await this.updatePasswordAndInvalidateSessions(utilisateur.id, dto.password);
    return { message: 'Mot de passe réinitialisé avec succès' };
  }

  // ─── Vérification email compte ─────────────────────────────────────────────

  async verifyEmail(dto: VerifyEmailDto): Promise<MessageResponseEntity> {
    const utilisateur = await this.authRepository.findByEmail(dto.email);
    if (!utilisateur) {
      throw new BadRequestException('Code OTP invalide');
    }

    await this.otpService.verifyOtp(
      utilisateur.id,
      OTP_CANAL.EMAIL,
      OTP_TYPE.VERIFY_ACCOUNT,
      dto.otp,
    );

    await this.authRepository.activateClientAccount(utilisateur.id);
    return { message: 'Email vérifié et compte activé' };
  }

  async resendCode(dto: ResendCodeDto): Promise<MessageResponseEntity> {
    const utilisateur = await this.authRepository.findByTelephone(dto.telephone);
    if (!utilisateur) {
      throw new NotFoundException('Numéro de téléphone introuvable');
    }

    const { code } = await this.otpService.createOtp(
      utilisateur.id,
      OTP_CANAL.SMS,
      OTP_TYPE.VERIFY_ACCOUNT,
    );

    await this.smsService.sendOtp(dto.telephone, code, 'RESEND');
    return { message: 'Nouveau code envoyé par SMS' };
  }

  async getProfile(userId: string): Promise<AuthUserEntity> {
    const utilisateur = await this.authRepository.findById(BigInt(userId));
    if (!utilisateur) {
      throw new NotFoundException('Utilisateur introuvable');
    }

    return this.toAuthUser(utilisateur);
  }

  // ─── Privé ─────────────────────────────────────────────────────────────────

  private async loginUtilisateur(utilisateur: Utilisateur): Promise<AuthResponseEntity> {
    await this.authRepository.updateLastLogin(utilisateur.id);
    const withRoles = await this.authRepository.findById(utilisateur.id);
    if (!withRoles) {
      throw new UnauthorizedException('Utilisateur introuvable');
    }

    this.logger.log(`Connexion réussie: ${utilisateur.email}`);
    return this.generateAuthResponse(withRoles);
  }

  private async updatePasswordAndInvalidateSessions(
    utilisateurId: bigint,
    plainPassword: string,
  ): Promise<void> {
    const hashedPassword = await bcrypt.hash(plainPassword, this.saltRounds);
    await this.authRepository.updatePassword(utilisateurId, hashedPassword);
    await this.authRepository.updateRefreshToken(utilisateurId, null);
  }

  private async findByLogin(login: string): Promise<Utilisateur | null> {
    if (login.includes('@')) {
      return this.authRepository.findByEmail(login);
    }
    return this.authRepository.findByTelephone(login);
  }

  private async generateAuthResponse(
    utilisateur: UtilisateurWithRoles,
  ): Promise<AuthResponseEntity> {
    const roles = utilisateur.utilisateurRoles.map((ur) => ur.role.nom);
    const payload: JwtPayload = {
      sub: utilisateur.id.toString(),
      email: utilisateur.email,
      roles,
    };

    const accessToken = this.jwtService.sign(payload);
    const refreshExpiresIn =
      (this.configService.get<string>('jwt.refreshExpiresIn') ?? '7d') as `${number}d`;
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.getOrThrow<string>('jwt.refreshSecret'),
      expiresIn: refreshExpiresIn,
    });

    const hashedRefresh = await bcrypt.hash(refreshToken, this.saltRounds);
    await this.authRepository.updateRefreshToken(utilisateur.id, hashedRefresh);

    return {
      accessToken,
      refreshToken,
      expiresIn: this.configService.get<string>('jwt.expiresIn') ?? '15m',
      utilisateur: this.toAuthUser(utilisateur),
    };
  }

  private toAuthUser(utilisateur: UtilisateurWithRoles): AuthUserEntity {
    return {
      id: utilisateur.id.toString(),
      nom: utilisateur.nom,
      prenom: utilisateur.prenom,
      telephone: utilisateur.telephone,
      email: utilisateur.email,
      roles: utilisateur.utilisateurRoles.map((ur) => ur.role.nom),
      photo: utilisateur.photo,
      langue: utilisateur.langue,
      derniereConnexion: utilisateur.derniereConnexion,
    };
  }
}
