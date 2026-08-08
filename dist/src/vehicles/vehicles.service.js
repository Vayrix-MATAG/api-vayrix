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
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
const paginated_response_dto_1 = require("../common/dto/paginated-response.dto");
const drivers_repository_1 = require("../drivers/repositories/drivers.repository");
const vehicles_repository_1 = require("./repositories/vehicles.repository");
let VehiclesService = class VehiclesService {
    vehiclesRepository;
    driversRepository;
    constructor(vehiclesRepository, driversRepository) {
        this.vehiclesRepository = vehiclesRepository;
        this.driversRepository = driversRepository;
    }
    async create(utilisateurId, dto) {
        let driverId;
        if (dto.chauffeurId) {
            driverId = BigInt(dto.chauffeurId);
            const driver = await this.driversRepository.findById(driverId);
            if (!driver) {
                throw new common_1.NotFoundException('Profil chauffeur introuvable');
            }
        }
        else {
            const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
            if (!driver) {
                throw new common_1.NotFoundException('Profil chauffeur introuvable');
            }
            driverId = driver.id;
        }
        const existing = await this.vehiclesRepository.findByMatricule(dto.matricule);
        if (existing) {
            throw new common_1.ConflictException('Ce matricule est déjà utilisé');
        }
        const vehicle = await this.vehiclesRepository.create({
            marque: dto.marque,
            modele: dto.modele,
            annee: dto.annee,
            couleur: dto.couleur,
            matricule: dto.matricule,
            statut: 'EN_ATTENTE',
            typeVehicule: { connect: { id: BigInt(dto.typeVehiculeId) } },
            chauffeur: { connect: { id: driverId } },
        });
        const vehicleWithType = await this.vehiclesRepository.findById(vehicle.id);
        return this.toEntity(vehicleWithType);
    }
    async findAll(query) {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const result = await this.vehiclesRepository.findAll({
            page,
            limit,
            sortBy: query.sortBy,
            sortOrder: query.sortOrder,
            search: query.search,
            statut: query.statut,
            typeVehiculeId: query.typeVehiculeId,
        });
        return new paginated_response_dto_1.PaginatedResponseDto(result.data.map((item) => this.toEntity(item)), result.total, page, limit);
    }
    async findOne(id) {
        const vehicle = await this.vehiclesRepository.findById(BigInt(id));
        if (!vehicle) {
            throw new common_1.NotFoundException('Véhicule introuvable');
        }
        return this.toEntity(vehicle);
    }
    async updateStatus(id, dto) {
        const vehicle = await this.vehiclesRepository.findById(BigInt(id));
        if (!vehicle) {
            throw new common_1.NotFoundException('Véhicule introuvable');
        }
        const updated = await this.vehiclesRepository.update(BigInt(id), { statut: dto.statut });
        return this.toEntity(updated);
    }
    async delete(id) {
        await this.vehiclesRepository.findById(BigInt(id));
        await this.vehiclesRepository.delete(BigInt(id));
        return { message: 'Véhicule supprimé avec succès' };
    }
    toEntity(vehicle) {
        return {
            id: vehicle.id,
            chauffeurId: vehicle.chauffeurId,
            typeVehiculeId: vehicle.typeVehiculeId,
            marque: vehicle.marque,
            modele: vehicle.modele,
            couleur: vehicle.couleur,
            matricule: vehicle.matricule,
            annee: vehicle.annee,
            statut: vehicle.statut,
            typeVehicule: vehicle.typeVehicule
                ? {
                    id: vehicle.typeVehicule.id,
                    nom: vehicle.typeVehicule.nom,
                    prixBase: Number(vehicle.typeVehicule.prixBase),
                    prixParKm: Number(vehicle.typeVehicule.prixParKm),
                }
                : undefined,
        };
    }
};
exports.VehiclesService = VehiclesService;
exports.VehiclesService = VehiclesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [vehicles_repository_1.VehiclesRepository,
        drivers_repository_1.DriversRepository])
], VehiclesService);
//# sourceMappingURL=vehicles.service.js.map