export declare class RideEntity {
    id: string;
    adresseDepart: string;
    latitudeDepart: number;
    longitudeDepart: number;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    distance?: number;
    dureeEstimee?: number;
    prixInitial?: number;
    prixNegocie?: number;
    prixFinal?: number;
    typeCourse: string;
    statut: string;
    partageActif: boolean;
    dateCreation: Date;
    dateAcceptation?: Date;
    dateDebut?: Date;
    dateFin?: Date;
    chauffeurId?: string;
    vehiculeId?: string;
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
    vehicule?: {
        id: string;
        marque: string;
        modele: string;
        couleur: string;
        matricule: string;
        annee: number;
        statut: string;
    };
    participants?: ParticipantEntity[];
}
export declare class ParticipantEntity {
    id: string;
    courseId: string;
    clientId: string;
    adresseDepart: string;
    latitudeDepart: number;
    longitudeDepart: number;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    prixInitial: number;
    prixFinal?: number;
    economieClient?: number;
    statut: string;
    role: string;
    heureMontee?: Date;
    heureDescente?: Date;
    dateCreation: Date;
    client?: {
        id: string;
        utilisateurId: string;
        nom: string;
        prenom: string;
        email: string;
        telephone: string;
    };
}
export declare class RideEstimateEntity {
    distanceKm: number;
    dureeEstimeeMinutes: number;
    prixDepart: number;
    prixKm: number;
    prixMinimum: number;
    commission: number;
    prixCalcule: number;
    prixFinal: number;
}
