import { CourseWithDetails, ParticipantWithClient } from '../repositories/rides.repository';
import { RideEntity, ParticipantEntity, RideEstimateEntity } from '../entities/ride.entity';
import { TarificationResult, DistanceResult } from '../interfaces/ride-status.interface';
export declare class RidesMapper {
    static toRideEntity(course: CourseWithDetails): RideEntity;
    static toParticipantEntity(participant: ParticipantWithClient): ParticipantEntity;
    static toRideEstimateEntity(tarificationResult: TarificationResult, distanceResult: DistanceResult): RideEstimateEntity;
}
