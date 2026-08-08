import { Injectable, Logger } from '@nestjs/common';
import { DistanceResult } from '../interfaces/ride-status.interface';

/**
 * Service de calcul de distance géographique
 * Utilise la formule Haversine pour calculer la distance entre deux points GPS
 */
@Injectable()
export class DistanceService {
  private readonly logger = new Logger(DistanceService.name);

  /**
   * Rayon de la Terre en kilomètres
   */
  private readonly EARTH_RADIUS_KM = 6371;

  /**
   * Vitesse moyenne en ville (km/h)
   */
  private readonly AVERAGE_SPEED_KMH = 30;

  /**
   * Calculer la distance entre deux points GPS (formule Haversine)
   */
  calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): DistanceResult {
    const distanceKm = this.haversine(lat1, lon1, lat2, lon2);
    const dureeEstimeeMinutes = Math.ceil((distanceKm / this.AVERAGE_SPEED_KMH) * 60);

    this.logger.log(
      `Distance calculée: ${lat1},${lon1} -> ${lat2},${lon2} = ${distanceKm.toFixed(2)}km (${dureeEstimeeMinutes}min)`,
    );

    return {
      distanceKm,
      dureeEstimeeMinutes,
    };
  }

  /**
   * Formule Haversine pour calculer la distance entre deux points sur une sphère
   */
  private haversine(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number {
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) *
        Math.cos(this.toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return this.EARTH_RADIUS_KM * c;
  }

  /**
   * Convertir des degrés en radians
   */
  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}
