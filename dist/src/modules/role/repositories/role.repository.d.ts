import { Prisma } from '../../../../generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { RoleListParams, RoleModel } from '../interfaces/role.interface';
export declare class RoleRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.RoleCreateInput): Promise<RoleModel>;
    findById(id: bigint): Promise<RoleModel | null>;
    findByNom(nom: string): Promise<RoleModel | null>;
    findMany(params: RoleListParams): Promise<{
        items: RoleModel[];
        total: number;
    }>;
    update(id: bigint, data: Prisma.RoleUpdateInput): Promise<RoleModel>;
    delete(id: bigint): Promise<void>;
    countAssignments(roleId: bigint): Promise<number>;
    private buildSearchWhere;
    private buildOrderBy;
}
