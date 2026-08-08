import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { DistanceService } from './distance.service';
import { DriverMatchingCriteria, AvailableDriver } from '../interfaces/ride-status.interface';

/**
 * Service de recherche et matching de chauffeurs
 */
@Injectable()
export class DriverMatchingService {
  private readonly logger = new Logger(DriverMatchingService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly distanceService: DistanceService,
  ) {}

  /**
   * Rechercher les chauffeurs disponibles pour une course
   */
  async findAvailableDrivers(criteria: DriverMatchingCriteria): Promise<AvailableDriver[]> {
    const { typeVehiculeId, latitudeDepart, longitudeDepart, rayonKm = 10 } = criteria;

    // Récupérer les chauffeurs en ligne avec le bon type de véhicule
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

    // Récupérer les positions GPS des chauffeurs
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

    // Créer une map des positions
    const positionMap = new Map(
      positions.map((p) => [p.chauffeurId, { latitude: p.latitude, longitude: p.longitude }]),
    );

    // Calculer la distance pour chaque chauffeur et filtrer par rayon
    const availableDrivers: AvailableDriver[] = [];

    for (const chauffeur of chauffeurs) {
      const position = positionMap.get(chauffeur.id);

      if (!position) {
        this.logger.warn(`Pas de position GPS pour le chauffeur ${chauffeur.id}`);
        continue;
      }

      const distanceResult = this.distanceService.calculateDistance(
        latitudeDepart,
        longitudeDepart,
        position.latitude,
        position.longitude,
      );

      if (distanceResult.distanceKm <= rayonKm) {
        const vehicule = chauffeur.vehicules[0];
        if (vehicule) {
          availableDrivers.push({
            id: chauffeur.id,
            utilisateurId: chauffeur.utilisateurId,
            nom: chauffeur.utilisateur.nom,
            prenom: chauffeur.utilisateur.prenom,
            telephone: chauffeur.utilisateur.telephone,
            note: 0, // À implémenter avec les évaluations
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

    // Trier par distance croissante
    availableDrivers.sort((a, b) => a.distanceKm - b.distanceKm);

    this.logger.log(
      `${availableDrivers.length} chauffeurs disponibles trouvés dans un rayon de ${rayonKm}km`,
    );

    return availableDrivers;
  }

  /**
   * Trouver le chauffeur le plus proche
   */
  async findClosestDriver(criteria: DriverMatchingCriteria): Promise<AvailableDriver | null> {
    const drivers = await this.findAvailableDrivers(criteria);
    return drivers.length > 0 ? drivers[0] : null;
  }
}
