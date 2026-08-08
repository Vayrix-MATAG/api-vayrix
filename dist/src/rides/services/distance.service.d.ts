import { DistanceResult } from '../interfaces/ride-status.interface';
export declare class DistanceService {
    private readonly logger;
    private readonly EARTH_RADIUS_KM;
    private readonly AVERAGE_SPEED_KMH;
    calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): DistanceResult;
    private haversine;
    private toRadians;
}
