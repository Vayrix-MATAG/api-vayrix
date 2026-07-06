"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const UTILISATEUR_WITH_ROLES = {
    utilisateurRoles: {
        include: { role: true },
    },
    client: true,
    chauffeur: true,
};
let AuthRepository = class AuthRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByEmail(email) {
        return this.prisma.utilisateur.findUnique({ where: { email } });
    }
    async findByTelephone(telephone) {
        return this.prisma.utilisateur.findFirst({ where: { telephone } });
    }
    async findById(id) {
        return this.prisma.utilisateur.findUnique({
            where: { id },
            include: UTILISATEUR_WITH_ROLES,
        });
    }
    async findByIdWithPassword(id) {
        return this.prisma.utilisateur.findUnique({ where: { id } });
    }
    async findRoleByNom(nom) {
        return this.prisma.role.findUnique({ where: { nom } });
    }
    async updateLastLogin(id) {
        await this.prisma.utilisateur.update({
            where: { id },
            data: { derniereConnexion: new Date() },
        });
    }
    async updateRefreshToken(id, refreshToken) {
        await this.prisma.utilisateur.update({
            where: { id },
            data: { refreshToken },
        });
    }
    async updatePassword(id, motDePasse) {
        await this.prisma.utilisateur.update({
            where: { id },
            data: { motDePasse },
        });
    }
    async activateClientAccount(utilisateurId) {
        await this.prisma.client.updateMany({
            where: { utilisateurId },
            data: { statut: 'ACTIF' },
        });
    }
    async createSignup(data) {
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
            }
            else {
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
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthRepository);
//# sourceMappingURL=auth.repository.js.map