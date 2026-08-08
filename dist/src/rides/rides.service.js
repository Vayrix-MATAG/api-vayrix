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
var RidesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const users_repository_1 = require("../users/repositories/users.repository");
const drivers_repository_1 = require("../drivers/repositories/drivers.repository");
const rides_repository_1 = require("./repositories/rides.repository");
const tarification_service_1 = require("./services/tarification.service");
const distance_service_1 = require("./services/distance.service");
const course_state_machine_service_1 = require("./services/course-state-machine.service");
const driver_matching_service_1 = require("./services/driver-matching.service");
const rides_mapper_1 = require("./mappers/rides.mapper");
const ride_status_interface_1 = require("./interfaces/ride-status.interface");
let RidesService = RidesService_1 = class RidesService {
    prisma;
    usersRepository;
    driversRepository;
    ridesRepository;
    tarificationService;
    distanceService;
    stateMachine;
    driverMatchingService;
    logger = new common_1.Logger(RidesService_1.name);
    constructor(prisma, usersRepository, driversRepository, ridesRepository, tarificationService, distanceService, stateMachine, driverMatchingService) {
        this.prisma = prisma;
        this.usersRepository = usersRepository;
        this.driversRepository = driversRepository;
        this.ridesRepository = ridesRepository;
        this.tarificationService = tarificationService;
        this.distanceService = distanceService;
        this.stateMachine = stateMachine;
        this.driverMatchingService = driverMatchingService;
    }
    async findAll(query) {
        const { statut, typeCourse, page = 1, limit = 10 } = query;
        const where = {};
        if (statut)
            where.statut = statut;
        if (typeCourse)
            where.typeCourse = typeCourse;
        const [data, total] = await Promise.all([
            this.prisma.course.findMany({
                where,
                include: {
                    chauffeur: {
                        include: {
                            utilisateur: {
                                select: {
                                    id: true,
                                    nom: true,
                                    prenom: true,
                                    telephone: true,
                                },
                            },
                        },
                    },
                    vehicule: true,
                },
                skip: (page - 1) * limit,
                take: limit,
                orderBy: { dateCreation: 'desc' },
            }),
            this.prisma.course.count({ where }),
        ]);
        return {
            data: data.map((course) => rides_mapper_1.RidesMapper.toRideEntity(course)),
            total,
        };
    }
    async estimateFare(dto) {
        const { latitudeDepart, longitudeDepart, latitudeArrivee, longitudeArrivee, typeVehiculeId } = dto;
        const distanceResult = this.distanceService.calculateDistance(latitudeDepart, longitudeDepart, latitudeArrivee, longitudeArrivee);
        const tarificationResult = await this.tarificationService.calculerTarif(BigInt(typeVehiculeId), distanceResult.distanceKm);
        return rides_mapper_1.RidesMapper.toRideEstimateEntity(tarificationResult, distanceResult);
    }
    async create(utilisateurId, dto) {
        const { adresseDepart, latitudeDepart, longitudeDepart, adresseArrivee, latitudeArrivee, longitudeArrivee, typeVehiculeId, typeCourse, } = dto;
        const utilisateur = await this.usersRepository.findById(utilisateurId);
        if (!utilisateur) {
            throw new common_1.NotFoundException('Utilisateur introuvable');
        }
        const utilisateurWithRoles = await this.prisma.utilisateur.findUnique({
            where: { id: utilisateurId },
            include: { utilisateurRoles: { include: { role: true } } },
        });
        const userRoles = utilisateurWithRoles?.utilisateurRoles.map(ur => ur.role.nom) || [];
        const isSuperAdmin = userRoles.includes('SUPER_ADMIN');
        let client;
        if (isSuperAdmin) {
            client = await this.prisma.client.findUnique({
                where: { utilisateurId },
            });
            if (!client) {
                this.logger.log(`Création automatique du profil client pour SUPER_ADMIN ${utilisateurId}`);
                client = await this.prisma.client.create({
                    data: {
                        utilisateurId,
                        statut: 'ACTIF',
                    },
                });
            }
        }
        else {
            client = await this.prisma.client.findUnique({
                where: { utilisateurId },
            });
            if (!client) {
                throw new common_1.ForbiddenException('Seuls les clients peuvent créer des courses');
            }
        }
        const distanceResult = this.distanceService.calculateDistance(latitudeDepart, longitudeDepart, latitudeArrivee, longitudeArrivee);
        const tarificationResult = await this.tarificationService.calculerTarif(BigInt(typeVehiculeId), distanceResult.distanceKm);
        const result = await this.ridesRepository.transaction(async (tx) => {
            const course = await tx.course.create({
                data: {
                    adresseDepart,
                    latitudeDepart,
                    longitudeDepart,
                    adresseArrivee,
                    latitudeArrivee,
                    longitudeArrivee,
                    distance: distanceResult.distanceKm,
                    dureeEstimee: distanceResult.dureeEstimeeMinutes,
                    prixInitial: tarificationResult.prixFinal,
                    prixFinal: tarificationResult.prixFinal,
                    typeCourse,
                    statut: ride_status_interface_1.CourseStatus.DEMANDEE,
                    partageActif: false,
                },
            });
            const participant = await tx.participantCourse.create({
                data: {
                    courseId: course.id,
                    clientId: client.id,
                    adresseDepart,
                    latitudeDepart,
                    longitudeDepart,
                    adresseArrivee,
                    latitudeArrivee,
                    longitudeArrivee,
                    prixInitial: tarificationResult.prixFinal,
                    statut: ride_status_interface_1.ParticipantStatus.EN_ATTENTE,
                    role: 'DEMANDEUR',
                },
            });
            return { course, participant };
        });
        const courseWithDetails = await this.ridesRepository.findById(result.course.id);
        if (!courseWithDetails) {
            throw new common_1.NotFoundException('Course créée introuvable');
        }
        this.logger.log(`Course créée: ${result.course.id} pour client ${client.id}`);
        return rides_mapper_1.RidesMapper.toRideEntity(courseWithDetails);
    }
    async acceptRide(utilisateurId, courseId, dto) {
        const { vehiculeId } = dto;
        const chauffeur = await this.driversRepository.findByUtilisateurId(utilisateurId);
        if (!chauffeur) {
            throw new common_1.ForbiddenException('Seuls les chauffeurs peuvent accepter des courses');
        }
        const vehicule = await this.prisma.vehicule.findFirst({
            where: {
                id: BigInt(vehiculeId),
                chauffeurId: chauffeur.id,
            },
        });
        if (!vehicule) {
            throw new common_1.ForbiddenException('Véhicule introuvable ou n\'appartient pas au chauffeur');
        }
        const course = await this.ridesRepository.transaction(async (tx) => {
            const course = await tx.course.findUnique({
                where: { id: BigInt(courseId) },
            });
            if (!course) {
                throw new common_1.NotFoundException('Course introuvable');
            }
            if (course.statut !== ride_status_interface_1.CourseStatus.EN_RECHERCHE && course.statut !== ride_status_interface_1.CourseStatus.DEMANDEE) {
                throw new common_1.BadRequestException('Cette course n\'est plus disponible');
            }
            if (course.chauffeurId) {
                throw new common_1.BadRequestException('Cette course a déjà été acceptée par un autre chauffeur');
            }
            const updated = await tx.course.update({
                where: { id: BigInt(courseId) },
                data: {
                    chauffeurId: chauffeur.id,
                    vehiculeId: BigInt(vehiculeId),
                    statut: ride_status_interface_1.CourseStatus.ACCEPTEE,
                    dateAcceptation: new Date(),
                },
            });
            return updated;
        });
        const participants = await this.ridesRepository.findParticipantsByCourseId(BigInt(courseId));
        for (const participant of participants) {
            await this.ridesRepository.updateParticipant(participant.id, {
                statut: ride_status_interface_1.ParticipantStatus.CONFIRME,
            });
        }
        const courseWithDetails = await this.ridesRepository.findById(BigInt(courseId));
        if (!courseWithDetails) {
            throw new common_1.NotFoundException('Course introuvable');
        }
        this.logger.log(`Course ${courseId} acceptée par chauffeur ${chauffeur.id}`);
        return rides_mapper_1.RidesMapper.toRideEntity(courseWithDetails);
    }
    async startRide(utilisateurId, courseId) {
        const chauffeur = await this.driversRepository.findByUtilisateurId(utilisateurId);
        if (!chauffeur) {
            throw new common_1.ForbiddenException('Seuls les chauffeurs peuvent démarrer des courses');
        }
        const course = await this.ridesRepository.findById(BigInt(courseId));
        if (!course) {
            throw new common_1.NotFoundException('Course introuvable');
        }
        if (course.chauffeurId !== chauffeur.id) {
            throw new common_1.ForbiddenException('Cette course ne vous appartient pas');
        }
        this.stateMachine.transition(course.statut, ride_status_interface_1.CourseStatus.EN_COURS);
        const updated = await this.ridesRepository.update(BigInt(courseId), {
            statut: ride_status_interface_1.CourseStatus.EN_COURS,
            dateDebut: new Date(),
        });
        const participants = await this.ridesRepository.findParticipantsByCourseId(BigInt(courseId));
        for (const participant of participants) {
            await this.ridesRepository.updateParticipant(participant.id, {
                statut: ride_status_interface_1.ParticipantStatus.EN_COURS,
                heureMontee: new Date(),
            });
        }
        this.logger.log(`Course ${courseId} démarrée par chauffeur ${chauffeur.id}`);
        return rides_mapper_1.RidesMapper.toRideEntity(updated);
    }
    async completeRide(utilisateurId, courseId) {
        const chauffeur = await this.driversRepository.findByUtilisateurId(utilisateurId);
        if (!chauffeur) {
            throw new common_1.ForbiddenException('Seuls les chauffeurs peuvent terminer des courses');
        }
        const course = await this.ridesRepository.findById(BigInt(courseId));
        if (!course) {
            throw new common_1.NotFoundException('Course introuvable');
        }
        if (course.chauffeurId !== chauffeur.id) {
            throw new common_1.ForbiddenException('Cette course ne vous appartient pas');
        }
        this.stateMachine.transition(course.statut, ride_status_interface_1.CourseStatus.TERMINEE);
        const updated = await this.ridesRepository.update(BigInt(courseId), {
            statut: ride_status_interface_1.CourseStatus.TERMINEE,
            dateFin: new Date(),
        });
        const participants = await this.ridesRepository.findParticipantsByCourseId(BigInt(courseId));
        for (const participant of participants) {
            await this.ridesRepository.updateParticipant(participant.id, {
                statut: ride_status_interface_1.ParticipantStatus.TERMINE,
                prixFinal: course.prixFinal,
                heureDescente: new Date(),
            });
        }
        this.logger.log(`Course ${courseId} terminée par chauffeur ${chauffeur.id}`);
        return rides_mapper_1.RidesMapper.toRideEntity(updated);
    }
    async cancelRide(utilisateurId, courseId, dto) {
        const { motif } = dto;
        const course = await this.ridesRepository.findById(BigInt(courseId));
        if (!course) {
            throw new common_1.NotFoundException('Course introuvable');
        }
        const isClient = Array.isArray(course.participants) && course.participants.some(p => p.client.utilisateurId === utilisateurId);
        const isDriver = course.chauffeurId === utilisateurId;
        if (!isClient && !isDriver) {
            throw new common_1.ForbiddenException('Vous n\'avez pas le droit d\'annuler cette course');
        }
        this.stateMachine.transition(course.statut, ride_status_interface_1.CourseStatus.ANNULEE);
        const updated = await this.ridesRepository.update(BigInt(courseId), {
            statut: ride_status_interface_1.CourseStatus.ANNULEE,
        });
        const participants = await this.ridesRepository.findParticipantsByCourseId(BigInt(courseId));
        for (const participant of participants) {
            await this.ridesRepository.updateParticipant(participant.id, {
                statut: ride_status_interface_1.ParticipantStatus.ANNULE,
            });
        }
        this.logger.log(`Course ${courseId} annulée par utilisateur ${utilisateurId} (motif: ${motif})`);
        return rides_mapper_1.RidesMapper.toRideEntity(updated);
    }
    async findOne(courseId, utilisateurId) {
        const course = await this.ridesRepository.findById(BigInt(courseId));
        if (!course) {
            throw new common_1.NotFoundException('Course introuvable');
        }
        const isClient = Array.isArray(course.participants) && course.participants.some(p => p.client.utilisateurId === utilisateurId);
        const isDriver = course.chauffeurId === utilisateurId;
        if (!isClient && !isDriver) {
            throw new common_1.ForbiddenException('Vous n\'avez pas le droit de voir cette course');
        }
        return rides_mapper_1.RidesMapper.toRideEntity(course);
    }
    async findMyRides(utilisateurId, query) {
        const client = await this.prisma.client.findUnique({
            where: { utilisateurId },
        });
        if (!client) {
            throw new common_1.NotFoundException('Profil client introuvable');
        }
        const { statut, typeCourse, page = 1, limit = 10 } = query;
        const skip = (page - 1) * limit;
        const courses = await this.ridesRepository.findByClientId(client.id, {
            skip,
            take: limit,
            orderBy: { dateCreation: 'desc' },
        });
        const filtered = statut ? courses.filter(c => c.statut === statut) : courses;
        const filteredByType = typeCourse ? filtered.filter(c => c.typeCourse === typeCourse) : filtered;
        return filteredByType.map(c => rides_mapper_1.RidesMapper.toRideEntity(c));
    }
    async findDriverRides(utilisateurId, query) {
        const chauffeur = await this.driversRepository.findByUtilisateurId(utilisateurId);
        if (!chauffeur) {
            throw new common_1.NotFoundException('Profil chauffeur introuvable');
        }
        const { statut, typeCourse, page = 1, limit = 10 } = query;
        const skip = (page - 1) * limit;
        const courses = await this.ridesRepository.findByChauffeurId(chauffeur.id, {
            skip,
            take: limit,
            orderBy: { dateCreation: 'desc' },
        });
        const filtered = statut ? courses.filter(c => c.statut === statut) : courses;
        const filteredByType = typeCourse ? filtered.filter(c => c.typeCourse === typeCourse) : filtered;
        return filteredByType.map(c => rides_mapper_1.RidesMapper.toRideEntity(c));
    }
    async findAvailableDrivers(latitudeDepart, longitudeDepart, typeVehiculeId) {
        return this.driverMatchingService.findAvailableDrivers({
            typeVehiculeId: BigInt(typeVehiculeId),
            latitudeDepart,
            longitudeDepart,
            rayonKm: 10,
        });
    }
};
exports.RidesService = RidesService;
exports.RidesService = RidesService = RidesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        users_repository_1.UsersRepository,
        drivers_repository_1.DriversRepository,
        rides_repository_1.RidesRepository,
        tarification_service_1.TarificationService,
        distance_service_1.DistanceService,
        course_state_machine_service_1.CourseStateMachine,
        driver_matching_service_1.DriverMatchingService])
], RidesService);
//# sourceMappingURL=rides.service.js.map