import {
  Injectable,
  Logger,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsersRepository } from '../users/repositories/users.repository';
import { DriversRepository } from '../drivers/repositories/drivers.repository';
import { RidesRepository, CourseWithDetails } from './repositories/rides.repository';
import { TarificationService } from './services/tarification.service';
import { DistanceService } from './services/distance.service';
import { CourseStateMachine } from './services/course-state-machine.service';
import { DriverMatchingService } from './services/driver-matching.service';
import { RidesMapper } from './mappers/rides.mapper';
import {
  CreateRideDto,
  EstimateRideDto,
  AcceptRideDto,
  UpdateRideStatusDto,
  CancelRideDto,
  RidesQueryDto,
} from './dto/rides.dto';
import {
  RideEntity,
  RideEstimateEntity,
} from './entities/ride.entity';
import {
  CourseStatus,
  ParticipantStatus,
  TarificationResult,
  DistanceResult,
} from './interfaces/ride-status.interface';

@Injectable()
export class RidesService {
  private readonly logger = new Logger(RidesService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly usersRepository: UsersRepository,
    private readonly driversRepository: DriversRepository,
    private readonly ridesRepository: RidesRepository,
    private readonly tarificationService: TarificationService,
    private readonly distanceService: DistanceService,
    private readonly stateMachine: CourseStateMachine,
    private readonly driverMatchingService: DriverMatchingService,
  ) {}

  /**
   * Estimer le tarif d'une course
   */
  async estimateFare(dto: EstimateRideDto): Promise<RideEstimateEntity> {
    const { latitudeDepart, longitudeDepart, latitudeArrivee, longitudeArrivee, typeVehiculeId } = dto;

    // Calculer la distance
    const distanceResult: DistanceResult = this.distanceService.calculateDistance(
      latitudeDepart,
      longitudeDepart,
      latitudeArrivee,
      longitudeArrivee,
    );

    // Calculer le tarif
    const tarificationResult: TarificationResult = await this.tarificationService.calculerTarif(
      BigInt(typeVehiculeId),
      distanceResult.distanceKm,
    );

    return RidesMapper.toRideEstimateEntity(tarificationResult, distanceResult);
  }

  /**
   * Créer une nouvelle course
   */
  async create(utilisateurId: bigint, dto: CreateRideDto): Promise<RideEntity> {
    const {
      adresseDepart,
      latitudeDepart,
      longitudeDepart,
      adresseArrivee,
      latitudeArrivee,
      longitudeArrivee,
      typeVehiculeId,
      typeCourse,
    } = dto;

    // Vérifier que l'utilisateur est un client
    const utilisateur = await this.usersRepository.findById(utilisateurId);
    if (!utilisateur) {
      throw new NotFoundException('Utilisateur introuvable');
    }

    const client = await this.prisma.client.findUnique({
      where: { utilisateurId },
    });

    if (!client) {
      throw new ForbiddenException('Seuls les clients peuvent créer des courses');
    }

    // Calculer la distance
    const distanceResult: DistanceResult = this.distanceService.calculateDistance(
      latitudeDepart,
      longitudeDepart,
      latitudeArrivee,
      longitudeArrivee,
    );

    // Calculer le tarif
    const tarificationResult: TarificationResult = await this.tarificationService.calculerTarif(
      BigInt(typeVehiculeId),
      distanceResult.distanceKm,
    );

    // Créer la course et le participant dans une transaction
    const result = await this.ridesRepository.transaction(async (tx) => {
      // Créer la course
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
          statut: CourseStatus.DEMANDEE,
          partageActif: false,
        },
      });

      // Créer le participant
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
          statut: ParticipantStatus.EN_ATTENTE,
          role: 'DEMANDEUR',
        },
      });

      return { course, participant };
    });

    // Récupérer la course avec détails
    const courseWithDetails = await this.ridesRepository.findById(result.course.id);
    if (!courseWithDetails) {
      throw new NotFoundException('Course créée introuvable');
    }

    this.logger.log(`Course créée: ${result.course.id} pour client ${client.id}`);

    return RidesMapper.toRideEntity(courseWithDetails);
  }

  /**
   * Accepter une course (chauffeur)
   */
  async acceptRide(utilisateurId: bigint, courseId: string, dto: AcceptRideDto): Promise<RideEntity> {
    const { vehiculeId } = dto;

    // Vérifier que l'utilisateur est un chauffeur
    const chauffeur = await this.driversRepository.findByUtilisateurId(utilisateurId);
    if (!chauffeur) {
      throw new ForbiddenException('Seuls les chauffeurs peuvent accepter des courses');
    }

    // Vérifier que le véhicule appartient au chauffeur
    const vehicule = await this.prisma.vehicule.findFirst({
      where: {
        id: BigInt(vehiculeId),
        chauffeurId: chauffeur.id,
      },
    });

    if (!vehicule) {
      throw new ForbiddenException('Véhicule introuvable ou n\'appartient pas au chauffeur');
    }

    // Récupérer la course avec verrouillage pour éviter les doubles acceptations
    const course = await this.ridesRepository.transaction(async (tx) => {
      const course = await tx.course.findUnique({
        where: { id: BigInt(courseId) },
      });

      if (!course) {
        throw new NotFoundException('Course introuvable');
      }

      // Vérifier que la course est disponible
      if (course.statut !== CourseStatus.EN_RECHERCHE && course.statut !== CourseStatus.DEMANDEE) {
        throw new BadRequestException('Cette course n\'est plus disponible');
      }

      // Vérifier qu'elle n'est pas déjà acceptée
      if (course.chauffeurId) {
        throw new BadRequestException('Cette course a déjà été acceptée par un autre chauffeur');
      }

      // Mettre à jour la course
      const updated = await tx.course.update({
        where: { id: BigInt(courseId) },
        data: {
          chauffeurId: chauffeur.id,
          vehiculeId: BigInt(vehiculeId),
          statut: CourseStatus.ACCEPTEE,
          dateAcceptation: new Date(),
        },
      });

      return updated;
    });

    // Mettre à jour le statut du participant
    const participants = await this.ridesRepository.findParticipantsByCourseId(BigInt(courseId));
    for (const participant of participants) {
      await this.ridesRepository.updateParticipant(participant.id, {
        statut: ParticipantStatus.CONFIRME,
      });
    }

    // Récupérer la course avec détails
    const courseWithDetails = await this.ridesRepository.findById(BigInt(courseId));
    if (!courseWithDetails) {
      throw new NotFoundException('Course introuvable');
    }

    this.logger.log(`Course ${courseId} acceptée par chauffeur ${chauffeur.id}`);

    return RidesMapper.toRideEntity(courseWithDetails);
  }

  /**
   * Démarrer une course (chauffeur)
   */
  async startRide(utilisateurId: bigint, courseId: string): Promise<RideEntity> {
    // Vérifier que l'utilisateur est un chauffeur
    const chauffeur = await this.driversRepository.findByUtilisateurId(utilisateurId);
    if (!chauffeur) {
      throw new ForbiddenException('Seuls les chauffeurs peuvent démarrer des courses');
    }

    // Récupérer la course
    const course = await this.ridesRepository.findById(BigInt(courseId));
    if (!course) {
      throw new NotFoundException('Course introuvable');
    }

    // Vérifier que la course appartient au chauffeur
    if (course.chauffeurId !== chauffeur.id) {
      throw new ForbiddenException('Cette course ne vous appartient pas');
    }

    // Vérifier le statut actuel
    this.stateMachine.transition(course.statut as any, CourseStatus.EN_COURS);

    // Mettre à jour la course
    const updated = await this.ridesRepository.update(BigInt(courseId), {
      statut: CourseStatus.EN_COURS,
      dateDebut: new Date(),
    });

    // Mettre à jour les participants
    const participants = await this.ridesRepository.findParticipantsByCourseId(BigInt(courseId));
    for (const participant of participants) {
      await this.ridesRepository.updateParticipant(participant.id, {
        statut: ParticipantStatus.EN_COURS,
        heureMontee: new Date(),
      });
    }

    this.logger.log(`Course ${courseId} démarrée par chauffeur ${chauffeur.id}`);

    return RidesMapper.toRideEntity(updated);
  }

  /**
   * Terminer une course (chauffeur)
   */
  async completeRide(utilisateurId: bigint, courseId: string): Promise<RideEntity> {
    // Vérifier que l'utilisateur est un chauffeur
    const chauffeur = await this.driversRepository.findByUtilisateurId(utilisateurId);
    if (!chauffeur) {
      throw new ForbiddenException('Seuls les chauffeurs peuvent terminer des courses');
    }

    // Récupérer la course
    const course = await this.ridesRepository.findById(BigInt(courseId));
    if (!course) {
      throw new NotFoundException('Course introuvable');
    }

    // Vérifier que la course appartient au chauffeur
    if (course.chauffeurId !== chauffeur.id) {
      throw new ForbiddenException('Cette course ne vous appartient pas');
    }

    // Vérifier le statut actuel
    this.stateMachine.transition(course.statut as any, CourseStatus.TERMINEE);

    // Mettre à jour la course
    const updated = await this.ridesRepository.update(BigInt(courseId), {
      statut: CourseStatus.TERMINEE,
      dateFin: new Date(),
    });

    // Mettre à jour les participants
    const participants = await this.ridesRepository.findParticipantsByCourseId(BigInt(courseId));
    for (const participant of participants) {
      await this.ridesRepository.updateParticipant(participant.id, {
        statut: ParticipantStatus.TERMINE,
        prixFinal: course.prixFinal,
        heureDescente: new Date(),
      });
    }

    this.logger.log(`Course ${courseId} terminée par chauffeur ${chauffeur.id}`);

    return RidesMapper.toRideEntity(updated);
  }

  /**
   * Annuler une course
   */
  async cancelRide(utilisateurId: bigint, courseId: string, dto: CancelRideDto): Promise<RideEntity> {
    const { motif } = dto;

    // Récupérer la course
    const course = await this.ridesRepository.findById(BigInt(courseId));
    if (!course) {
      throw new NotFoundException('Course introuvable');
    }

    // Vérifier que l'utilisateur a le droit d'annuler
    const isClient = Array.isArray(course.participants) && course.participants.some(p => p.client.utilisateurId === utilisateurId);
    const isDriver = course.chauffeurId === utilisateurId;

    if (!isClient && !isDriver) {
      throw new ForbiddenException('Vous n\'avez pas le droit d\'annuler cette course');
    }

    // Vérifier le statut actuel
    this.stateMachine.transition(course.statut as any, CourseStatus.ANNULEE);

    // Mettre à jour la course
    const updated = await this.ridesRepository.update(BigInt(courseId), {
      statut: CourseStatus.ANNULEE,
    });

    // Mettre à jour les participants
    const participants = await this.ridesRepository.findParticipantsByCourseId(BigInt(courseId));
    for (const participant of participants) {
      await this.ridesRepository.updateParticipant(participant.id, {
        statut: ParticipantStatus.ANNULE,
      });
    }

    this.logger.log(`Course ${courseId} annulée par utilisateur ${utilisateurId} (motif: ${motif})`);

    return RidesMapper.toRideEntity(updated);
  }

  /**
   * Récupérer une course par ID
   */
  async findOne(courseId: string, utilisateurId: bigint): Promise<RideEntity> {
    const course = await this.ridesRepository.findById(BigInt(courseId));
    if (!course) {
      throw new NotFoundException('Course introuvable');
    }

    // Vérifier que l'utilisateur a le droit de voir cette course
    const isClient = Array.isArray(course.participants) && course.participants.some(p => p.client.utilisateurId === utilisateurId);
    const isDriver = course.chauffeurId === utilisateurId;

    if (!isClient && !isDriver) {
      throw new ForbiddenException('Vous n\'avez pas le droit de voir cette course');
    }

    return RidesMapper.toRideEntity(course);
  }

  /**
   * Récupérer les courses du client connecté
   */
  async findMyRides(utilisateurId: bigint, query: RidesQueryDto): Promise<RideEntity[]> {
    const client = await this.prisma.client.findUnique({
      where: { utilisateurId },
    });

    if (!client) {
      throw new NotFoundException('Profil client introuvable');
    }

    const { statut, typeCourse, page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;

    const courses = await this.ridesRepository.findByClientId(client.id, {
      skip,
      take: limit,
      orderBy: { dateCreation: 'desc' },
    });

    // Filtrer par statut si spécifié
    const filtered = statut ? courses.filter(c => c.statut === statut) : courses;
    const filteredByType = typeCourse ? filtered.filter(c => c.typeCourse === typeCourse) : filtered;

    return filteredByType.map(c => RidesMapper.toRideEntity(c));
  }

  /**
   * Récupérer les courses du chauffeur connecté
   */
  async findDriverRides(utilisateurId: bigint, query: RidesQueryDto): Promise<RideEntity[]> {
    const chauffeur = await this.driversRepository.findByUtilisateurId(utilisateurId);
    if (!chauffeur) {
      throw new NotFoundException('Profil chauffeur introuvable');
    }

    const { statut, typeCourse, page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;

    const courses = await this.ridesRepository.findByChauffeurId(chauffeur.id, {
      skip,
      take: limit,
      orderBy: { dateCreation: 'desc' },
    });

    // Filtrer par statut si spécifié
    const filtered = statut ? courses.filter(c => c.statut === statut) : courses;
    const filteredByType = typeCourse ? filtered.filter(c => c.typeCourse === typeCourse) : filtered;

    return filteredByType.map(c => RidesMapper.toRideEntity(c));
  }

  /**
   * Rechercher des chauffeurs disponibles pour une course
   */
  async findAvailableDrivers(
    latitudeDepart: number,
    longitudeDepart: number,
    typeVehiculeId: string,
  ) {
    return this.driverMatchingService.findAvailableDrivers({
      typeVehiculeId: BigInt(typeVehiculeId),
      latitudeDepart,
      longitudeDepart,
      rayonKm: 10,
    });
  }
}
