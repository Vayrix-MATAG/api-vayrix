import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { DriversRepository } from '../drivers/repositories/drivers.repository';
import { CreateVehicleDto, UpdateVehicleStatusDto, VehiclesQueryDto } from './dto/vehicles.dto';
import { VehicleEntity } from './entities/vehicle.entity';
import { VehiculeWithType, VehiclesRepository } from './repositories/vehicles.repository';

@Injectable()
export class VehiclesService {
  constructor(
    private readonly vehiclesRepository: VehiclesRepository,
    private readonly driversRepository: DriversRepository,
  ) {}

  async create(utilisateurId: bigint, dto: CreateVehicleDto): Promise<VehicleEntity> {
    // Si l'utilisateur est ADMIN/SUPER_ADMIN, il peut spécifier un chauffeurId
    // Sinon, on utilise le profil chauffeur de l'utilisateur connecté
    let driverId: bigint;

    if (dto.chauffeurId) {
      // ADMIN/SUPER_ADMIN crée un véhicule pour un chauffeur spécifique
      driverId = BigInt(dto.chauffeurId);
      const driver = await this.driversRepository.findById(driverId);
      if (!driver) {
        throw new NotFoundException('Profil chauffeur introuvable');
      }
    } else {
      // Chauffeur crée son propre véhicule
      const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
      if (!driver) {
        throw new NotFoundException('Profil chauffeur introuvable');
      }
      driverId = driver.id;
    }

    const existing = await this.vehiclesRepository.findByMatricule(dto.matricule);
    if (existing) {
      throw new ConflictException('Ce matricule est déjà utilisé');
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
    return this.toEntity(vehicleWithType!);
  }

  async findAll(query: VehiclesQueryDto): Promise<PaginatedResponseDto<VehicleEntity>> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const result = await this.vehiclesRepository.findAll({
      page,
      limit,
      sortBy: query.sortBy,
      sortOrder: query.sortOrder as 'asc' | 'desc' | undefined,
      search: query.search,
      statut: query.statut,
      typeVehiculeId: query.typeVehiculeId,
    });

    return new PaginatedResponseDto(
      result.data.map((item) => this.toEntity(item)),
      result.total,
      page,
      limit,
    );
  }

  async findOne(id: string): Promise<VehicleEntity> {
    const vehicle = await this.vehiclesRepository.findById(BigInt(id));
    if (!vehicle) {
      throw new NotFoundException('Véhicule introuvable');
    }
    return this.toEntity(vehicle);
  }

  async updateStatus(id: string, dto: UpdateVehicleStatusDto): Promise<VehicleEntity> {
    const vehicle = await this.vehiclesRepository.findById(BigInt(id));
    if (!vehicle) {
      throw new NotFoundException('Véhicule introuvable');
    }

    const updated = await this.vehiclesRepository.update(BigInt(id), { statut: dto.statut });
    return this.toEntity(updated);
  }

  async delete(id: string): Promise<{ message: string }> {
    await this.vehiclesRepository.findById(BigInt(id));
    await this.vehiclesRepository.delete(BigInt(id));
    return { message: 'Véhicule supprimé avec succès' };
  }

  private toEntity(vehicle: VehiculeWithType): VehicleEntity {
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
}
