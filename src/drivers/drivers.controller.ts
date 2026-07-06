import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import { CreateDriverDto, DriversQueryDto, UpdateDriverLocationDto, UpdateDriverStatusDto } from './dto/drivers.dto';
import { DriverEntity } from './entities/driver.entity';
import { DriversService } from './drivers.service';

@ApiTags('Drivers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post('me')
  @Roles(UserRole.DRIVER)
  @ApiOperation({ summary: 'Créer son profil chauffeur' })
  create(@CurrentUser() user: AuthenticatedUser, @Body() dto: CreateDriverDto): Promise<DriverEntity> {
    return this.driversService.create(user.id, dto);
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.DISPATCHER)
  findAll(@Query() query: DriversQueryDto) {
    return this.driversService.findAll(query);
  }

  @Get(':id')
  @Roles(UserRole.ADMIN, UserRole.DISPATCHER, UserRole.DRIVER)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.driversService.findOne(id);
  }

  @Patch(':id/status')
  @Roles(UserRole.ADMIN, UserRole.DISPATCHER)
  updateStatus(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateDriverStatusDto) {
    return this.driversService.updateStatus(id, dto);
  }

  @Patch('me/location')
  @Roles(UserRole.DRIVER)
  updateLocation(@CurrentUser() user: AuthenticatedUser, @Body() dto: UpdateDriverLocationDto) {
    return this.driversService.updateLocation(user.id, dto);
  }
}
