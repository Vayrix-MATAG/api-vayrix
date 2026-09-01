import { Injectable } from '@nestjs/common';
import { Prisma, Vehicule } from '@prisma/client';
import { PaginatedResult, PaginationOptions } from '../../common/interfaces/pagination.interface';
import { buildPaginatedResult, buildSearchOr, getPaginationParams } from '../../common/utils/pagination.util';
import { PrismaService } from '../../prisma/prisma.service';

const VEHICULE_INCLUDE = {
  typeVehicule: {
    select: { id: true, nom: true, prixBase: true, prixParKm: true },
  },
} satisfies Prisma.VehiculeInclude;

export type VehiculeWithType = Prisma.VehiculeGetPayload<{ include: typeof VEHICULE_INCLUDE }>;

@Injectable()
export class VehiclesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.VehiculeCreateInput): Promise<Vehicule> {
    return this.prisma.vehicule.create({ data });
  }

  async findById(id: bigint): Promise<VehiculeWithType | null> {
    return this.prisma.vehicule.findUnique({
      where: { id },
      include: VEHICULE_INCLUDE,
    });
  }

  async findByMatricule(matricule: string): Promise<Vehicule | null> {
    return this.prisma.vehicule.findUnique({ where: { matricule } });
  }

  async findByChauffeurId(chauffeurId: bigint): Promise<VehiculeWithType[]> {
    return this.prisma.vehicule.findMany({
      where: { chauffeurId },
      include: VEHICULE_INCLUDE,
    });
  }

  async findAll(options: PaginationOptions & { statut?: string; typeVehiculeId?: string }): Promise<PaginatedResult<VehiculeWithType>> {
    const { skip, take, orderBy } = getPaginationParams(options);
    const searchOr = buildSearchOr(options.search, ['marque', 'modele', 'matricule']);

    // Utiliser 'id' comme fallback si sortBy est 'createdAt' (champ inexistant dans Vehicule)
    let validOrderBy: Prisma.VehiculeOrderByWithRelationInput = orderBy as Prisma.VehiculeOrderByWithRelationInput;
    if ((orderBy as any).createdAt) {
      validOrderBy = { id: 'desc' as const };
    }

    const where: Prisma.VehiculeWhereInput = {
      ...(options.statut && { statut: options.statut }),
      ...(options.typeVehiculeId && { typeVehiculeId: BigInt(options.typeVehiculeId) }),
      ...(searchOr && { OR: searchOr }),
    };

    const [data, total] = await Promise.all([
      this.prisma.vehicule.findMany({ where, skip, take, orderBy: validOrderBy, include: VEHICULE_INCLUDE }),
      this.prisma.vehicule.count({ where }),
    ]);

    return buildPaginatedResult(data, total, options.page, options.limit);
  }

  async update(id: bigint, data: Prisma.VehiculeUpdateInput): Promise<VehiculeWithType> {
    return this.prisma.vehicule.update({ where: { id }, data, include: VEHICULE_INCLUDE });
  }

  async delete(id: bigint): Promise<Vehicule> {
    return this.prisma.vehicule.delete({ where: { id } });
  }
}
