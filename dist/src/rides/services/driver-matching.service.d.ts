import { PrismaService } from '../../prisma/prisma.service';
import { DistanceService } from './distance.service';
import { DriverMatchingCriteria, AvailableDriver } from '../interfaces/ride-status.interface';
export declare class DriverMatchingService {
    private readonly prisma;
    private readonly distanceService;
    private readonly logger;
    constructor(prisma: PrismaService, distanceService: DistanceService);
    findAvailableDrivers(criteria: DriverMatchingCriteria): Promise<AvailableDriver[]>;
    findClosestDriver(criteria: DriverMatchingCriteria): Promise<AvailableDriver | null>;
}
