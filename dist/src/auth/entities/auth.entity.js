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
exports.AuthResponseEntity = exports.AuthUserEntity = exports.AuthTokensEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class AuthTokensEntity {
    accessToken;
    refreshToken;
    expiresIn;
}
exports.AuthTokensEntity = AuthTokensEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' }),
    __metadata("design:type", String)
], AuthTokensEntity.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' }),
    __metadata("design:type", String)
], AuthTokensEntity.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '15m' }),
    __metadata("design:type", String)
], AuthTokensEntity.prototype, "expiresIn", void 0);
class AuthUserEntity {
    id;
    nom;
    prenom;
    telephone;
    email;
    roles;
    photo;
    langue;
    derniereConnexion;
}
exports.AuthUserEntity = AuthUserEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], AuthUserEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Diop' }),
    __metadata("design:type", String)
], AuthUserEntity.prototype, "nom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Awa' }),
    __metadata("design:type", String)
], AuthUserEntity.prototype, "prenom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+221770000002' }),
    __metadata("design:type", String)
], AuthUserEntity.prototype, "telephone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'client@vayrix.com' }),
    __metadata("design:type", String)
], AuthUserEntity.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['CLIENT'] }),
    __metadata("design:type", Array)
], AuthUserEntity.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'storage/photos/client.jpg' }),
    __metadata("design:type", Object)
], AuthUserEntity.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'fr' }),
    __metadata("design:type", String)
], AuthUserEntity.prototype, "langue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2026-07-06T18:00:00.000Z' }),
    __metadata("design:type", Object)
], AuthUserEntity.prototype, "derniereConnexion", void 0);
class AuthResponseEntity extends AuthTokensEntity {
    utilisateur;
}
exports.AuthResponseEntity = AuthResponseEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ type: AuthUserEntity }),
    __metadata("design:type", AuthUserEntity)
], AuthResponseEntity.prototype, "utilisateur", void 0);
//# sourceMappingURL=auth.entity.js.map