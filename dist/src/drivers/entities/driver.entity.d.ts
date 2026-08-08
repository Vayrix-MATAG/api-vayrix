export declare class DriverEntity {
    id: bigint;
    utilisateurId: bigint;
    numeroPermis: string;
    estEnLigne: boolean;
    solde: number;
    statut: string;
    motifStatut?: string;
    dateCreation: Date;
    dateModification: Date;
    utilisateur?: {
        id: bigint;
        nom: string;
        prenom: string;
        email: string;
        telephone: string;
        photo?: string;
    };
}
