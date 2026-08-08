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
exports.RidesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../common/guards/roles.guard");
const swagger_helpers_1 = require("../common/swagger/swagger.helpers");
const rides_dto_1 = require("./dto/rides.dto");
const ride_entity_1 = require("./entities/ride.entity");
const rides_service_1 = require("./rides.service");
let RidesController = class RidesController {
    ridesService;
    constructor(ridesService) {
        this.ridesService = ridesService;
    }
    findAll(query) {
        return this.ridesService.findAll(query);
    }
    estimate(dto) {
        return this.ridesService.estimateFare(dto);
    }
    create(user, dto) {
        return this.ridesService.create(BigInt(user.id), dto);
    }
    findMyRides(user, query) {
        return this.ridesService.findMyRides(BigInt(user.id), query);
    }
    findDriverRides(user, query) {
        return this.ridesService.findDriverRides(BigInt(user.id), query);
    }
    findAvailableDrivers(latitudeDepart, longitudeDepart, typeVehiculeId) {
        return this.ridesService.findAvailableDrivers(latitudeDepart, longitudeDepart, typeVehiculeId);
    }
    findOne(id, user) {
        return this.ridesService.findOne(id, BigInt(user.id));
    }
    acceptRide(user, id, dto) {
        return this.ridesService.acceptRide(BigInt(user.id), id, dto);
    }
    startRide(user, id) {
        return this.ridesService.startRide(BigInt(user.id), id);
    }
    completeRide(user, id) {
        return this.ridesService.completeRide(BigInt(user.id), id);
    }
    cancelRide(user, id, dto) {
        return this.ridesService.cancelRide(BigInt(user.id), id, dto);
    }
};
exports.RidesController = RidesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lister toutes les courses (ADMIN/SUPER_ADMIN)' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(ride_entity_1.RideEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'SUPER_ADMIN'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rides_dto_1.RidesQueryDto]),
    __metadata("design:returntype", void 0)
], RidesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('estimate'),
    (0, swagger_1.ApiOperation)({ summary: 'Estimer le tarif d\'une course' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(ride_entity_1.RideEstimateEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CLIENT', 'ADMIN', 'SUPER_ADMIN'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rides_dto_1.EstimateRideDto]),
    __metadata("design:returntype", void 0)
], RidesController.prototype, "estimate", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une nouvelle course' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(ride_entity_1.RideEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CLIENT', 'SUPER_ADMIN'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rides_dto_1.CreateRideDto]),
    __metadata("design:returntype", void 0)
], RidesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Mes courses (client)' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(ride_entity_1.RideEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CLIENT'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rides_dto_1.RidesQueryDto]),
    __metadata("design:returntype", void 0)
], RidesController.prototype, "findMyRides", null);
__decorate([
    (0, common_1.Get)('driver'),
    (0, swagger_1.ApiOperation)({ summary: 'Mes courses (chauffeur)' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(ride_entity_1.RideEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CHAUFFEUR'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rides_dto_1.RidesQueryDto]),
    __metadata("design:returntype", void 0)
], RidesController.prototype, "findDriverRides", null);
__decorate([
    (0, common_1.Get)('available-drivers'),
    (0, swagger_1.ApiOperation)({ summary: 'Rechercher des chauffeurs disponibles' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(Object),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CLIENT', 'ADMIN'),
    __param(0, (0, common_1.Query)('latitudeDepart')),
    __param(1, (0, common_1.Query)('longitudeDepart')),
    __param(2, (0, common_1.Query)('typeVehiculeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], RidesController.prototype, "findAvailableDrivers", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Détail d\'une course' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(ride_entity_1.RideEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CLIENT', 'CHAUFFEUR', 'ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RidesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/accept'),
    (0, swagger_1.ApiOperation)({ summary: 'Accepter une course (chauffeur)' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(ride_entity_1.RideEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CHAUFFEUR'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, rides_dto_1.AcceptRideDto]),
    __metadata("design:returntype", void 0)
], RidesController.prototype, "acceptRide", null);
__decorate([
    (0, common_1.Patch)(':id/start'),
    (0, swagger_1.ApiOperation)({ summary: 'Démarrer une course (chauffeur)' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(ride_entity_1.RideEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CHAUFFEUR'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], RidesController.prototype, "startRide", null);
__decorate([
    (0, common_1.Patch)(':id/complete'),
    (0, swagger_1.ApiOperation)({ summary: 'Terminer une course (chauffeur)' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(ride_entity_1.RideEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CHAUFFEUR'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], RidesController.prototype, "completeRide", null);
__decorate([
    (0, common_1.Patch)(':id/cancel'),
    (0, swagger_1.ApiOperation)({ summary: 'Annuler une course' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(ride_entity_1.RideEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    (0, roles_decorator_1.Roles)('CLIENT', 'CHAUFFEUR'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, rides_dto_1.CancelRideDto]),
    __metadata("design:returntype", void 0)
], RidesController.prototype, "cancelRide", null);
exports.RidesController = RidesController = __decorate([
    (0, swagger_1.ApiTags)('Rides'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('rides'),
    __metadata("design:paramtypes", [rides_service_1.RidesService])
], RidesController);
//# sourceMappingURL=rides.controller.js.map