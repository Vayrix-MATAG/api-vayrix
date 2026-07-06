import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto, UpdateUserLangueDto, UpdateUserPhotoDto, UpdateUserTelephoneDto } from './dto/users.dto';
import { UserEntity } from './entities/user.entity';
import { SafeUser, UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly usersRepository: UsersRepository) {}

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.usersRepository.findSafeById(BigInt(id));
    if (!user) {
      throw new NotFoundException('Utilisateur introuvable');
    }
    return this.toEntity(user);
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
    await this.ensureExists(id);
    const user = await this.usersRepository.update(BigInt(id), dto);
    this.logger.log(`Utilisateur mis à jour: ${id}`);
    return this.toEntity(user);
  }

  async updatePhoto(id: string, dto: UpdateUserPhotoDto): Promise<UserEntity> {
    await this.ensureExists(id);
    const user = await this.usersRepository.update(BigInt(id), { photo: dto.photo });
    this.logger.log(`Photo utilisateur mise à jour: ${id}`);
    return this.toEntity(user);
  }

  async updateLangue(id: string, dto: UpdateUserLangueDto): Promise<UserEntity> {
    await this.ensureExists(id);
    const user = await this.usersRepository.update(BigInt(id), { langue: dto.langue });
    this.logger.log(`Langue utilisateur mise à jour: ${id}`);
    return this.toEntity(user);
  }

  async updateTelephone(id: string, dto: UpdateUserTelephoneDto): Promise<UserEntity> {
    await this.ensureExists(id);
    const existing = await this.usersRepository.findByTelephone(dto.telephone);
    if (existing && existing.id !== BigInt(id)) {
      throw new ConflictException('Ce numéro de téléphone est déjà utilisé');
    }

    const user = await this.usersRepository.update(BigInt(id), {
      telephone: dto.telephone,
    });
    this.logger.log(`Téléphone utilisateur mis à jour: ${id}`);
    return this.toEntity(user);
  }

  async remove(id: string): Promise<{ message: string }> {
    await this.ensureExists(id);
    await this.usersRepository.delete(BigInt(id));
    this.logger.log(`Utilisateur supprimé: ${id}`);
    return { message: 'Compte supprimé avec succès' };
  }

  private async ensureExists(id: string): Promise<void> {
    const user = await this.usersRepository.findById(BigInt(id));
    if (!user) {
      throw new NotFoundException('Utilisateur introuvable');
    }
  }

  private toEntity(user: SafeUser): UserEntity {
    return {
      id: user.id.toString(),
      nom: user.nom,
      prenom: user.prenom,
      telephone: user.telephone,
      email: user.email,
      roles: user.utilisateurRoles.map((ur) => ur.role.nom),
      photo: user.photo,
      langue: user.langue,
      statutProfil: user.client?.statut ?? user.chauffeur?.statut ?? null,
      derniereConnexion: user.derniereConnexion,
      dateCreation: user.dateCreation,
      dateModification: user.dateModification,
    };
  }
}
