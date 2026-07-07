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
exports.RoleRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const SORTABLE_FIELDS = ['nom', 'description', 'id'];
let RoleRepository = class RoleRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.role.create({ data });
    }
    async findById(id) {
        return this.prisma.role.findUnique({ where: { id } });
    }
    async findByNom(nom) {
        return this.prisma.role.findUnique({ where: { nom } });
    }
    async findMany(params) {
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
    async update(id, data) {
        return this.prisma.role.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prisma.role.delete({ where: { id } });
    }
    async countAssignments(roleId) {
        return this.prisma.utilisateurRole.count({ where: { roleId } });
    }
    buildSearchWhere(search) {
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
    buildOrderBy(sortBy, sortOrder = 'desc') {
        const field = SORTABLE_FIELDS.includes(sortBy)
            ? sortBy
            : 'nom';
        return { [field]: sortOrder };
    }
};
exports.RoleRepository = RoleRepository;
exports.RoleRepository = RoleRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoleRepository);
//# sourceMappingURL=role.repository.js.map