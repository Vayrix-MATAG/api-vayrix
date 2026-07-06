import { Injectable } from '@nestjs/common';
import { Otp, Prisma } from '../../../generated/prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { OtpCanal, OtpType } from '../otp.constants';

@Injectable()
export class OtpRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findLatestActive(
    utilisateurId: bigint,
    canal: OtpCanal,
    type: OtpType,
  ): Promise<Otp | null> {
    return this.prisma.otp.findFirst({
      where: {
        utilisateurId,
        canal,
        type,
        utilise: false,
        expireAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findLatest(
    utilisateurId: bigint,
    canal: OtpCanal,
    type: OtpType,
  ): Promise<Otp | null> {
    return this.prisma.otp.findFirst({
      where: { utilisateurId, canal, type },
      orderBy: { createdAt: 'desc' },
    });
  }

  async invalidateAll(
    utilisateurId: bigint,
    canal: OtpCanal,
    type: OtpType,
  ): Promise<void> {
    await this.prisma.otp.updateMany({
      where: {
        utilisateurId,
        canal,
        type,
        utilise: false,
      },
      data: { utilise: true },
    });
  }

  async create(data: Prisma.OtpCreateInput): Promise<Otp> {
    return this.prisma.otp.create({ data });
  }

  async markAsUsed(id: bigint): Promise<void> {
    await this.prisma.otp.update({
      where: { id },
      data: { utilise: true },
    });
  }

  async incrementAttempt(id: bigint): Promise<Otp> {
    return this.prisma.otp.update({
      where: { id },
      data: { tentatives: { increment: 1 } },
    });
  }

  async deleteExpired(): Promise<number> {
    const result = await this.prisma.otp.deleteMany({
      where: { expireAt: { lt: new Date() } },
    });
    return result.count;
  }
}
