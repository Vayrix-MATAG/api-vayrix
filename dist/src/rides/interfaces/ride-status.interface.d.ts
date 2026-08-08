export declare enum CourseStatus {
    DEMANDEE = "DEMANDEE",
    EN_RECHERCHE = "EN_RECHERCHE",
    ACCEPTEE = "ACCEPTEE",
    EN_COURS = "EN_COURS",
    TERMINEE = "TERMINEE",
    ANNULEE = "ANNULEE"
}
export declare enum ParticipantStatus {
    EN_ATTENTE = "EN_ATTENTE",
    CONFIRME = "CONFIRME",
    EN_COURS = "EN_COURS",
    TERMINE = "TERMINE",
    ANNULE = "ANNULE"
}
export declare enum CourseType {
    STANDARD = "STANDARD",
    PREMIUM = "PREMIUM",
    EXPRESS = "EXPRESS"
}
export interface TarificationResult {
    prixDepart: number;
    prixKm: number;
    prixMinimum: number;
    commission: number;
    distance: number;
    prixCalcule: number;
    prixFinal: number;
}
export interface DistanceResult {
    distanceKm: number;
    dureeEstimeeMinutes: number;
}
export interface DriverMatchingCriteria {
    typeVehiculeId: bigint;
    latitudeDepart: number;
    longitudeDepart: number;
    rayonKm?: number;
}
export interface AvailableDriver {
    id: bigint;
    utilisateurId: bigint;
    nom: string;
    prenom: string;
    telephone: string;
    note: number;
    vehiculeId: bigint;
    vehiculeMarque: string;
    vehiculeModele: string;
    vehiculeMatricule: string;
    latitude: number;
    longitude: number;
    distanceKm: number;
}
