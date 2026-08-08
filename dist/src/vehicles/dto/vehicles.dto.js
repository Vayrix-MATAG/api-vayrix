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
exports.VehiclesQueryDto = exports.UpdateVehicleStatusDto = exports.CreateVehicleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateVehicleDto {
    marque;
    modele;
    annee;
    couleur;
    matricule;
    typeVehiculeId;
    chauffeurId;
}
exports.CreateVehicleDto = CreateVehicleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Toyota' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "marque", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Corolla' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "modele", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2020 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1900),
    (0, class_validator_1.Max)(new Date().getFullYear() + 1),
    __metadata("design:type", Number)
], CreateVehicleDto.prototype, "annee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Blanc' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "couleur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'AB-123-CD' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "matricule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "typeVehiculeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '1', description: 'ID du chauffeur (optionnel pour ADMIN/SUPER_ADMIN)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "chauffeurId", void 0);
class UpdateVehicleStatusDto {
    statut;
}
exports.UpdateVehicleStatusDto = UpdateVehicleStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'DISPONIBLE' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateVehicleStatusDto.prototype, "statut", void 0);
class VehiclesQueryDto {
    statut;
    typeVehiculeId;
    search;
    sortBy;
    sortOrder;
    page;
    limit;
}
exports.VehiclesQueryDto = VehiclesQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'DISPONIBLE' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VehiclesQueryDto.prototype, "statut", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '1' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VehiclesQueryDto.prototype, "typeVehiculeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Toyota' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VehiclesQueryDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'marque' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VehiclesQueryDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'asc' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VehiclesQueryDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], VehiclesQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], VehiclesQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=vehicles.dto.js.map