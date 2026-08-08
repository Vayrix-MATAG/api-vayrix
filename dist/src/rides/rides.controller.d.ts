import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import { CreateRideDto, EstimateRideDto, AcceptRideDto, CancelRideDto, RidesQueryDto } from './dto/rides.dto';
import { RideEntity, RideEstimateEntity } from './entities/ride.entity';
import { RidesService } from './rides.service';
export declare class RidesController {
    private readonly ridesService;
    constructor(ridesService: RidesService);
    estimate(dto: EstimateRideDto): Promise<RideEstimateEntity>;
    create(user: AuthenticatedUser, dto: CreateRideDto): Promise<RideEntity>;
    findMyRides(user: AuthenticatedUser, query: RidesQueryDto): Promise<RideEntity[]>;
    findDriverRides(user: AuthenticatedUser, query: RidesQueryDto): Promise<RideEntity[]>;
    findAvailableDrivers(latitudeDepart: number, longitudeDepart: number, typeVehiculeId: string): Promise<import("./interfaces/ride-status.interface").AvailableDriver[]>;
    findOne(id: string, user: AuthenticatedUser): Promise<RideEntity>;
    acceptRide(user: AuthenticatedUser, id: string, dto: AcceptRideDto): Promise<RideEntity>;
    startRide(user: AuthenticatedUser, id: string): Promise<RideEntity>;
    completeRide(user: AuthenticatedUser, id: string): Promise<RideEntity>;
    cancelRide(user: AuthenticatedUser, id: string, dto: CancelRideDto): Promise<RideEntity>;
}
