export declare class AuthTokensEntity {
    accessToken: string;
    refreshToken: string;
    expiresIn: string;
}
export declare class AuthUserEntity {
    id: string;
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    roles: string[];
    photo?: string | null;
    langue: string;
    derniereConnexion?: Date | null;
}
export declare class AuthResponseEntity extends AuthTokensEntity {
    utilisateur: AuthUserEntity;
}
