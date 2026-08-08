import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CourseStatus, CourseType, ParticipantStatus } from '../interfaces/ride-status.interface';

/**
 * Entité Course pour l'API
 */
export class RideEntity {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({ example: '123 Rue de Paris, Douala' })
  adresseDepart: string;

  @ApiProperty({ example: 4.0483 })
  latitudeDepart: number;

  @ApiProperty({ example: 9.7043 })
  longitudeDepart: number;

  @ApiProperty({ example: '45 Avenue du General, Douala' })
  adresseArrivee: string;

  @ApiProperty({ example: 4.0583 })
  latitudeArrivee: number;

  @ApiProperty({ example: 9.7143 })
  longitudeArrivee: number;

  @ApiProperty({ example: 8.5 })
  distance?: number;

  @ApiProperty({ example: 20 })
  dureeEstimee?: number;

  @ApiProperty({ example: 2500 })
  prixInitial?: number;

  @ApiProperty({ example: 2400 })
  prixNegocie?: number;

  @ApiProperty({ example: 2500 })
  prixFinal?: number;

  @ApiProperty({ enum: ['STANDARD', 'PREMIUM', 'EXPRESS'], example: 'STANDARD' })
  typeCourse: string;

  @ApiProperty({ enum: ['DEMANDEE', 'EN_RECHERCHE', 'ACCEPTEE', 'EN_COURS', 'TERMINEE', 'ANNULEE'], example: 'EN_COURS' })
  statut: string;

  @ApiProperty({ example: false })
  partageActif: boolean;

  @ApiProperty({ example: '2026-08-08T10:00:00Z' })
  dateCreation: Date;

  @ApiProperty({ example: '2026-08-08T10:05:00Z' })
  dateAcceptation?: Date;

  @ApiProperty({ example: '2026-08-08T10:15:00Z' })
  dateDebut?: Date;

  @ApiProperty({ example: '2026-08-08T10:35:00Z' })
  dateFin?: Date;

  @ApiProperty({ example: '1' })
  chauffeurId?: string;

  @ApiProperty({ example: '1' })
  vehiculeId?: string;

  @ApiPropertyOptional()
  chauffeur?: {
    id: string;
    utilisateurId: string;
    nom: string;
    prenom: string;
    telephone: string;
    numeroPermis: string;
    estEnLigne: boolean;
    statut: string;
  };

  @ApiPropertyOptional()
  vehicule?: {
    id: string;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
  };

  @ApiPropertyOptional()
  participants?: ParticipantEntity[];
}

/**
 * Entité ParticipantCourse pour l'API
 */
export class ParticipantEntity {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({ example: '1' })
  courseId: string;

  @ApiProperty({ example: '1' })
  clientId: string;

  @ApiProperty({ example: '123 Rue de Paris, Douala' })
  adresseDepart: string;

  @ApiProperty({ example: 4.0483 })
  latitudeDepart: number;

  @ApiProperty({ example: 9.7043 })
  longitudeDepart: number;

  @ApiProperty({ example: '45 Avenue du General, Douala' })
  adresseArrivee: string;

  @ApiProperty({ example: 4.0583 })
  latitudeArrivee: number;

  @ApiProperty({ example: 9.7143 })
  longitudeArrivee: number;

  @ApiProperty({ example: 2500 })
  prixInitial: number;

  @ApiProperty({ example: 2400 })
  prixFinal?: number;

  @ApiProperty({ example: 100 })
  economieClient?: number;

  @ApiProperty({ enum: ['EN_ATTENTE', 'CONFIRME', 'EN_COURS', 'TERMINE', 'ANNULE'], example: 'EN_COURS' })
  statut: string;

  @ApiProperty({ example: 'DEMANDEUR' })
  role: string;

  @ApiProperty({ example: '2026-08-08T10:15:00Z' })
  heureMontee?: Date;

  @ApiProperty({ example: '2026-08-08T10:35:00Z' })
  heureDescente?: Date;

  @ApiProperty({ example: '2026-08-08T10:00:00Z' })
  dateCreation: Date;

  @ApiPropertyOptional()
  client?: {
    id: string;
    utilisateurId: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
  };
}

/**
 * Entité pour l'estimation de tarif
 */
export class RideEstimateEntity {
  @ApiProperty({ example: 8.5 })
  distanceKm: number;

  @ApiProperty({ example: 20 })
  dureeEstimeeMinutes: number;

  @ApiProperty({ example: 500 })
  prixDepart: number;

  @ApiProperty({ example: 250 })
  prixKm: number;

  @ApiProperty({ example: 1000 })
  prixMinimum: number;

  @ApiProperty({ example: 0.1 })
  commission: number;

  @ApiProperty({ example: 2625 })
  prixCalcule: number;

  @ApiProperty({ example: 2625 })
  prixFinal: number;
}
