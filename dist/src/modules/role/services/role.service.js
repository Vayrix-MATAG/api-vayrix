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
var RoleService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const api_response_service_1 = require("../../../common/responses/api-response.service");
const pagination_service_1 = require("../../../common/pagination/pagination.service");
const logger_service_1 = require("../../../common/logger/logger.service");
const messages_constants_1 = require("../../../common/constants/messages.constants");
const role_mapper_1 = require("../mappers/role.mapper");
const role_repository_1 = require("../repositories/role.repository");
let RoleService = RoleService_1 = class RoleService {
    roleRepository;
    apiResponseService;
    paginationService;
    logger;
    constructor(roleRepository, apiResponseService, paginationService, logger) {
        this.roleRepository = roleRepository;
        this.apiResponseService = apiResponseService;
        this.paginationService = paginationService;
        this.logger = logger;
    }
    async create(dto) {
        const existing = await this.roleRepository.findByNom(dto.nom.trim());
        if (existing) {
            throw new common_1.ConflictException(messages_constants_1.MESSAGES.ROLE.DUPLICATE_NOM);
        }
        const role = await this.roleRepository.create({
            nom: dto.nom.trim(),
            description: dto.description.trim(),
        });
        this.logger.log(`Rôle créé: ${role.nom}`, RoleService_1.name);
        return this.apiResponseService.success(role_mapper_1.RoleMapper.toEntity(role), messages_constants_1.MESSAGES.ROLE.CREATED);
    }
    async findAll(filters) {
        const { items, total } = await this.roleRepository.findMany({
            page: filters.page,
            limit: filters.limit,
            search: filters.search,
            sortBy: filters.sortBy,
            sortOrder: filters.sortOrder,
        });
        const pagination = this.paginationService.buildResponse(role_mapper_1.RoleMapper.toEntities(items), total, filters);
        return this.apiResponseService.success(pagination, messages_constants_1.MESSAGES.ROLE.LIST);
    }
    async findOne(id) {
        const role = await this.findRoleOrThrow(id);
        return this.apiResponseService.success(role_mapper_1.RoleMapper.toEntity(role), messages_constants_1.MESSAGES.SUCCESS);
    }
    async update(id, dto) {
        const role = await this.findRoleOrThrow(id);
        if (!dto.nom && !dto.description) {
            throw new common_1.BadRequestException(messages_constants_1.MESSAGES.ROLE.EMPTY_UPDATE);
        }
        if (dto.nom) {
            const duplicate = await this.roleRepository.findByNom(dto.nom.trim());
            if (duplicate && duplicate.id !== role.id) {
                throw new common_1.ConflictException(messages_constants_1.MESSAGES.ROLE.DUPLICATE_NOM);
            }
        }
        const updated = await this.roleRepository.update(role.id, {
            ...(dto.nom !== undefined ? { nom: dto.nom.trim() } : {}),
            ...(dto.description !== undefined
                ? { description: dto.description.trim() }
                : {}),
        });
        this.logger.log(`Rôle modifié: ${updated.nom} (#${updated.id})`, RoleService_1.name);
        return this.apiResponseService.success(role_mapper_1.RoleMapper.toEntity(updated), messages_constants_1.MESSAGES.ROLE.UPDATED);
    }
    async remove(id) {
        const role = await this.findRoleOrThrow(id);
        const assignments = await this.roleRepository.countAssignments(role.id);
        if (assignments > 0) {
            throw new common_1.ConflictException(messages_constants_1.MESSAGES.ROLE.IN_USE);
        }
        await this.roleRepository.delete(role.id);
        this.logger.log(`Rôle supprimé: ${role.nom} (#${role.id})`, RoleService_1.name);
        return this.apiResponseService.success(null, messages_constants_1.MESSAGES.ROLE.DELETED);
    }
    async findRoleOrThrow(id) {
        const roleId = this.parseId(id);
        const role = await this.roleRepository.findById(roleId);
        if (!role) {
            throw new common_1.NotFoundException(messages_constants_1.MESSAGES.ROLE.NOT_FOUND);
        }
        return role;
    }
    parseId(id) {
        try {
            const parsed = BigInt(id);
            if (parsed <= 0n) {
                throw new Error('invalid');
            }
            return parsed;
        }
        catch {
            throw new common_1.BadRequestException(messages_constants_1.MESSAGES.ROLE.INVALID_ID);
        }
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = RoleService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_repository_1.RoleRepository,
        api_response_service_1.ApiResponseService,
        pagination_service_1.PaginationService,
        logger_service_1.LoggerService])
], RoleService);
//# sourceMappingURL=role.service.js.map