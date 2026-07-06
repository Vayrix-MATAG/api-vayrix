import { Injectable } from '@nestjs/common';
import { Prisma, Ride, RideStatus } from '@prisma/client';
import { PaginatedResult, PaginationOptions } from '../../common/interfaces/pagination.interface';
import { buildPaginatedResult, getPaginationParams } from '../../common/utils/pagination.util';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RidesRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: Prisma.RideCreateInput): Promise<Ride> { return this.prisma.ride.create({ data }); }
  async findById(id: string): Promise<Ride | null> { return this.prisma.ride.findUnique({ where: { id } }); }
  async findAll(options: PaginationOptions & { status?: RideStatus; passengerId?: string; driverId?: string }): Promise<PaginatedResult<Ride>> {
    const { skip, take, orderBy } = getPaginationParams(options);
    const where: Prisma.RideWhereInput = { ...(options.status && { status: options.status }), ...(options.passengerId && { passengerId: options.passengerId }), ...(options.driverId && { driverId: options.driverId }), ...(options.search && { OR: [{ pickupAddress: { contains: options.search, mode: 'insensitive' } }, { dropoffAddress: { contains: options.search, mode: 'insensitive' } }] }) };
    const [data, total] = await Promise.all([this.prisma.ride.findMany({ where, skip, take, orderBy }), this.prisma.ride.count({ where })]);
    return buildPaginatedResult(data, total, options.page, options.limit);
  }
  async update(id: string, data: Prisma.RideUpdateInput): Promise<Ride> { return this.prisma.ride.update({ where: { id }, data }); }
  async assignDriver(id: string, driverId: string, vehicleId: string): Promise<Ride> { return this.prisma.ride.update({ where: { id }, data: { driver: { connect: { id: driverId } }, vehicle: { connect: { id: vehicleId } }, status: RideStatus.ACCEPTED, acceptedAt: new Date() } }); }
}
