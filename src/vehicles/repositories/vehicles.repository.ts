import { Injectable } from '@nestjs/common';
import { Prisma, Vehicle, VehicleStatus, VehicleType } from '@prisma/client';
import { PaginatedResult, PaginationOptions } from '../../common/interfaces/pagination.interface';
import { buildPaginatedResult, getPaginationParams } from '../../common/utils/pagination.util';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class VehiclesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.VehicleCreateInput): Promise<Vehicle> { return this.prisma.vehicle.create({ data }); }
  async findById(id: string): Promise<Vehicle | null> { return this.prisma.vehicle.findUnique({ where: { id } }); }
  async findByPlateNumber(plateNumber: string): Promise<Vehicle | null> { return this.prisma.vehicle.findUnique({ where: { plateNumber } }); }
  async findFirstByDriverId(driverId: string): Promise<Vehicle | null> {
    return this.prisma.vehicle.findFirst({ where: { driverId }, orderBy: { createdAt: 'desc' } });
  }
  async findAll(options: PaginationOptions & { status?: VehicleStatus; type?: VehicleType }): Promise<PaginatedResult<Vehicle>> {
    const { skip, take, orderBy } = getPaginationParams(options);
    const where: Prisma.VehicleWhereInput = { ...(options.status && { status: options.status }), ...(options.type && { type: options.type }), ...(options.search && { OR: [{ brand: { contains: options.search, mode: 'insensitive' } }, { model: { contains: options.search, mode: 'insensitive' } }, { plateNumber: { contains: options.search, mode: 'insensitive' } }] }) };
    const [data, total] = await Promise.all([this.prisma.vehicle.findMany({ where, skip, take, orderBy }), this.prisma.vehicle.count({ where })]);
    return buildPaginatedResult(data, total, options.page, options.limit);
  }
  async update(id: string, data: Prisma.VehicleUpdateInput): Promise<Vehicle> { return this.prisma.vehicle.update({ where: { id }, data }); }
}
