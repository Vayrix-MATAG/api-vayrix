import { CourseType } from '../interfaces/ride-status.interface';
export declare class CreateRideDto {
    adresseDepart: string;
    latitudeDepart: number;
    longitudeDepart: number;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    typeVehiculeId: string;
    typeCourse: CourseType;
}
export declare class EstimateRideDto {
    latitudeDepart: number;
    longitudeDepart: number;
    latitudeArrivee: number;
    longitudeArrivee: number;
    typeVehiculeId: string;
}
export declare class AcceptRideDto {
    vehiculeId: string;
}
export declare class UpdateRideStatusDto {
    statut: string;
    motif?: string;
}
export declare class CancelRideDto {
    motif: string;
}
export declare class RidesQueryDto {
    statut?: string;
    typeCourse?: string;
    page?: number;
    limit?: number;
}
