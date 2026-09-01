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
exports.DriversRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const pagination_util_1 = require("../../common/utils/pagination.util");
const CHAUFFEUR_INCLUDE = {
    utilisateur: {
        select: { id: true, nom: true, prenom: true, email: true, telephone: true, photo: true },
    },
};
let DriversRepository = class DriversRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByUtilisateurId(utilisateurId) {
        return this.prisma.chauffeur.findUnique({
            where: { utilisateurId },
            include: CHAUFFEUR_INCLUDE,
        });
    }
    async findById(id) {
        return this.prisma.chauffeur.findUnique({
            where: { id },
            include: CHAUFFEUR_INCLUDE,
        });
    }
    async findAll(options) {
        const { skip, take, orderBy } = (0, pagination_util_1.getPaginationParams)(options);
        const searchOr = (0, pagination_util_1.buildSearchOr)(options.search, ['nom', 'prenom', 'email', 'telephone']);
        const validOrderBy = orderBy.createdAt ? { dateCreation: 'desc' } : orderBy;
        const where = {
            ...(options.statut && { statut: options.statut }),
            ...(typeof options.estEnLigne === 'boolean' && { estEnLigne: options.estEnLigne }),
            ...(searchOr && { utilisateur: { OR: searchOr } }),
        };
        const [data, total] = await Promise.all([
            this.prisma.chauffeur.findMany({ where, skip, take, orderBy: validOrderBy, include: CHAUFFEUR_INCLUDE }),
            this.prisma.chauffeur.count({ where }),
        ]);
        return (0, pagination_util_1.buildPaginatedResult)(data, total, options.page, options.limit);
    }
    async update(id, data) {
        return this.prisma.chauffeur.update({ where: { id }, data, include: CHAUFFEUR_INCLUDE });
    }
    async updateOnlineStatus(id, estEnLigne) {
        return this.prisma.chauffeur.update({
            where: { id },
            data: { estEnLigne },
        });
    }
    async updateStatus(id, statut, motifStatut) {
        return this.prisma.chauffeur.update({
            where: { id },
            data: { statut, motifStatut },
        });
    }
};
exports.DriversRepository = DriversRepository;
exports.DriversRepository = DriversRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DriversRepository);
//# sourceMappingURL=drivers.repository.js.map