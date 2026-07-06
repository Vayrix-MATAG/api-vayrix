import { ConfigService } from '@nestjs/config';
import { Otp } from '../../generated/prisma/client';
import { OtpCanal, OtpType } from './otp.constants';
import { OtpRepository } from './repositories/otp.repository';
export interface CreateOtpResult {
    code: string;
    otp: Otp;
}
export declare class OtpService {
    private readonly otpRepository;
    private readonly configService;
    private readonly logger;
    constructor(otpRepository: OtpRepository, configService: ConfigService);
    generateOtp(): string;
    canRequestNewOtp(utilisateurId: bigint, canal: OtpCanal, type: OtpType): Promise<boolean>;
    createOtp(utilisateurId: bigint, canal: OtpCanal, type: OtpType): Promise<CreateOtpResult>;
    invalidateOtp(utilisateurId: bigint, canal: OtpCanal, type: OtpType): Promise<void>;
    validateOtpWithoutUse(utilisateurId: bigint, canal: OtpCanal, type: OtpType, code: string): Promise<Otp>;
    verifyOtp(utilisateurId: bigint, canal: OtpCanal, type: OtpType, code: string): Promise<Otp>;
    incrementAttempt(otpId: bigint): Promise<void>;
    isExpired(otp: Otp): boolean;
    markAsUsed(otpId: bigint): Promise<void>;
    deleteExpiredOtp(): Promise<number>;
    private getExpiryMs;
    private getResendCooldownMs;
    private getMaxAttempts;
}
