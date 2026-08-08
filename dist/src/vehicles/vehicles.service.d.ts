import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { DriversRepository } from '../drivers/repositories/drivers.repository';
import { CreateVehicleDto, UpdateVehicleStatusDto, VehiclesQueryDto } from './dto/vehicles.dto';
import { VehicleEntity } from './entities/vehicle.entity';
import { VehiclesRepository } from './repositories/vehicles.repository';
export declare class VehiclesService {
    private readonly vehiclesRepository;
    private readonly driversRepository;
    constructor(vehiclesRepository: VehiclesRepository, driversRepository: DriversRepository);
    create(utilisateurId: bigint, dto: CreateVehicleDto): Promise<VehicleEntity>;
    findAll(query: VehiclesQueryDto): Promise<PaginatedResponseDto<VehicleEntity>>;
    findOne(id: string): Promise<VehicleEntity>;
    updateStatus(id: string, dto: UpdateVehicleStatusDto): Promise<VehicleEntity>;
    delete(id: string): Promise<{
        message: string;
    }>;
    private toEntity;
}
