import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { ApiWrappedOkResponse, ApiProtectedErrors } from '../common/swagger/swagger.helpers';
import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import {
  CreateRideDto,
  EstimateRideDto,
  AcceptRideDto,
  CancelRideDto,
  RidesQueryDto,
} from './dto/rides.dto';
import { RideEntity, RideEstimateEntity } from './entities/ride.entity';
import { RidesService } from './rides.service';

@ApiTags('Rides')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @Post('estimate')
  @ApiOperation({ summary: 'Estimer le tarif d\'une course' })
  @ApiWrappedOkResponse(RideEstimateEntity)
  @ApiProtectedErrors()
  @Roles('CLIENT', 'ADMIN')
  estimate(@Body() dto: EstimateRideDto) {
    return this.ridesService.estimateFare(dto);
  }

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle course' })
  @ApiWrappedOkResponse(RideEntity)
  @ApiProtectedErrors()
  @Roles('CLIENT')
  create(@CurrentUser() user: AuthenticatedUser, @Body() dto: CreateRideDto) {
    return this.ridesService.create(BigInt(user.id), dto);
  }

  @Get('me')
  @ApiOperation({ summary: 'Mes courses (client)' })
  @ApiWrappedOkResponse(RideEntity)
  @ApiProtectedErrors()
  @Roles('CLIENT')
  findMyRides(@CurrentUser() user: AuthenticatedUser, @Query() query: RidesQueryDto) {
    return this.ridesService.findMyRides(BigInt(user.id), query);
  }

  @Get('driver')
  @ApiOperation({ summary: 'Mes courses (chauffeur)' })
  @ApiWrappedOkResponse(RideEntity)
  @ApiProtectedErrors()
  @Roles('CHAUFFEUR')
  findDriverRides(@CurrentUser() user: AuthenticatedUser, @Query() query: RidesQueryDto) {
    return this.ridesService.findDriverRides(BigInt(user.id), query);
  }

  @Get('available-drivers')
  @ApiOperation({ summary: 'Rechercher des chauffeurs disponibles' })
  @ApiWrappedOkResponse(Object)
  @ApiProtectedErrors()
  @Roles('CLIENT', 'ADMIN')
  findAvailableDrivers(
    @Query('latitudeDepart') latitudeDepart: number,
    @Query('longitudeDepart') longitudeDepart: number,
    @Query('typeVehiculeId') typeVehiculeId: string,
  ) {
    return this.ridesService.findAvailableDrivers(latitudeDepart, longitudeDepart, typeVehiculeId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Détail d\'une course' })
  @ApiWrappedOkResponse(RideEntity)
  @ApiProtectedErrors()
  @Roles('CLIENT', 'CHAUFFEUR', 'ADMIN')
  findOne(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.ridesService.findOne(id, BigInt(user.id));
  }

  @Patch(':id/accept')
  @ApiOperation({ summary: 'Accepter une course (chauffeur)' })
  @ApiWrappedOkResponse(RideEntity)
  @ApiProtectedErrors()
  @Roles('CHAUFFEUR')
  acceptRide(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id') id: string,
    @Body() dto: AcceptRideDto,
  ) {
    return this.ridesService.acceptRide(BigInt(user.id), id, dto);
  }

  @Patch(':id/start')
  @ApiOperation({ summary: 'Démarrer une course (chauffeur)' })
  @ApiWrappedOkResponse(RideEntity)
  @ApiProtectedErrors()
  @Roles('CHAUFFEUR')
  startRide(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string) {
    return this.ridesService.startRide(BigInt(user.id), id);
  }

  @Patch(':id/complete')
  @ApiOperation({ summary: 'Terminer une course (chauffeur)' })
  @ApiWrappedOkResponse(RideEntity)
  @ApiProtectedErrors()
  @Roles('CHAUFFEUR')
  completeRide(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string) {
    return this.ridesService.completeRide(BigInt(user.id), id);
  }

  @Patch(':id/cancel')
  @ApiOperation({ summary: 'Annuler une course' })
  @ApiWrappedOkResponse(RideEntity)
  @ApiProtectedErrors()
  @Roles('CLIENT', 'CHAUFFEUR')
  cancelRide(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id') id: string,
    @Body() dto: CancelRideDto,
  ) {
    return this.ridesService.cancelRide(BigInt(user.id), id, dto);
  }
}
