import { Injectable, Logger, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { UsersRepository } from '../users/repositories/users.repository';
import {
  DriversQueryDto,
  UpdateDriverOnlineDto,
  UpdateDriverStatusDto,
  UpdateDriverProfileDto,
} from './dto/drivers.dto';
import { DriverEntity } from './entities/driver.entity';
import { ChauffeurWithUtilisateur, DriversRepository } from './repositories/drivers.repository';

@Injectable()
export class DriversService {
  private readonly logger = new Logger(DriversService.name);

  constructor(
    private readonly driversRepository: DriversRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async findMe(utilisateurId: bigint): Promise<DriverEntity> {
    const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
    if (!driver) {
      throw new NotFoundException('Profil chauffeur introuvable');
    }
    return this.toEntity(driver);
  }

  async updateProfile(utilisateurId: bigint, dto: UpdateDriverProfileDto): Promise<DriverEntity> {
    const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
    if (!driver) {
      throw new NotFoundException('Profil chauffeur introuvable');
    }

    // Mettre à jour l'utilisateur si nécessaire
    if (dto.nom || dto.prenom || dto.telephone) {
      await this.usersRepository.update(utilisateurId, {
        ...(dto.nom && { nom: dto.nom }),
        ...(dto.prenom && { prenom: dto.prenom }),
        ...(dto.telephone && { telephone: dto.telephone }),
      });
    }

    const updatedDriver = await this.driversRepository.findByUtilisateurId(utilisateurId);
    return this.toEntity(updatedDriver!);
  }

  async updateOnlineStatus(utilisateurId: bigint, dto: UpdateDriverOnlineDto): Promise<DriverEntity> {
    const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
    if (!driver) {
      throw new NotFoundException('Profil chauffeur introuvable');
    }

    await this.driversRepository.updateOnlineStatus(driver.id, dto.estEnLigne);
    this.logger.log(`Statut en ligne mis à jour pour chauffeur ${driver.id}: ${dto.estEnLigne}`);

    const updatedDriver = await this.driversRepository.findByUtilisateurId(utilisateurId);
    return this.toEntity(updatedDriver!);
  }

  async updateStatus(utilisateurId: bigint, dto: UpdateDriverStatusDto): Promise<DriverEntity> {
    const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
    if (!driver) {
      throw new NotFoundException('Profil chauffeur introuvable');
    }

    await this.driversRepository.updateStatus(driver.id, dto.statut, dto.motifStatut);
    this.logger.log(`Statut mis à jour pour chauffeur ${driver.id}: ${dto.statut}`);

    const updatedDriver = await this.driversRepository.findByUtilisateurId(utilisateurId);
    return this.toEntity(updatedDriver!);
  }

  async updateLocation(utilisateurId: bigint, latitude: number, longitude: number): Promise<{ message: string }> {
    const driver = await this.driversRepository.findByUtilisateurId(utilisateurId);
    if (!driver) {
      throw new NotFoundException('Profil chauffeur introuvable');
    }

    // Créer une nouvelle position
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

  async findAll(query: DriversQueryDto): Promise<PaginatedResponseDto<DriverEntity>> {
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

    return new PaginatedResponseDto(
      result.data.map((item) => this.toEntity(item)),
      result.total,
      page,
      limit,
    );
  }

  async findOne(id: bigint): Promise<DriverEntity> {
    const driver = await this.driversRepository.findById(id);
    if (!driver) {
      throw new NotFoundException('Chauffeur introuvable');
    }
    return this.toEntity(driver);
  }

  private toEntity(driver: ChauffeurWithUtilisateur): DriverEntity {
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
}
