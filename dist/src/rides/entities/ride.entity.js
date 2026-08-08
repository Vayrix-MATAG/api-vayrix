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
exports.RideEstimateEntity = exports.ParticipantEntity = exports.RideEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class RideEntity {
    id;
    adresseDepart;
    latitudeDepart;
    longitudeDepart;
    adresseArrivee;
    latitudeArrivee;
    longitudeArrivee;
    distance;
    dureeEstimee;
    prixInitial;
    prixNegocie;
    prixFinal;
    typeCourse;
    statut;
    partageActif;
    dateCreation;
    dateAcceptation;
    dateDebut;
    dateFin;
    chauffeurId;
    vehiculeId;
    chauffeur;
    vehicule;
    participants;
}
exports.RideEntity = RideEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], RideEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Rue de Paris, Douala' }),
    __metadata("design:type", String)
], RideEntity.prototype, "adresseDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.0483 }),
    __metadata("design:type", Number)
], RideEntity.prototype, "latitudeDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9.7043 }),
    __metadata("design:type", Number)
], RideEntity.prototype, "longitudeDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '45 Avenue du General, Douala' }),
    __metadata("design:type", String)
], RideEntity.prototype, "adresseArrivee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.0583 }),
    __metadata("design:type", Number)
], RideEntity.prototype, "latitudeArrivee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9.7143 }),
    __metadata("design:type", Number)
], RideEntity.prototype, "longitudeArrivee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8.5 }),
    __metadata("design:type", Number)
], RideEntity.prototype, "distance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20 }),
    __metadata("design:type", Number)
], RideEntity.prototype, "dureeEstimee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2500 }),
    __metadata("design:type", Number)
], RideEntity.prototype, "prixInitial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2400 }),
    __metadata("design:type", Number)
], RideEntity.prototype, "prixNegocie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2500 }),
    __metadata("design:type", Number)
], RideEntity.prototype, "prixFinal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['STANDARD', 'PREMIUM', 'EXPRESS'], example: 'STANDARD' }),
    __metadata("design:type", String)
], RideEntity.prototype, "typeCourse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['DEMANDEE', 'EN_RECHERCHE', 'ACCEPTEE', 'EN_COURS', 'TERMINEE', 'ANNULEE'], example: 'EN_COURS' }),
    __metadata("design:type", String)
], RideEntity.prototype, "statut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], RideEntity.prototype, "partageActif", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-08-08T10:00:00Z' }),
    __metadata("design:type", Date)
], RideEntity.prototype, "dateCreation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-08-08T10:05:00Z' }),
    __metadata("design:type", Date)
], RideEntity.prototype, "dateAcceptation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-08-08T10:15:00Z' }),
    __metadata("design:type", Date)
], RideEntity.prototype, "dateDebut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-08-08T10:35:00Z' }),
    __metadata("design:type", Date)
], RideEntity.prototype, "dateFin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], RideEntity.prototype, "chauffeurId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], RideEntity.prototype, "vehiculeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RideEntity.prototype, "chauffeur", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RideEntity.prototype, "vehicule", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Array)
], RideEntity.prototype, "participants", void 0);
class ParticipantEntity {
    id;
    courseId;
    clientId;
    adresseDepart;
    latitudeDepart;
    longitudeDepart;
    adresseArrivee;
    latitudeArrivee;
    longitudeArrivee;
    prixInitial;
    prixFinal;
    economieClient;
    statut;
    role;
    heureMontee;
    heureDescente;
    dateCreation;
    client;
}
exports.ParticipantEntity = ParticipantEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], ParticipantEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], ParticipantEntity.prototype, "courseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], ParticipantEntity.prototype, "clientId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Rue de Paris, Douala' }),
    __metadata("design:type", String)
], ParticipantEntity.prototype, "adresseDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.0483 }),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "latitudeDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9.7043 }),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "longitudeDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '45 Avenue du General, Douala' }),
    __metadata("design:type", String)
], ParticipantEntity.prototype, "adresseArrivee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.0583 }),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "latitudeArrivee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9.7143 }),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "longitudeArrivee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2500 }),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "prixInitial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2400 }),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "prixFinal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "economieClient", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['EN_ATTENTE', 'CONFIRME', 'EN_COURS', 'TERMINE', 'ANNULE'], example: 'EN_COURS' }),
    __metadata("design:type", String)
], ParticipantEntity.prototype, "statut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'DEMANDEUR' }),
    __metadata("design:type", String)
], ParticipantEntity.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-08-08T10:15:00Z' }),
    __metadata("design:type", Date)
], ParticipantEntity.prototype, "heureMontee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-08-08T10:35:00Z' }),
    __metadata("design:type", Date)
], ParticipantEntity.prototype, "heureDescente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-08-08T10:00:00Z' }),
    __metadata("design:type", Date)
], ParticipantEntity.prototype, "dateCreation", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], ParticipantEntity.prototype, "client", void 0);
class RideEstimateEntity {
    distanceKm;
    dureeEstimeeMinutes;
    prixDepart;
    prixKm;
    prixMinimum;
    commission;
    prixCalcule;
    prixFinal;
}
exports.RideEstimateEntity = RideEstimateEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8.5 }),
    __metadata("design:type", Number)
], RideEstimateEntity.prototype, "distanceKm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20 }),
    __metadata("design:type", Number)
], RideEstimateEntity.prototype, "dureeEstimeeMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], RideEstimateEntity.prototype, "prixDepart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 250 }),
    __metadata("design:type", Number)
], RideEstimateEntity.prototype, "prixKm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    __metadata("design:type", Number)
], RideEstimateEntity.prototype, "prixMinimum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0.1 }),
    __metadata("design:type", Number)
], RideEstimateEntity.prototype, "commission", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2625 }),
    __metadata("design:type", Number)
], RideEstimateEntity.prototype, "prixCalcule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2625 }),
    __metadata("design:type", Number)
], RideEstimateEntity.prototype, "prixFinal", void 0);
//# sourceMappingURL=ride.entity.js.map