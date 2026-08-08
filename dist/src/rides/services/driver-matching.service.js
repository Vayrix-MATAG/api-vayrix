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
var DriverMatchingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverMatchingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const distance_service_1 = require("./distance.service");
let DriverMatchingService = DriverMatchingService_1 = class DriverMatchingService {
    prisma;
    distanceService;
    logger = new common_1.Logger(DriverMatchingService_1.name);
    constructor(prisma, distanceService) {
        this.prisma = prisma;
        this.distanceService = distanceService;
    }
    async findAvailableDrivers(criteria) {
        const { typeVehiculeId, latitudeDepart, longitudeDepart, rayonKm = 10 } = criteria;
        const chauffeurs = await this.prisma.chauffeur.findMany({
            where: {
                estEnLigne: true,
                statut: 'ACTIF',
                vehicules: {
                    some: {
                        typeVehiculeId,
                        statut: 'DISPONIBLE',
                    },
                },
            },
            include: {
                utilisateur: {
                    select: {
                        id: true,
                        nom: true,
                        prenom: true,
                        telephone: true,
                    },
                },
                vehicules: {
                    where: {
                        typeVehiculeId,
                        statut: 'DISPONIBLE',
                    },
                    take: 1,
                },
            },
        });
        const chauffeurIds = chauffeurs.map((c) => c.id);
        const positions = await this.prisma.positionChauffeur.findMany({
            where: {
                chauffeurId: { in: chauffeurIds },
            },
            orderBy: {
                datePosition: 'desc',
            },
            distinct: ['chauffeurId'],
        });
        const positionMap = new Map(positions.map((p) => [p.chauffeurId, { latitude: p.latitude, longitude: p.longitude }]));
        const availableDrivers = [];
        for (const chauffeur of chauffeurs) {
            const position = positionMap.get(chauffeur.id);
            if (!position) {
                this.logger.warn(`Pas de position GPS pour le chauffeur ${chauffeur.id}`);
                continue;
            }
            const distanceResult = this.distanceService.calculateDistance(latitudeDepart, longitudeDepart, position.latitude, position.longitude);
            if (distanceResult.distanceKm <= rayonKm) {
                const vehicule = chauffeur.vehicules[0];
                if (vehicule) {
                    availableDrivers.push({
                        id: chauffeur.id,
                        utilisateurId: chauffeur.utilisateurId,
                        nom: chauffeur.utilisateur.nom,
                        prenom: chauffeur.utilisateur.prenom,
                        telephone: chauffeur.utilisateur.telephone,
                        note: 0,
                        vehiculeId: vehicule.id,
                        vehiculeMarque: vehicule.marque,
                        vehiculeModele: vehicule.modele,
                        vehiculeMatricule: vehicule.matricule,
                        latitude: position.latitude,
                        longitude: position.longitude,
                        distanceKm: distanceResult.distanceKm,
                    });
                }
            }
        }
        availableDrivers.sort((a, b) => a.distanceKm - b.distanceKm);
        this.logger.log(`${availableDrivers.length} chauffeurs disponibles trouvés dans un rayon de ${rayonKm}km`);
        return availableDrivers;
    }
    async findClosestDriver(criteria) {
        const drivers = await this.findAvailableDrivers(criteria);
        return drivers.length > 0 ? drivers[0] : null;
    }
};
exports.DriverMatchingService = DriverMatchingService;
exports.DriverMatchingService = DriverMatchingService = DriverMatchingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        distance_service_1.DistanceService])
], DriverMatchingService);
//# sourceMappingURL=driver-matching.service.js.map