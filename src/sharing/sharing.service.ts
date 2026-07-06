import { Injectable, NotFoundException } from '@nestjs/common';
import { createHash, randomBytes } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { RidesRepository } from '../rides/repositories/rides.repository';
import { CreateRideShareDto } from './dto/sharing.dto';

@Injectable()
export class SharingService {
  constructor(private readonly prisma: PrismaService, private readonly ridesRepository: RidesRepository) {}
  async createShare(userId: string, rideId: string, dto: CreateRideShareDto) {
    const ride = await this.ridesRepository.findById(rideId);
    if (!ride) throw new NotFoundException('Course introuvable');
    const shareToken = createHash('sha256').update(randomBytes(24)).digest('hex');
    return this.prisma.rideShare.create({ data: { ride: { connect: { id: rideId } }, sharedBy: { connect: { id: userId } }, shareToken, expiresAt: new Date(Date.now() + (dto.expiresInHours ?? 24) * 3600000) } });
  }
}
