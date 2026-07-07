import { Injectable } from '@nestjs/common';
import { Prisma } from '../../../../generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { RoleListParams, RoleModel } from '../interfaces/role.interface';

const SORTABLE_FIELDS = ['nom', 'description', 'id'] as const;
type SortableField = (typeof SORTABLE_FIELDS)[number];

@Injectable()
export class RoleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.RoleCreateInput): Promise<RoleModel> {
    return this.prisma.role.create({ data });
  }

  async findById(id: bigint): Promise<RoleModel | null> {
    return this.prisma.role.findUnique({ where: { id } });
  }

  async findByNom(nom: string): Promise<RoleModel | null> {
    return this.prisma.role.findUnique({ where: { nom } });
  }

  async findMany(params: RoleListParams): Promise<{ items: RoleModel[]; total: number }> {
    const page = Math.max(1, params.page);
    const limit = Math.max(1, params.limit);
    const skip = (page - 1) * limit;

    const where = this.buildSearchWhere(params.search);
    const orderBy = this.buildOrderBy(params.sortBy, params.sortOrder);

    const [items, total] = await Promise.all([
      this.prisma.role.findMany({ where, orderBy, skip, take: limit }),
      this.prisma.role.count({ where }),
    ]);

    return { items, total };
  }

  async update(id: bigint, data: Prisma.RoleUpdateInput): Promise<RoleModel> {
    return this.prisma.role.update({ where: { id }, data });
  }

  async delete(id: bigint): Promise<void> {
    await this.prisma.role.delete({ where: { id } });
  }

  async countAssignments(roleId: bigint): Promise<number> {
    return this.prisma.utilisateurRole.count({ where: { roleId } });
  }

  private buildSearchWhere(search?: string): Prisma.RoleWhereInput | undefined {
    if (!search?.trim()) {
      return undefined;
    }

    return {
      OR: [
        { nom: { contains: search.trim(), mode: 'insensitive' } },
        { description: { contains: search.trim(), mode: 'insensitive' } },
      ],
    };
  }

  private buildOrderBy(
    sortBy?: string,
    sortOrder: 'asc' | 'desc' = 'desc',
  ): Prisma.RoleOrderByWithRelationInput {
    const field: SortableField = SORTABLE_FIELDS.includes(sortBy as SortableField)
      ? (sortBy as SortableField)
      : 'nom';

    return { [field]: sortOrder };
  }
}
