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
var DriversService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriversService = void 0;
const common_1 = require("@nestjs/common");
const paginated_response_dto_1 = require("../common/dto/paginated-response.dto");
const users_repository_1 = require("../users/repositories/users.repository");
const drivers_repository_1 = require("./repositories/drivers.repository");
let DriversService = DriversService_1 = class DriversService {
    driversRepository;
    usersRepository;
    logger = new common_1.Logger(DriversService_1.name);
    constructor(driversRepository, usersRepository) {
        this.driversRepository = driversRepository;
        this.usersRepository = usersRepository;
    }
    async findMe(utilisateurId) {
        const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
        if (!driver) {
            throw new common_1.NotFoundException('Profil chauffeur introuvable');
        }
        return this.toEntity(driver);
    }
    async updateProfile(utilisateurId, dto) {
        const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
        if (!driver) {
            throw new common_1.NotFoundException('Profil chauffeur introuvable');
        }
        if (dto.nom || dto.prenom || dto.telephone) {
            await this.usersRepository.update(utilisateurId, {
                ...(dto.nom && { nom: dto.nom }),
                ...(dto.prenom && { prenom: dto.prenom }),
                ...(dto.telephone && { telephone: dto.telephone }),
            });
        }
        const updatedDriver = await this.driversRepository.findByUtilisateurId(utilisateurId);
        return this.toEntity(updatedDriver);
    }
    async updateOnlineStatus(utilisateurId, dto) {
        const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
        if (!driver) {
            throw new common_1.NotFoundException('Profil chauffeur introuvable');
        }
        await this.driversRepository.updateOnlineStatus(driver.id, dto.estEnLigne);
        this.logger.log(`Statut en ligne mis à jour pour chauffeur ${driver.id}: ${dto.estEnLigne}`);
        const updatedDriver = await this.driversRepository.findByUtilisateurId(utilisateurId);
        return this.toEntity(updatedDriver);
    }
    async updateStatus(utilisateurId, dto) {
        const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
        if (!driver) {
            throw new common_1.NotFoundException('Profil chauffeur introuvable');
        }
        await this.driversRepository.updateStatus(driver.id, dto.statut, dto.motifStatut);
        this.logger.log(`Statut mis à jour pour chauffeur ${driver.id}: ${dto.statut}`);
        const updatedDriver = await this.driversRepository.findByUtilisateurId(utilisateurId);
        return this.toEntity(updatedDriver);
    }
    async updateLocation(utilisateurId, latitude, longitude) {
        const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
        if (!driver) {
            throw new common_1.NotFoundException('Profil chauffeur introuvable');
        }
        await this.driversRepository['prisma'].positionChauffeur.create({
            data: {
                chauffeurId: driver.id,
                latitude,
                longitude,
                datePosition: new Date(),
            },
        });
        return { message: 'Position mise à jour' };
    }
    async findAll(query) {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const result = await this.driversRepository.findAll({
            page,
            limit,
            sortBy: query.sortBy,
            sortOrder: query.sortOrder,
            search: query.search,
            statut: query.statut,
            estEnLigne: query.estEnLigne,
        });
        return new paginated_response_dto_1.PaginatedResponseDto(result.data.map((item) => this.toEntity(item)), result.total, page, limit);
    }
    async findOne(id) {
        const driver = await this.driversRepository.findById(id);
        if (!driver) {
            throw new common_1.NotFoundException('Chauffeur introuvable');
        }
        return this.toEntity(driver);
    }
    toEntity(driver) {
        return {
            id: driver.id,
            utilisateurId: driver.utilisateurId,
            numeroPermis: driver.numeroPermis,
            estEnLigne: driver.estEnLigne,
            solde: Number(driver.solde),
            statut: driver.statut,
            motifStatut: driver.motifStatut ?? undefined,
            dateCreation: driver.dateCreation,
            dateModification: driver.dateModification,
            utilisateur: driver.utilisateur ? {
                id: driver.utilisateur.id,
                nom: driver.utilisateur.nom,
                prenom: driver.utilisateur.prenom,
                email: driver.utilisateur.email,
                telephone: driver.utilisateur.telephone,
                photo: driver.utilisateur.photo ?? undefined,
            } : undefined,
        };
    }
};
exports.DriversService = DriversService;
exports.DriversService = DriversService = DriversService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [drivers_repository_1.DriversRepository,
        users_repository_1.UsersRepository])
], DriversService);
//# sourceMappingURL=drivers.service.js.map