export declare class UserEntity {
    id: string;
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    roles: string[];
    photo?: string | null;
    langue: string;
    statutProfil?: string | null;
    derniereConnexion?: Date | null;
    dateCreation: Date;
    dateModification: Date;
}
