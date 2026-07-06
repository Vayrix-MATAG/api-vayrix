import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import { CreateVehicleDto, UpdateVehicleStatusDto, VehiclesQueryDto } from './dto/vehicles.dto';
import { VehiclesService } from './vehicles.service';

@ApiTags('Vehicles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}
  @Post('me') @Roles(UserRole.DRIVER) create(@CurrentUser() user: AuthenticatedUser, @Body() dto: CreateVehicleDto) { return this.vehiclesService.create(user.id, dto); }
  @Get() @Roles(UserRole.ADMIN, UserRole.DISPATCHER, UserRole.DRIVER) findAll(@Query() query: VehiclesQueryDto) { return this.vehiclesService.findAll(query); }
  @Patch(':id/status') @Roles(UserRole.ADMIN, UserRole.DISPATCHER) updateStatus(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateVehicleStatusDto) { return this.vehiclesService.updateStatus(id, dto); }
}
