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
exports.VehicleEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class VehicleEntity {
    id;
    chauffeurId;
    typeVehiculeId;
    marque;
    modele;
    couleur;
    matricule;
    annee;
    statut;
    typeVehicule;
}
exports.VehicleEntity = VehicleEntity;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", BigInt)
], VehicleEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", BigInt)
], VehicleEntity.prototype, "chauffeurId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", BigInt)
], VehicleEntity.prototype, "typeVehiculeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VehicleEntity.prototype, "marque", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VehicleEntity.prototype, "modele", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VehicleEntity.prototype, "couleur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VehicleEntity.prototype, "matricule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], VehicleEntity.prototype, "annee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VehicleEntity.prototype, "statut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], VehicleEntity.prototype, "typeVehicule", void 0);
//# sourceMappingURL=vehicle.entity.js.map