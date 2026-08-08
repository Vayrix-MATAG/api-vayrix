import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { ApiWrappedOkResponse, ApiProtectedErrors } from '../common/swagger/swagger.helpers';
import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import { CreateVehicleDto, UpdateVehicleStatusDto, VehiclesQueryDto } from './dto/vehicles.dto';
import { VehicleEntity } from './entities/vehicle.entity';
import { VehiclesService } from './vehicles.service';

@ApiTags('Vehicles')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un véhicule' })
  @ApiWrappedOkResponse(VehicleEntity)
  @ApiProtectedErrors()
  @Roles('ADMIN', 'SUPER_ADMIN', 'CHAUFFEUR')
  create(@CurrentUser() user: AuthenticatedUser, @Body() dto: CreateVehicleDto) {
    return this.vehiclesService.create(BigInt(user.id), dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister tous les véhicules' })
  @ApiWrappedOkResponse(VehicleEntity)
  @ApiProtectedErrors()
  @Roles('ADMIN', 'CHAUFFEUR')
  findAll(@Query() query: VehiclesQueryDto) {
    return this.vehiclesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Détail d\'un véhicule' })
  @ApiWrappedOkResponse(VehicleEntity)
  @ApiProtectedErrors()
  @Roles('ADMIN', 'CHAUFFEUR')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Modifier le statut d\'un véhicule' })
  @ApiWrappedOkResponse(VehicleEntity)
  @ApiProtectedErrors()
  @Roles('ADMIN')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateVehicleStatusDto) {
    return this.vehiclesService.updateStatus(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un véhicule' })
  @ApiResponse({ status: 200, description: 'Véhicule supprimé avec succès' })
  @ApiProtectedErrors()
  @Roles('ADMIN')
  delete(@Param('id') id: string) {
    return this.vehiclesService.delete(id);
  }
}
