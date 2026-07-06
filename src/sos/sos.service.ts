import { Injectable, NotFoundException } from '@nestjs/common';
import { SosStatus } from '@prisma/client';
import { RidesRepository } from '../rides/repositories/rides.repository';
import { CreateSosDto } from './dto/sos.dto';
import { SosRepository } from './repositories/sos.repository';

@Injectable()
export class SosService {
  constructor(private readonly sosRepository: SosRepository, private readonly ridesRepository: RidesRepository) {}
  async trigger(userId: string, rideId: string, dto: CreateSosDto) {
    const ride = await this.ridesRepository.findById(rideId);
    if (!ride) throw new NotFoundException('Course introuvable');
    return this.sosRepository.create({ ride: { connect: { id: rideId } }, user: { connect: { id: userId } }, lat: ride.pickupLat, lng: ride.pickupLng, message: dto.message });
  }
  async resolve(id: string) { return this.sosRepository.update(id, { status: SosStatus.RESOLVED, resolvedAt: new Date() }); }
}
