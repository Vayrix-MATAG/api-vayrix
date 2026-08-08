import { PrismaService } from '../prisma/prisma.service';
import { UsersRepository } from '../users/repositories/users.repository';
import { DriversRepository } from '../drivers/repositories/drivers.repository';
import { RidesRepository } from './repositories/rides.repository';
import { TarificationService } from './services/tarification.service';
import { DistanceService } from './services/distance.service';
import { CourseStateMachine } from './services/course-state-machine.service';
import { DriverMatchingService } from './services/driver-matching.service';
import { CreateRideDto, EstimateRideDto, AcceptRideDto, CancelRideDto, RidesQueryDto } from './dto/rides.dto';
import { RideEntity, RideEstimateEntity } from './entities/ride.entity';
export declare class RidesService {
    private readonly prisma;
    private readonly usersRepository;
    private readonly driversRepository;
    private readonly ridesRepository;
    private readonly tarificationService;
    private readonly distanceService;
    private readonly stateMachine;
    private readonly driverMatchingService;
    private readonly logger;
    constructor(prisma: PrismaService, usersRepository: UsersRepository, driversRepository: DriversRepository, ridesRepository: RidesRepository, tarificationService: TarificationService, distanceService: DistanceService, stateMachine: CourseStateMachine, driverMatchingService: DriverMatchingService);
    findAll(query: RidesQueryDto): Promise<{
        data: RideEntity[];
        total: number;
    }>;
    estimateFare(dto: EstimateRideDto): Promise<RideEstimateEntity>;
    create(utilisateurId: bigint, dto: CreateRideDto): Promise<RideEntity>;
    acceptRide(utilisateurId: bigint, courseId: string, dto: AcceptRideDto): Promise<RideEntity>;
    startRide(utilisateurId: bigint, courseId: string): Promise<RideEntity>;
    completeRide(utilisateurId: bigint, courseId: string): Promise<RideEntity>;
    cancelRide(utilisateurId: bigint, courseId: string, dto: CancelRideDto): Promise<RideEntity>;
    findOne(courseId: string, utilisateurId: bigint): Promise<RideEntity>;
    findMyRides(utilisateurId: bigint, query: RidesQueryDto): Promise<RideEntity[]>;
    findDriverRides(utilisateurId: bigint, query: RidesQueryDto): Promise<RideEntity[]>;
    findAvailableDrivers(latitudeDepart: number, longitudeDepart: number, typeVehiculeId: string): Promise<import("./interfaces/ride-status.interface").AvailableDriver[]>;
}
