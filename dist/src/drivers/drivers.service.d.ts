import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { UsersRepository } from '../users/repositories/users.repository';
import { DriversQueryDto, UpdateDriverOnlineDto, UpdateDriverStatusDto, UpdateDriverProfileDto } from './dto/drivers.dto';
import { DriverEntity } from './entities/driver.entity';
import { DriversRepository } from './repositories/drivers.repository';
export declare class DriversService {
    private readonly driversRepository;
    private readonly usersRepository;
    private readonly logger;
    constructor(driversRepository: DriversRepository, usersRepository: UsersRepository);
    findMe(utilisateurId: bigint): Promise<DriverEntity>;
    updateProfile(utilisateurId: bigint, dto: UpdateDriverProfileDto): Promise<DriverEntity>;
    updateOnlineStatus(utilisateurId: bigint, dto: UpdateDriverOnlineDto): Promise<DriverEntity>;
    updateStatus(utilisateurId: bigint, dto: UpdateDriverStatusDto): Promise<DriverEntity>;
    updateLocation(utilisateurId: bigint, latitude: number, longitude: number): Promise<{
        message: string;
    }>;
    findAll(query: DriversQueryDto): Promise<PaginatedResponseDto<DriverEntity>>;
    findOne(id: bigint): Promise<DriverEntity>;
    private toEntity;
}
