import { PrismaService } from '../../prisma/prisma.service';
import { TarificationResult } from '../interfaces/ride-status.interface';
export declare class TarificationService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    calculerTarif(typeVehiculeId: bigint, distanceKm: number): Promise<TarificationResult>;
    estimerTarif(typeVehiculeId: bigint, distanceKm: number): Promise<TarificationResult>;
}
