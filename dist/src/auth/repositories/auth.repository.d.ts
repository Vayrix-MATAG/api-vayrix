import { Prisma, Utilisateur } from '../../../generated/prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
declare const UTILISATEUR_WITH_ROLES: {
    utilisateurRoles: {
        include: {
            role: true;
        };
    };
    client: true;
    chauffeur: true;
};
export type UtilisateurWithRoles = Prisma.UtilisateurGetPayload<{
    include: typeof UTILISATEUR_WITH_ROLES;
}>;
export declare class AuthRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<Utilisateur | null>;
    findByTelephone(telephone: string): Promise<Utilisateur | null>;
    findById(id: bigint): Promise<UtilisateurWithRoles | null>;
    findByIdWithPassword(id: bigint): Promise<Utilisateur | null>;
    findRoleByNom(nom: string): Promise<{
        id: bigint;
        nom: string;
        description: string;
    } | null>;
    updateLastLogin(id: bigint): Promise<void>;
    updateRefreshToken(id: bigint, refreshToken: string | null): Promise<void>;
    updatePassword(id: bigint, motDePasse: string): Promise<void>;
    activateClientAccount(utilisateurId: bigint): Promise<void>;
    createSignup(data: {
        nom: string;
        prenom: string;
        telephone: string;
        email: string;
        motDePasse: string;
        roleNom: string;
        isClient: boolean;
    }): Promise<UtilisateurWithRoles>;
}
export {};
