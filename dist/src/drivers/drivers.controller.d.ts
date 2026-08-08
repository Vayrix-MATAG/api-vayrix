import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import { DriversQueryDto, UpdateDriverOnlineDto, UpdateDriverStatusDto, UpdateDriverProfileDto } from './dto/drivers.dto';
import { DriverEntity } from './entities/driver.entity';
import { DriversService } from './drivers.service';
export declare class DriversController {
    private readonly driversService;
    constructor(driversService: DriversService);
    getMe(user: AuthenticatedUser): Promise<DriverEntity>;
    updateProfile(user: AuthenticatedUser, dto: UpdateDriverProfileDto): Promise<DriverEntity>;
    updateOnlineStatus(user: AuthenticatedUser, dto: UpdateDriverOnlineDto): Promise<DriverEntity>;
    updateStatus(user: AuthenticatedUser, dto: UpdateDriverStatusDto): Promise<DriverEntity>;
    updateLocation(user: AuthenticatedUser, dto: {
        latitude: number;
        longitude: number;
    }): Promise<{
        message: string;
    }>;
    findAll(query: DriversQueryDto): Promise<import("../common/dto/paginated-response.dto").PaginatedResponseDto<DriverEntity>>;
    findOne(id: string): Promise<DriverEntity>;
}
