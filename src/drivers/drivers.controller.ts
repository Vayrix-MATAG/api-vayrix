import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { ApiWrappedOkResponse, ApiProtectedErrors } from '../common/swagger/swagger.helpers';
import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import {
  DriversQueryDto,
  UpdateDriverOnlineDto,
  UpdateDriverStatusDto,
  UpdateDriverProfileDto,
} from './dto/drivers.dto';
import { DriverEntity } from './entities/driver.entity';
import { DriversService } from './drivers.service';

@ApiTags('Drivers')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get('me')
  @ApiOperation({ summary: 'Mon profil chauffeur' })
  @ApiWrappedOkResponse(DriverEntity)
  @ApiProtectedErrors()
  @Roles('CHAUFFEUR')
  getMe(@CurrentUser() user: AuthenticatedUser) {
    return this.driversService.findMe(BigInt(user.id));
  }

  @Patch('me')
  @ApiOperation({ summary: 'Modifier mon profil chauffeur' })
  @ApiWrappedOkResponse(DriverEntity)
  @ApiProtectedErrors()
  @Roles('CHAUFFEUR')
  updateProfile(@CurrentUser() user: AuthenticatedUser, @Body() dto: UpdateDriverProfileDto) {
    return this.driversService.updateProfile(BigInt(user.id), dto);
  }

  @Patch('me/online')
  @ApiOperation({ summary: 'Modifier mon statut en ligne' })
  @ApiWrappedOkResponse(DriverEntity)
  @ApiProtectedErrors()
  @Roles('CHAUFFEUR')
  updateOnlineStatus(@CurrentUser() user: AuthenticatedUser, @Body() dto: UpdateDriverOnlineDto) {
    return this.driversService.updateOnlineStatus(BigInt(user.id), dto);
  }

  @Patch('me/status')
  @ApiOperation({ summary: 'Modifier mon statut' })
  @ApiWrappedOkResponse(DriverEntity)
  @ApiProtectedErrors()
  @Roles('CHAUFFEUR', 'ADMIN')
  updateStatus(@CurrentUser() user: AuthenticatedUser, @Body() dto: UpdateDriverStatusDto) {
    return this.driversService.updateStatus(BigInt(user.id), dto);
  }

  @Post('me/location')
  @ApiOperation({ summary: 'Mettre à jour ma position GPS' })
  @ApiResponse({ status: 200, description: 'Position mise à jour avec succès' })
  @ApiProtectedErrors()
  @Roles('CHAUFFEUR')
  updateLocation(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: { latitude: number; longitude: number }
  ) {
    return this.driversService.updateLocation(BigInt(user.id), dto.latitude, dto.longitude);
  }

  @Get()
  @ApiOperation({ summary: 'Lister tous les chauffeurs' })
  @ApiWrappedOkResponse(DriverEntity)
  @ApiProtectedErrors()
  @Roles('ADMIN')
  findAll(@Query() query: DriversQueryDto) {
    return this.driversService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Détail d\'un chauffeur' })
  @ApiWrappedOkResponse(DriverEntity)
  @ApiProtectedErrors()
  @Roles('ADMIN')
  findOne(@Param('id') id: string) {
    return this.driversService.findOne(BigInt(id));
  }
}
