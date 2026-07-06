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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
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
};
let UsersRepository = class UsersRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        return this.prisma.utilisateur.findUnique({ where: { id } });
    }
    async findSafeById(id) {
        return this.prisma.utilisateur.findUnique({
            where: { id },
            select: USER_SELECT,
        });
    }
    async findByEmail(email) {
        return this.prisma.utilisateur.findUnique({ where: { email } });
    }
    async findByTelephone(telephone) {
        return this.prisma.utilisateur.findFirst({ where: { telephone } });
    }
    async update(id, data) {
        return this.prisma.utilisateur.update({
            where: { id },
            data,
            select: USER_SELECT,
        });
    }
    async delete(id) {
        await this.prisma.utilisateur.delete({ where: { id } });
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map