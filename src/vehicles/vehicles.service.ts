import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { DriversRepository } from '../drivers/repositories/drivers.repository';
import { CreateVehicleDto, UpdateVehicleStatusDto, VehiclesQueryDto } from './dto/vehicles.dto';
import { VehicleEntity } from './entities/vehicle.entity';
import { VehiclesRepository } from './repositories/vehicles.repository';

@Injectable()
export class VehiclesService {
  constructor(private readonly vehiclesRepository: VehiclesRepository, private readonly driversRepository: DriversRepository) {}

  async create(userId: string, dto: CreateVehicleDto): Promise<VehicleEntity> {
    const driver = await this.driversRepository.findByUserId(userId);
    if (!driver) throw new NotFoundException('Profil chauffeur introuvable');
    const existing = await this.vehiclesRepository.findByPlateNumber(dto.plateNumber);
    if (existing) throw new ConflictException('Cette plaque est déjà utilisée');
    return this.vehiclesRepository.create({ ...dto, seats: dto.seats ?? 4, driver: { connect: { id: driver.id } } });
  }

  async findAll(query: VehiclesQueryDto): Promise<PaginatedResponseDto<VehicleEntity>> {
    const page = query.page ?? 1; const limit = query.limit ?? 10;
    const result = await this.vehiclesRepository.findAll({ page, limit, sortBy: query.sortBy, sortOrder: query.sortOrder, search: query.search, status: query.status, type: query.type });
    return new PaginatedResponseDto(result.data, result.total, page, limit);
  }

  async updateStatus(id: string, dto: UpdateVehicleStatusDto): Promise<VehicleEntity> {
    const vehicle = await this.vehiclesRepository.findById(id);
    if (!vehicle) throw new NotFoundException('Véhicule introuvable');
    return this.vehiclesRepository.update(id, { status: dto.status });
  }
}
