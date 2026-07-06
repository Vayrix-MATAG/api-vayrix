import { Injectable } from '@nestjs/common';
import { Prisma, Utilisateur } from '../../../generated/prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

const UTILISATEUR_WITH_ROLES = {
  utilisateurRoles: {
    include: { role: true },
  },
  client: true,
  chauffeur: true,
} satisfies Prisma.UtilisateurInclude;

export type UtilisateurWithRoles = Prisma.UtilisateurGetPayload<{
  include: typeof UTILISATEUR_WITH_ROLES;
}>;

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Utilisateur | null> {
    return this.prisma.utilisateur.findUnique({ where: { email } });
  }

  async findByTelephone(telephone: string): Promise<Utilisateur | null> {
    return this.prisma.utilisateur.findFirst({ where: { telephone } });
  }

  async findById(id: bigint): Promise<UtilisateurWithRoles | null> {
    return this.prisma.utilisateur.findUnique({
      where: { id },
      include: UTILISATEUR_WITH_ROLES,
    });
  }

  async findByIdWithPassword(id: bigint): Promise<Utilisateur | null> {
    return this.prisma.utilisateur.findUnique({ where: { id } });
  }

  async findRoleByNom(nom: string) {
    return this.prisma.role.findUnique({ where: { nom } });
  }

  async updateLastLogin(id: bigint): Promise<void> {
    await this.prisma.utilisateur.update({
      where: { id },
      data: { derniereConnexion: new Date() },
    });
  }

  async updateRefreshToken(id: bigint, refreshToken: string | null): Promise<void> {
    await this.prisma.utilisateur.update({
      where: { id },
      data: { refreshToken },
    });
  }

  async updatePassword(id: bigint, motDePasse: string): Promise<void> {
    await this.prisma.utilisateur.update({
      where: { id },
      data: { motDePasse },
    });
  }

  async activateClientAccount(utilisateurId: bigint): Promise<void> {
    await this.prisma.client.updateMany({
      where: { utilisateurId },
      data: { statut: 'ACTIF' },
    });
  }

  async createSignup(data: {
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    motDePasse: string;
    roleNom: string;
    isClient: boolean;
  }): Promise<UtilisateurWithRoles> {
    const utilisateurId = await this.prisma.$transaction(async (tx) => {
      const role = await tx.role.findUnique({ where: { nom: data.roleNom } });
      if (!role) {
        throw new Error(`Rôle ${data.roleNom} introuvable`);
      }

      const utilisateur = await tx.utilisateur.create({
        data: {
          nom: data.nom,
          prenom: data.prenom,
          telephone: data.telephone,
          email: data.email,
          motDePasse: data.motDePasse,
          langue: 'fr',
        },
      });

      await tx.utilisateurRole.create({
        data: {
          utilisateurId: utilisateur.id,
          roleId: role.id,
        },
      });

      if (data.isClient) {
        await tx.client.create({
          data: {
            utilisateurId: utilisateur.id,
            statut: 'ACTIF',
          },
        });
      } else {
        await tx.chauffeur.create({
          data: {
            utilisateurId: utilisateur.id,
            numeroPermis: 'A_COMPLETER',
            statut: 'EN_ATTENTE_VALIDATION',
          },
        });
      }

      return utilisateur.id;
    });

    return this.prisma.utilisateur.findUniqueOrThrow({
      where: { id: utilisateurId },
      include: UTILISATEUR_WITH_ROLES,
    });
  }
}
