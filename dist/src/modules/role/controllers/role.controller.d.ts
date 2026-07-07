import { PaginationResponseDto } from '../../../common/pagination/pagination-response.dto';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RoleFilterDto } from '../dto/role-filter.dto';
import { RoleEntity } from '../entities/role.entity';
import { RoleService } from '../services/role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(dto: CreateRoleDto): Promise<import("../../../common/responses/api-response.interface").ApiSuccessResponse<RoleEntity, unknown>>;
    findAll(filters: RoleFilterDto): Promise<import("../../../common/responses/api-response.interface").ApiSuccessResponse<PaginationResponseDto<RoleEntity>, unknown>>;
    findOne(id: string): Promise<import("../../../common/responses/api-response.interface").ApiSuccessResponse<RoleEntity, unknown>>;
    update(id: string, dto: UpdateRoleDto): Promise<import("../../../common/responses/api-response.interface").ApiSuccessResponse<RoleEntity, unknown>>;
    remove(id: string): Promise<import("../../../common/responses/api-response.interface").ApiSuccessResponse<null, unknown>>;
}
