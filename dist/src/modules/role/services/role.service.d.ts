import { ApiResponseService } from '../../../common/responses/api-response.service';
import { ApiSuccessResponse } from '../../../common/responses/api-response.interface';
import { PaginationService } from '../../../common/pagination/pagination.service';
import { PaginationResponseDto } from '../../../common/pagination/pagination-response.dto';
import { LoggerService } from '../../../common/logger/logger.service';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RoleFilterDto } from '../dto/role-filter.dto';
import { RoleEntity } from '../entities/role.entity';
import { RoleRepository } from '../repositories/role.repository';
export declare class RoleService {
    private readonly roleRepository;
    private readonly apiResponseService;
    private readonly paginationService;
    private readonly logger;
    constructor(roleRepository: RoleRepository, apiResponseService: ApiResponseService, paginationService: PaginationService, logger: LoggerService);
    create(dto: CreateRoleDto): Promise<ApiSuccessResponse<RoleEntity>>;
    findAll(filters: RoleFilterDto): Promise<ApiSuccessResponse<PaginationResponseDto<RoleEntity>>>;
    findOne(id: string): Promise<ApiSuccessResponse<RoleEntity>>;
    update(id: string, dto: UpdateRoleDto): Promise<ApiSuccessResponse<RoleEntity>>;
    remove(id: string): Promise<ApiSuccessResponse<null>>;
    private findRoleOrThrow;
    private parseId;
}
