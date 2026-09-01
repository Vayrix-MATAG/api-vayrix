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
exports.VehiclesRepository = void 0;
const common_1 = require("@nestjs/common");
const pagination_util_1 = require("../../common/utils/pagination.util");
const prisma_service_1 = require("../../prisma/prisma.service");
const VEHICULE_INCLUDE = {
    typeVehicule: {
        select: { id: true, nom: true, prixBase: true, prixParKm: true },
    },
};
let VehiclesRepository = class VehiclesRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.vehicule.create({ data });
    }
    async findById(id) {
        return this.prisma.vehicule.findUnique({
            where: { id },
            include: VEHICULE_INCLUDE,
        });
    }
    async findByMatricule(matricule) {
        return this.prisma.vehicule.findUnique({ where: { matricule } });
    }
    async findByChauffeurId(chauffeurId) {
        return this.prisma.vehicule.findMany({
            where: { chauffeurId },
            include: VEHICULE_INCLUDE,
        });
    }
    async findAll(options) {
        const { skip, take, orderBy } = (0, pagination_util_1.getPaginationParams)(options);
        const searchOr = (0, pagination_util_1.buildSearchOr)(options.search, ['marque', 'modele', 'matricule']);
        const validOrderBy = orderBy.createdAt ? { id: 'desc' } : orderBy;
        const where = {
            ...(options.statut && { statut: options.statut }),
            ...(options.typeVehiculeId && { typeVehiculeId: BigInt(options.typeVehiculeId) }),
            ...(searchOr && { OR: searchOr }),
        };
        const [data, total] = await Promise.all([
            this.prisma.vehicule.findMany({ where, skip, take, orderBy: validOrderBy, include: VEHICULE_INCLUDE }),
            this.prisma.vehicule.count({ where }),
        ]);
        return (0, pagination_util_1.buildPaginatedResult)(data, total, options.page, options.limit);
    }
    async update(id, data) {
        return this.prisma.vehicule.update({ where: { id }, data, include: VEHICULE_INCLUDE });
    }
    async delete(id) {
        return this.prisma.vehicule.delete({ where: { id } });
    }
};
exports.VehiclesRepository = VehiclesRepository;
exports.VehiclesRepository = VehiclesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VehiclesRepository);
//# sourceMappingURL=vehicles.repository.js.map