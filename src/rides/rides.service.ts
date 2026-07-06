import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaymentMethod, Ride, RideStatus, UserRole } from '@prisma/client';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import { DriversRepository } from '../drivers/repositories/drivers.repository';
import { NotificationsService } from '../notifications/notifications.service';
import { PaymentsRepository } from '../payments/repositories/payments.repository';
import { VehiclesRepository } from '../vehicles/repositories/vehicles.repository';
import {
  CreateRideDto,
  RideActionDto,
  RidesQueryDto,
  UpdateRideStatusDto,
} from './dto/rides.dto';
import { FareEstimateEntity, RideEntity } from './entities/ride.entity';
import { RidesRepository } from './repositories/rides.repository';

@Injectable()
export class RidesService {
  private readonly logger = new Logger(RidesService.name);

  constructor(
    private readonly ridesRepository: RidesRepository,
    private readonly driversRepository: DriversRepository,
    private readonly vehiclesRepository: VehiclesRepository,
    private readonly paymentsRepository: PaymentsRepository,
    private readonly notificationsService: NotificationsService,
    private readonly configService: ConfigService,
  ) {}

  estimateFare(dto: CreateRideDto): FareEstimateEntity {
    const distanceKm = this.calculateDistanceKm(
      dto.pickupLat,
      dto.pickupLng,
      dto.dropoffLat,
      dto.dropoffLng,
    );
    const estimatedDurationMin = Math.max(5, Math.round(distanceKm * 3));
    const baseFare = this.configService.get<number>('pricing.baseFare') ?? 500;
    const perKmRate = this.configService.get<number>('pricing.perKmRate') ?? 250;
    const perMinRate = this.configService.get<number>('pricing.perMinRate') ?? 50;
    const estimatedFare = Math.round(
      baseFare + distanceKm * perKmRate + estimatedDurationMin * perMinRate,
    );

    return {
      estimatedFare,
      distanceKm: Number(distanceKm.toFixed(2)),
      estimatedDurationMin,
      paymentMethod: dto.paymentMethod,
    };
  }

  async create(passengerId: string, dto: CreateRideDto): Promise<RideEntity> {
    const estimate = this.estimateFare(dto);
    const ride = await this.ridesRepository.create({
      passenger: { connect: { id: passengerId } },
      pickupLat: dto.pickupLat,
      pickupLng: dto.pickupLng,
      pickupAddress: dto.pickupAddress,
      dropoffLat: dto.dropoffLat,
      dropoffLng: dto.dropoffLng,
      dropoffAddress: dto.dropoffAddress,
      estimatedFare: estimate.estimatedFare,
    });

    await this.paymentsRepository.create({
      amount: estimate.estimatedFare,
      method: dto.paymentMethod ?? PaymentMethod.CASH,
      ride: { connect: { id: ride.id } },
    });

    await this.notificationsService.createInternal(
      passengerId,
      'RIDE',
      'Course creee',
      'Votre demande de course a ete enregistree',
      ride.id,
    );

    this.logger.log(`Course creee: ${ride.id}`);
    return this.toEntity(ride);
  }

  async findAll(
    user: AuthenticatedUser,
    query: RidesQueryDto,
  ): Promise<PaginatedResponseDto<RideEntity>> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const result = await this.ridesRepository.findAll({
      page,
      limit,
      sortBy: query.sortBy,
      sortOrder: query.sortOrder,
      search: query.search,
      status: query.status,
      passengerId: user.role === UserRole.PASSENGER ? user.id : undefined,
    });

    return new PaginatedResponseDto(
      result.data.map((ride) => this.toEntity(ride)),
      result.total,
      page,
      limit,
    );
  }

  async acceptRide(userId: string, rideId: string): Promise<RideEntity> {
    const driver = await this.driversRepository.findByUserId(userId);
    if (!driver) {
      throw new NotFoundException('Profil chauffeur introuvable');
    }

    const vehicle = await this.vehiclesRepository.findFirstByDriverId(driver.id);
    if (!vehicle) {
      throw new NotFoundException('Aucun vehicule lie au chauffeur');
    }

    const ride = await this.ridesRepository.assignDriver(rideId, driver.id, vehicle.id);
    await this.notificationsService.createInternal(
      ride.passengerId,
      'RIDE',
      'Course acceptee',
      'Un chauffeur a accepte votre course',
      ride.id,
    );

    return this.toEntity(ride);
  }

  async updateStatus(rideId: string, dto: UpdateRideStatusDto): Promise<RideEntity> {
    const ride = await this.ridesRepository.findById(rideId);
    if (!ride) {
      throw new NotFoundException('Course introuvable');
    }

    const updated = await this.ridesRepository.update(rideId, {
      status: dto.status,
      ...(dto.status === RideStatus.IN_PROGRESS ? { startedAt: new Date() } : {}),
      ...(dto.status === RideStatus.COMPLETED
        ? {
            completedAt: dto.completedAt ? new Date(dto.completedAt) : new Date(),
            finalFare: ride.estimatedFare,
            durationMin: dto.durationMin,
          }
        : {}),
    });

    return this.toEntity(updated);
  }

  async cancelRide(
    user: AuthenticatedUser,
    rideId: string,
    dto: RideActionDto,
  ): Promise<RideEntity> {
    const ride = await this.ridesRepository.findById(rideId);
    if (!ride) {
      throw new NotFoundException('Course introuvable');
    }

    const updated = await this.ridesRepository.update(rideId, {
      status: RideStatus.CANCELLED,
      cancelReason: dto.reason,
      cancelledById: user.id,
      cancelledAt: new Date(),
    });

    return this.toEntity(updated);
  }

  private calculateDistanceKm(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number,
  ): number {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const earth = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;

    return earth * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  private toEntity(ride: Ride): RideEntity {
    return {
      id: ride.id,
      passengerId: ride.passengerId,
      driverId: ride.driverId,
      status: ride.status,
      pickupAddress: ride.pickupAddress,
      dropoffAddress: ride.dropoffAddress,
      estimatedFare: String(ride.estimatedFare),
      finalFare: ride.finalFare ? String(ride.finalFare) : null,
      requestedAt: ride.requestedAt,
    };
  }
}
