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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../../common/guards/roles.guard");
const roles_decorator_1 = require("../../../common/decorators/roles.decorator");
const roles_constants_1 = require("../../../common/constants/roles.constants");
const swagger_helpers_1 = require("../../../common/swagger/swagger.helpers");
const pagination_response_dto_1 = require("../../../common/pagination/pagination-response.dto");
const create_role_dto_1 = require("../dto/create-role.dto");
const update_role_dto_1 = require("../dto/update-role.dto");
const role_filter_dto_1 = require("../dto/role-filter.dto");
const role_entity_1 = require("../entities/role.entity");
const role_service_1 = require("../services/role.service");
let RoleController = class RoleController {
    roleService;
    constructor(roleService) {
        this.roleService = roleService;
    }
    create(dto) {
        return this.roleService.create(dto);
    }
    findAll(filters) {
        return this.roleService.findAll(filters);
    }
    findOne(id) {
        return this.roleService.findOne(id);
    }
    update(id, dto) {
        return this.roleService.update(id, dto);
    }
    remove(id) {
        return this.roleService.remove(id);
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un rôle' }),
    (0, swagger_1.ApiBody)({ type: create_role_dto_1.CreateRoleDto }),
    (0, swagger_helpers_1.ApiWrappedCreatedResponse)(role_entity_1.RoleEntity, 'Rôle créé avec succès'),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lister les rôles (paginé)' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(pagination_response_dto_1.PaginationResponseDto),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_filter_dto_1.RoleFilterDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Détail d\'un rôle' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '1' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(role_entity_1.RoleEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier un rôle' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '1' }),
    (0, swagger_1.ApiBody)({ type: update_role_dto_1.UpdateRoleDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(role_entity_1.RoleEntity, 'Rôle mis à jour avec succès'),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_role_dto_1.UpdateRoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un rôle' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '1' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(role_entity_1.RoleEntity, 'Rôle supprimé avec succès'),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "remove", null);
exports.RoleController = RoleController = __decorate([
    (0, swagger_1.ApiTags)('Roles'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(...roles_constants_1.ADMIN_ACCESS_ROLES),
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map