import { Injectable } from '@nestjs/common';
import { Chauffeur, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { buildPaginatedResult, buildSearchOr, getPaginationParams } from '../../common/utils/pagination.util';
import { PaginatedResult, PaginationOptions } from '../../common/interfaces/pagination.interface';

const CHAUFFEUR_INCLUDE = {
  utilisateur: {
    select: { id: true, nom: true, prenom: true, email: true, telephone: true, photo: true },
  },
} satisfies Prisma.ChauffeurInclude;

export type ChauffeurWithUtilisateur = Prisma.ChauffeurGetPayload<{ include: typeof CHAUFFEUR_INCLUDE }>;

@Injectable()
export class DriversRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByUtilisateurId(utilisateurId: bigint): Promise<ChauffeurWithUtilisateur | null> {
    return this.prisma.chauffeur.findUnique({
      where: { utilisateurId },
      include: CHAUFFEUR_INCLUDE,
    });
  }

  async findById(id: bigint): Promise<ChauffeurWithUtilisateur | null> {
    return this.prisma.chauffeur.findUnique({
      where: { id },
      include: CHAUFFEUR_INCLUDE,
    });
  }

  async findAll(options: PaginationOptions & { statut?: string; estEnLigne?: boolean }): Promise<PaginatedResult<ChauffeurWithUtilisateur>> {
    const { skip, take, orderBy } = getPaginationParams(options);
    const searchOr = buildSearchOr(options.search, ['nom', 'prenom', 'email', 'telephone']);

    const where: Prisma.ChauffeurWhereInput = {
      ...(options.statut && { statut: options.statut }),
      ...(typeof options.estEnLigne === 'boolean' && { estEnLigne: options.estEnLigne }),
      ...(searchOr && { utilisateur: { OR: searchOr } }),
    };

    const [data, total] = await Promise.all([
      this.prisma.chauffeur.findMany({ where, skip, take, orderBy, include: CHAUFFEUR_INCLUDE }),
      this.prisma.chauffeur.count({ where }),
    ]);

    return buildPaginatedResult(data, total, options.page, options.limit);
  }

  async update(id: bigint, data: Prisma.ChauffeurUpdateInput): Promise<ChauffeurWithUtilisateur> {
    return this.prisma.chauffeur.update({ where: { id }, data, include: CHAUFFEUR_INCLUDE });
  }

  async updateOnlineStatus(id: bigint, estEnLigne: boolean): Promise<Chauffeur> {
    return this.prisma.chauffeur.update({
      where: { id },
      data: { estEnLigne },
    });
  }

  async updateStatus(id: bigint, statut: string, motifStatut?: string): Promise<Chauffeur> {
    return this.prisma.chauffeur.update({
      where: { id },
      data: { statut, motifStatut },
    });
  }
}
