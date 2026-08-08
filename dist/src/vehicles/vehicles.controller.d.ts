import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import { CreateVehicleDto, UpdateVehicleStatusDto, VehiclesQueryDto } from './dto/vehicles.dto';
import { VehicleEntity } from './entities/vehicle.entity';
import { VehiclesService } from './vehicles.service';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    create(user: AuthenticatedUser, dto: CreateVehicleDto): Promise<VehicleEntity>;
    findAll(query: VehiclesQueryDto): Promise<import("../common/dto/paginated-response.dto").PaginatedResponseDto<VehicleEntity>>;
    findOne(id: string): Promise<VehicleEntity>;
    updateStatus(id: string, dto: UpdateVehicleStatusDto): Promise<VehicleEntity>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
