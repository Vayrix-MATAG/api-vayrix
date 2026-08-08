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
exports.DriversController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../common/guards/roles.guard");
const swagger_helpers_1 = require("../common/swagger/swagger.helpers");
const drivers_dto_1 = require("./dto/drivers.dto");
const driver_entity_1 = require("./entities/driver.entity");
const drivers_service_1 = require("./drivers.service");
let DriversController = class DriversController {
    driversService;
    constructor(driversService) {
        this.driversService = driversService;
    }
    getMe(user) {
        return this.driversService.findMe(BigInt(user.id));
    }
    updateProfile(user, dto) {
        return this.driversService.updateProfile(BigInt(user.id), dto);
    }
    updateOnlineStatus(user, dto) {
        return this.driversService.updateOnlineStatus(BigInt(user.id), dto);
    }
    updateStatus(user, dto) {
        return this.driversService.updateStatus(BigInt(user.id), dto);
    }
    updateLocation(user, dto) {
        return this.driversService.updateLocation(BigInt(user.id), dto.latitude, dto.longitude);
    }
    findAll(query) {
        return this.driversService.findAll(query);
    }
    findOne(id) {
        return this.driversService.findOne(BigInt(id));
    }
};
exports.DriversController = DriversController;
__decorate([
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Mon profil chauffeur' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(driver_entity_1.DriverEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CHAUFFEUR'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DriversController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier mon profil chauffeur' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(driver_entity_1.DriverEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CHAUFFEUR'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, drivers_dto_1.UpdateDriverProfileDto]),
    __metadata("design:returntype", void 0)
], DriversController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/online'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier mon statut en ligne' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(driver_entity_1.DriverEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CHAUFFEUR'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, drivers_dto_1.UpdateDriverOnlineDto]),
    __metadata("design:returntype", void 0)
], DriversController.prototype, "updateOnlineStatus", null);
__decorate([
    (0, common_1.Patch)('me/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier mon statut' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(driver_entity_1.DriverEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CHAUFFEUR', 'ADMIN'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, drivers_dto_1.UpdateDriverStatusDto]),
    __metadata("design:returntype", void 0)
], DriversController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Post)('me/location'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour ma position GPS' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Position mise à jour avec succès' }),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CHAUFFEUR'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DriversController.prototype, "updateLocation", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lister tous les chauffeurs' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(driver_entity_1.DriverEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [drivers_dto_1.DriversQueryDto]),
    __metadata("design:returntype", void 0)
], DriversController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Détail d\'un chauffeur' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(driver_entity_1.DriverEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DriversController.prototype, "findOne", null);
exports.DriversController = DriversController = __decorate([
    (0, swagger_1.ApiTags)('Drivers'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('drivers'),
    __metadata("design:paramtypes", [drivers_service_1.DriversService])
], DriversController);
//# sourceMappingURL=drivers.controller.js.map