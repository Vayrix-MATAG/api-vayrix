export declare class CreateVehicleDto {
    marque: string;
    modele: string;
    annee: number;
    couleur: string;
    matricule: string;
    typeVehiculeId: string;
    chauffeurId?: string;
}
export declare class UpdateVehicleStatusDto {
    statut: string;
}
export declare class VehiclesQueryDto {
    statut?: string;
    typeVehiculeId?: string;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
    page?: number;
    limit?: number;
}
