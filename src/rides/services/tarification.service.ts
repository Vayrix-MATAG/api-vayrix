import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { TarificationResult } from '../interfaces/ride-status.interface';

@Injectable()
export class TarificationService {
  private readonly logger = new Logger(TarificationService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Calculer le tarif pour une course
   */
  async calculerTarif(
    typeVehiculeId: bigint,
    distanceKm: number,
  ): Promise<TarificationResult> {
    // Récupérer la tarification du type de véhicule
    const tarification = await this.prisma.tarification.findFirst({
      where: { typeVehiculeId },
      include: { typeVehicule: true },
    });

    if (!tarification) {
      throw new NotFoundException('Règles de tarification introuvables pour ce type de véhicule');
    }

    // Calculer le prix
    const prixDepart = Number(tarification.prixDepart);
    const prixKm = Number(tarification.prixKm);
    const prixMinimum = Number(tarification.prixMinimum);
    const commission = Number(tarification.commission);

    const prixCalcule = prixDepart + prixKm * distanceKm;
    const prixFinal = Math.max(prixCalcule, prixMinimum);

    this.logger.log(
      `Tarif calculé: typeVehicule=${typeVehiculeId}, distance=${distanceKm}km, prix=${prixFinal}`,
    );

    return {
      prixDepart,
      prixKm,
      prixMinimum,
      commission,
      distance: distanceKm,
      prixCalcule,
      prixFinal,
    };
  }

  /**
   * Calculer le tarif pour une estimation (sans créer de course)
   */
  async estimerTarif(
    typeVehiculeId: bigint,
    distanceKm: number,
  ): Promise<TarificationResult> {
    return this.calculerTarif(typeVehiculeId, distanceKm);
  }
}
