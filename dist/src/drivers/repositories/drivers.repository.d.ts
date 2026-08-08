import { Chauffeur, Prisma } from "@prisma/client";
import { PrismaService } from '../../prisma/prisma.service';
import { PaginatedResult, PaginationOptions } from '../../common/interfaces/pagination.interface';
declare const CHAUFFEUR_INCLUDE: {
    utilisateur: {
        select: {
            id: true;
            nom: true;
            prenom: true;
            email: true;
            telephone: true;
            photo: true;
        };
    };
};
export type ChauffeurWithUtilisateur = Prisma.ChauffeurGetPayload<{
    include: typeof CHAUFFEUR_INCLUDE;
}>;
export declare class DriversRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByUtilisateurId(utilisateurId: bigint): Promise<ChauffeurWithUtilisateur | null>;
    findById(id: bigint): Promise<ChauffeurWithUtilisateur | null>;
    findAll(options: PaginationOptions & {
        statut?: string;
        estEnLigne?: boolean;
    }): Promise<PaginatedResult<ChauffeurWithUtilisateur>>;
    update(id: bigint, data: Prisma.ChauffeurUpdateInput): Promise<ChauffeurWithUtilisateur>;
    updateOnlineStatus(id: bigint, estEnLigne: boolean): Promise<Chauffeur>;
    updateStatus(id: bigint, statut: string, motifStatut?: string): Promise<Chauffeur>;
}
export {};
