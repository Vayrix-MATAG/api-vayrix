import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { ADMIN_ACCESS_ROLES } from '../../../common/constants/roles.constants';
import {
  ApiProtectedErrors,
  ApiWrappedCreatedResponse,
  ApiWrappedOkResponse,
} from '../../../common/swagger/swagger.helpers';
import { PaginationResponseDto } from '../../../common/pagination/pagination-response.dto';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RoleFilterDto } from '../dto/role-filter.dto';
import { RoleEntity } from '../entities/role.entity';
import { RoleService } from '../services/role.service';

@ApiTags('Roles')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(...ADMIN_ACCESS_ROLES)
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Créer un rôle' })
  @ApiBody({ type: CreateRoleDto })
  @ApiWrappedCreatedResponse(RoleEntity, 'Rôle créé avec succès')
  @ApiProtectedErrors()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister les rôles (paginé)' })
  @ApiWrappedOkResponse(PaginationResponseDto)
  @ApiProtectedErrors()
  findAll(@Query() filters: RoleFilterDto) {
    return this.roleService.findAll(filters);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Détail d\'un rôle' })
  @ApiParam({ name: 'id', example: '1' })
  @ApiWrappedOkResponse(RoleEntity)
  @ApiProtectedErrors()
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifier un rôle' })
  @ApiParam({ name: 'id', example: '1' })
  @ApiBody({ type: UpdateRoleDto })
  @ApiWrappedOkResponse(RoleEntity, 'Rôle mis à jour avec succès')
  @ApiProtectedErrors()
  update(@Param('id') id: string, @Body() dto: UpdateRoleDto) {
    return this.roleService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un rôle' })
  @ApiParam({ name: 'id', example: '1' })
  @ApiWrappedOkResponse(RoleEntity, 'Rôle supprimé avec succès')
  @ApiProtectedErrors()
  remove(@Param('id') id: string) {
    return this.roleService.remove(id);
  }
}
