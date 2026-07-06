import { Otp, Prisma } from '../../../generated/prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { OtpCanal, OtpType } from '../otp.constants';
export declare class OtpRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findLatestActive(utilisateurId: bigint, canal: OtpCanal, type: OtpType): Promise<Otp | null>;
    findLatest(utilisateurId: bigint, canal: OtpCanal, type: OtpType): Promise<Otp | null>;
    invalidateAll(utilisateurId: bigint, canal: OtpCanal, type: OtpType): Promise<void>;
    create(data: Prisma.OtpCreateInput): Promise<Otp>;
    markAsUsed(id: bigint): Promise<void>;
    incrementAttempt(id: bigint): Promise<Otp>;
    deleteExpired(): Promise<number>;
}
