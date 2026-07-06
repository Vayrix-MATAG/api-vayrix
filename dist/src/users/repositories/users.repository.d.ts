import { Prisma, Utilisateur } from '../../../generated/prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
declare const USER_SELECT: {
    id: true;
    nom: true;
    prenom: true;
    telephone: true;
    email: true;
    photo: true;
    langue: true;
    derniereConnexion: true;
    dateCreation: true;
    dateModification: true;
    utilisateurRoles: {
        select: {
            role: {
                select: {
                    nom: true;
                };
            };
        };
    };
    client: {
        select: {
            statut: true;
            estEnLigne: true;
        };
    };
    chauffeur: {
        select: {
            statut: true;
            estEnLigne: true;
        };
    };
};
export type SafeUser = Prisma.UtilisateurGetPayload<{
    select: typeof USER_SELECT;
}>;
export declare class UsersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findById(id: bigint): Promise<Utilisateur | null>;
    findSafeById(id: bigint): Promise<SafeUser | null>;
    findByEmail(email: string): Promise<Utilisateur | null>;
    findByTelephone(telephone: string): Promise<Utilisateur | null>;
    update(id: bigint, data: Prisma.UtilisateurUpdateInput): Promise<SafeUser>;
    delete(id: bigint): Promise<void>;
}
export {};
