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
exports.RidesQueryDto = exports.CancelRideDto = exports.UpdateRideStatusDto = exports.AcceptRideDto = exports.EstimateRideDto = exports.CreateRideDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const ride_status_interface_1 = require("../interfaces/ride-status.interface");
class CreateRideDto {
    adresseDepart;
    latitudeDepart;
    longitudeDepart;
    adresseArrivee;
    latitudeArrivee;
    longitudeArrivee;
    typeVehiculeId;
    typeCourse;
}
exports.CreateRideDto = CreateRideDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Rue de Paris, Douala' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRideDto.prototype, "adresseDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.0483 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-90),
    (0, class_validator_1.Max)(90),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "latitudeDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9.7043 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-180),
    (0, class_validator_1.Max)(180),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "longitudeDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '45 Avenue du General, Douala' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRideDto.prototype, "adresseArrivee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.0583 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-90),
    (0, class_validator_1.Max)(90),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "latitudeArrivee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9.7143 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-180),
    (0, class_validator_1.Max)(180),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "longitudeArrivee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRideDto.prototype, "typeVehiculeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ride_status_interface_1.CourseType, example: ride_status_interface_1.CourseType.STANDARD }),
    (0, class_validator_1.IsEnum)(ride_status_interface_1.CourseType),
    __metadata("design:type", String)
], CreateRideDto.prototype, "typeCourse", void 0);
class EstimateRideDto {
    latitudeDepart;
    longitudeDepart;
    latitudeArrivee;
    longitudeArrivee;
    typeVehiculeId;
}
exports.EstimateRideDto = EstimateRideDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.0483 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-90),
    (0, class_validator_1.Max)(90),
    __metadata("design:type", Number)
], EstimateRideDto.prototype, "latitudeDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9.7043 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-180),
    (0, class_validator_1.Max)(180),
    __metadata("design:type", Number)
], EstimateRideDto.prototype, "longitudeDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.0583 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-90),
    (0, class_validator_1.Max)(90),
    __metadata("design:type", Number)
], EstimateRideDto.prototype, "latitudeArrivee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9.7143 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-180),
    (0, class_validator_1.Max)(180),
    __metadata("design:type", Number)
], EstimateRideDto.prototype, "longitudeArrivee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EstimateRideDto.prototype, "typeVehiculeId", void 0);
class AcceptRideDto {
    vehiculeId;
}
exports.AcceptRideDto = AcceptRideDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AcceptRideDto.prototype, "vehiculeId", void 0);
class UpdateRideStatusDto {
    statut;
    motif;
}
exports.UpdateRideStatusDto = UpdateRideStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'EN_COURS' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRideStatusDto.prototype, "statut", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRideStatusDto.prototype, "motif", void 0);
class CancelRideDto {
    motif;
}
exports.CancelRideDto = CancelRideDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Client a annulé' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CancelRideDto.prototype, "motif", void 0);
class RidesQueryDto {
    statut;
    typeCourse;
    page;
    limit;
}
exports.RidesQueryDto = RidesQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'EN_COURS' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RidesQueryDto.prototype, "statut", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'STANDARD' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RidesQueryDto.prototype, "typeCourse", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], RidesQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], RidesQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=rides.dto.js.map