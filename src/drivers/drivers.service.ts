import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DriverProfile } from '@prisma/client';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { UsersRepository } from '../users/repositories/users.repository';
import {
  CreateDriverDto,
  DriversQueryDto,
  UpdateDriverLocationDto,
  UpdateDriverStatusDto,
} from './dto/drivers.dto';
import { DriverEntity } from './entities/driver.entity';
import { DriverWithUser, DriversRepository } from './repositories/drivers.repository';

@Injectable()
export class DriversService {
  private readonly logger = new Logger(DriversService.name);

  constructor(
    private readonly driversRepository: DriversRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async create(userId: string, dto: CreateDriverDto): Promise<DriverEntity> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new NotFoundException('Utilisateur introuvable');
    }

    const existing = await this.driversRepository.findByUserId(userId);
    if (existing) {
      throw new ConflictException('Ce profil chauffeur existe d?j?');
    }

    const driver = await this.driversRepository.create({
      licenseNumber: dto.licenseNumber,
      licenseExpiry: new Date(dto.licenseExpiry),
      user: { connect: { id: userId } },
    });

    this.logger.log(`Profil chauffeur cr??: ${driver.id}`);
    return this.toEntity({ ...driver, user });
  }

  async findAll(query: DriversQueryDto): Promise<PaginatedResponseDto<DriverEntity>> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const result = await this.driversRepository.findAll({
      page,
      limit,
      sortBy: query.sortBy,
      sortOrder: query.sortOrder,
      search: query.search,
      status: query.status,
      isApproved: query.isApproved,
    });

    return new PaginatedResponseDto(
      result.data.map((item) => this.toEntity(item)),
      result.total,
      page,
      limit,
    );
  }

  async findOne(id: string): Promise<DriverEntity> {
    const driver = await this.driversRepository.findDetailById(id);
    if (!driver) {
      throw new NotFoundException('Chauffeur introuvable');
    }
    return this.toEntity(driver);
  }

  async updateStatus(id: string, dto: UpdateDriverStatusDto): Promise<DriverEntity> {
    const driver = await this.driversRepository.update(id, { status: dto.status });
    return this.toEntity(driver);
  }

  async updateLocation(
    userId: string,
    dto: UpdateDriverLocationDto,
  ): Promise<{ message: string }> {
    const driver = await this.driversRepository.findByUserId(userId);
    if (!driver) {
      throw new NotFoundException('Profil chauffeur introuvable');
    }

    await this.driversRepository.update(driver.id, {
      currentLat: dto.lat,
      currentLng: dto.lng,
      heading: dto.heading,
      lastLocationAt: new Date(),
    });

    return { message: 'Position mise ? jour' };
  }

  private toEntity(driver: DriverWithUser | DriverProfile): DriverEntity {
    return {
      id: driver.id,
      userId: driver.userId,
      status: driver.status,
      rating: Number(driver.rating),
      totalRides: driver.totalRides,
      licenseNumber: driver.licenseNumber,
      licenseExpiry: driver.licenseExpiry,
      isApproved: driver.isApproved,
      createdAt: driver.createdAt,
    };
  }
}
