import { Prisma, Vehicule } from "@prisma/client";
import { PaginatedResult, PaginationOptions } from '../../common/interfaces/pagination.interface';
import { PrismaService } from '../../prisma/prisma.service';
declare const VEHICULE_INCLUDE: {
    typeVehicule: {
        select: {
            id: true;
            nom: true;
            prixBase: true;
            prixParKm: true;
        };
    };
};
export type VehiculeWithType = Prisma.VehiculeGetPayload<{
    include: typeof VEHICULE_INCLUDE;
}>;
export declare class VehiclesRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.VehiculeCreateInput): Promise<Vehicule>;
    findById(id: bigint): Promise<VehiculeWithType | null>;
    findByMatricule(matricule: string): Promise<Vehicule | null>;
    findByChauffeurId(chauffeurId: bigint): Promise<VehiculeWithType[]>;
    findAll(options: PaginationOptions & {
        statut?: string;
        typeVehiculeId?: string;
    }): Promise<PaginatedResult<VehiculeWithType>>;
    update(id: bigint, data: Prisma.VehiculeUpdateInput): Promise<VehiculeWithType>;
    delete(id: bigint): Promise<Vehicule>;
}
export {};
