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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("./common/decorators/public.decorator");
const swagger_helpers_1 = require("./common/swagger/swagger.helpers");
const swagger_2 = require("@nestjs/swagger");
class HealthDataEntity {
    status;
    service;
}
__decorate([
    (0, swagger_2.ApiProperty)({ example: 'ok' }),
    __metadata("design:type", String)
], HealthDataEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({ example: 'VAYRIX Backend' }),
    __metadata("design:type", String)
], HealthDataEntity.prototype, "service", void 0);
let AppController = class AppController {
    getHealth() {
        return { status: 'ok', service: 'VAYRIX Backend' };
    }
};
exports.AppController = AppController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('health'),
    (0, swagger_1.ApiOperation)({ summary: 'Vérifier que l\'API est en ligne' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(HealthDataEntity, 'API opérationnelle'),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHealth", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('Health'),
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map