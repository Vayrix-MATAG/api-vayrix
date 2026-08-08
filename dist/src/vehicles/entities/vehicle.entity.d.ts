export declare class VehicleEntity {
    id: bigint;
    chauffeurId: bigint;
    typeVehiculeId: bigint;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    typeVehicule?: {
        id: bigint;
        nom: string;
        prixBase: number;
        prixParKm: number;
    };
}
