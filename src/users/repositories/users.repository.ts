import { Injectable } from '@nestjs/common';
import { Prisma, Utilisateur } from '../../../generated/prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

const USER_SELECT = {
  id: true,
  nom: true,
  prenom: true,
  telephone: true,
  email: true,
  photo: true,
  langue: true,
  derniereConnexion: true,
  dateCreation: true,
  dateModification: true,
  utilisateurRoles: {
    select: {
      role: {
        select: { nom: true },
      },
    },
  },
  client: {
    select: { statut: true, estEnLigne: true },
  },
  chauffeur: {
    select: { statut: true, estEnLigne: true },
  },
} satisfies Prisma.UtilisateurSelect;

export type SafeUser = Prisma.UtilisateurGetPayload<{ select: typeof USER_SELECT }>;

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: bigint): Promise<Utilisateur | null> {
    return this.prisma.utilisateur.findUnique({ where: { id } });
  }

  async findSafeById(id: bigint): Promise<SafeUser | null> {
    return this.prisma.utilisateur.findUnique({
      where: { id },
      select: USER_SELECT,
    });
  }

  async findByEmail(email: string): Promise<Utilisateur | null> {
    return this.prisma.utilisateur.findUnique({ where: { email } });
  }

  async findByTelephone(telephone: string): Promise<Utilisateur | null> {
    return this.prisma.utilisateur.findFirst({ where: { telephone } });
  }

  async update(id: bigint, data: Prisma.UtilisateurUpdateInput): Promise<SafeUser> {
    return this.prisma.utilisateur.update({
      where: { id },
      data,
      select: USER_SELECT,
    });
  }

  async delete(id: bigint): Promise<void> {
    await this.prisma.utilisateur.delete({ where: { id } });
  }
}
