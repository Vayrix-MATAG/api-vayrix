import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ApiResponseService } from '../../../common/responses/api-response.service';
import { ApiSuccessResponse } from '../../../common/responses/api-response.interface';
import { PaginationService } from '../../../common/pagination/pagination.service';
import { PaginationResponseDto } from '../../../common/pagination/pagination-response.dto';
import { LoggerService } from '../../../common/logger/logger.service';
import { MESSAGES } from '../../../common/constants/messages.constants';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RoleFilterDto } from '../dto/role-filter.dto';
import { RoleEntity } from '../entities/role.entity';
import { RoleMapper } from '../mappers/role.mapper';
import { RoleRepository } from '../repositories/role.repository';

@Injectable()
export class RoleService {
  constructor(
    private readonly roleRepository: RoleRepository,
    private readonly apiResponseService: ApiResponseService,
    private readonly paginationService: PaginationService,
    private readonly logger: LoggerService,
  ) {}

  async create(
    dto: CreateRoleDto,
  ): Promise<ApiSuccessResponse<RoleEntity>> {
    const existing = await this.roleRepository.findByNom(dto.nom.trim());
    if (existing) {
      throw new ConflictException(MESSAGES.ROLE.DUPLICATE_NOM);
    }

    const role = await this.roleRepository.create({
      nom: dto.nom.trim(),
      description: dto.description.trim(),
    });

    this.logger.log(`Rôle créé: ${role.nom}`, RoleService.name);

    return this.apiResponseService.success(
      RoleMapper.toEntity(role),
      MESSAGES.ROLE.CREATED,
    );
  }

  async findAll(
    filters: RoleFilterDto,
  ): Promise<ApiSuccessResponse<PaginationResponseDto<RoleEntity>>> {
    const { items, total } = await this.roleRepository.findMany({
      page: filters.page,
      limit: filters.limit,
      search: filters.search,
      sortBy: filters.sortBy,
      sortOrder: filters.sortOrder,
    });

    const pagination = this.paginationService.buildResponse(
      RoleMapper.toEntities(items),
      total,
      filters,
    );

    return this.apiResponseService.success(pagination, MESSAGES.ROLE.LIST);
  }

  async findOne(id: string): Promise<ApiSuccessResponse<RoleEntity>> {
    const role = await this.findRoleOrThrow(id);
    return this.apiResponseService.success(RoleMapper.toEntity(role), MESSAGES.SUCCESS);
  }

  async update(
    id: string,
    dto: UpdateRoleDto,
  ): Promise<ApiSuccessResponse<RoleEntity>> {
    const role = await this.findRoleOrThrow(id);

    if (!dto.nom && !dto.description) {
      throw new BadRequestException(MESSAGES.ROLE.EMPTY_UPDATE);
    }

    if (dto.nom) {
      const duplicate = await this.roleRepository.findByNom(dto.nom.trim());
      if (duplicate && duplicate.id !== role.id) {
        throw new ConflictException(MESSAGES.ROLE.DUPLICATE_NOM);
      }
    }

    const updated = await this.roleRepository.update(role.id, {
      ...(dto.nom !== undefined ? { nom: dto.nom.trim() } : {}),
      ...(dto.description !== undefined
        ? { description: dto.description.trim() }
        : {}),
    });

    this.logger.log(`Rôle modifié: ${updated.nom} (#${updated.id})`, RoleService.name);

    return this.apiResponseService.success(
      RoleMapper.toEntity(updated),
      MESSAGES.ROLE.UPDATED,
    );
  }

  async remove(id: string): Promise<ApiSuccessResponse<null>> {
    const role = await this.findRoleOrThrow(id);
    const assignments = await this.roleRepository.countAssignments(role.id);

    if (assignments > 0) {
      throw new ConflictException(MESSAGES.ROLE.IN_USE);
    }

    await this.roleRepository.delete(role.id);
    this.logger.log(`Rôle supprimé: ${role.nom} (#${role.id})`, RoleService.name);

    return this.apiResponseService.success(null, MESSAGES.ROLE.DELETED);
  }

  private async findRoleOrThrow(id: string) {
    const roleId = this.parseId(id);
    const role = await this.roleRepository.findById(roleId);

    if (!role) {
      throw new NotFoundException(MESSAGES.ROLE.NOT_FOUND);
    }

    return role;
  }

  private parseId(id: string): bigint {
    try {
      const parsed = BigInt(id);
      if (parsed <= 0n) {
        throw new Error('invalid');
      }
      return parsed;
    } catch {
      throw new BadRequestException(MESSAGES.ROLE.INVALID_ID);
    }
  }
}
