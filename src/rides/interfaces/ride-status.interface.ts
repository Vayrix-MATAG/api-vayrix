/**
 * États possibles d'une course
 */
export enum CourseStatus {
  DEMANDEE = 'DEMANDEE',
  EN_RECHERCHE = 'EN_RECHERCHE',
  ACCEPTEE = 'ACCEPTEE',
  EN_COURS = 'EN_COURS',
  TERMINEE = 'TERMINEE',
  ANNULEE = 'ANNULEE',
}

/**
 * États possibles d'un participant à une course
 */
export enum ParticipantStatus {
  EN_ATTENTE = 'EN_ATTENTE',
  CONFIRME = 'CONFIRME',
  EN_COURS = 'EN_COURS',
  TERMINE = 'TERMINE',
  ANNULE = 'ANNULE',
}

/**
 * Types de courses
 */
export enum CourseType {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  EXPRESS = 'EXPRESS',
}

/**
 * Résultat du calcul de tarif
 */
export interface TarificationResult {
  prixDepart: number;
  prixKm: number;
  prixMinimum: number;
  commission: number;
  distance: number;
  prixCalcule: number;
  prixFinal: number;
}

/**
 * Résultat du calcul de distance
 */
export interface DistanceResult {
  distanceKm: number;
  dureeEstimeeMinutes: number;
}

/**
 * Critères de recherche de chauffeur
 */
export interface DriverMatchingCriteria {
  typeVehiculeId: bigint;
  latitudeDepart: number;
  longitudeDepart: number;
  rayonKm?: number;
}

/**
 * Chauffeur disponible pour une course
 */
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
