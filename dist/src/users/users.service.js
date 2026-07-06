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
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./repositories/users.repository");
let UsersService = UsersService_1 = class UsersService {
    usersRepository;
    logger = new common_1.Logger(UsersService_1.name);
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async findOne(id) {
        const user = await this.usersRepository.findSafeById(BigInt(id));
        if (!user) {
            throw new common_1.NotFoundException('Utilisateur introuvable');
        }
        return this.toEntity(user);
    }
    async update(id, dto) {
        await this.ensureExists(id);
        const user = await this.usersRepository.update(BigInt(id), dto);
        this.logger.log(`Utilisateur mis à jour: ${id}`);
        return this.toEntity(user);
    }
    async updatePhoto(id, dto) {
        await this.ensureExists(id);
        const user = await this.usersRepository.update(BigInt(id), { photo: dto.photo });
        this.logger.log(`Photo utilisateur mise à jour: ${id}`);
        return this.toEntity(user);
    }
    async updateLangue(id, dto) {
        await this.ensureExists(id);
        const user = await this.usersRepository.update(BigInt(id), { langue: dto.langue });
        this.logger.log(`Langue utilisateur mise à jour: ${id}`);
        return this.toEntity(user);
    }
    async updateTelephone(id, dto) {
        await this.ensureExists(id);
        const existing = await this.usersRepository.findByTelephone(dto.telephone);
        if (existing && existing.id !== BigInt(id)) {
            throw new common_1.ConflictException('Ce numéro de téléphone est déjà utilisé');
        }
        const user = await this.usersRepository.update(BigInt(id), {
            telephone: dto.telephone,
        });
        this.logger.log(`Téléphone utilisateur mis à jour: ${id}`);
        return this.toEntity(user);
    }
    async remove(id) {
        await this.ensureExists(id);
        await this.usersRepository.delete(BigInt(id));
        this.logger.log(`Utilisateur supprimé: ${id}`);
        return { message: 'Compte supprimé avec succès' };
    }
    async ensureExists(id) {
        const user = await this.usersRepository.findById(BigInt(id));
        if (!user) {
            throw new common_1.NotFoundException('Utilisateur introuvable');
        }
    }
    toEntity(user) {
        return {
            id: user.id.toString(),
            nom: user.nom,
            prenom: user.prenom,
            telephone: user.telephone,
            email: user.email,
            roles: user.utilisateurRoles.map((ur) => ur.role.nom),
            photo: user.photo,
            langue: user.langue,
            statutProfil: user.client?.statut ?? user.chauffeur?.statut ?? null,
            derniereConnexion: user.derniereConnexion,
            dateCreation: user.dateCreation,
            dateModification: user.dateModification,
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map