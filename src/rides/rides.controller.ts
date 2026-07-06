import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import { CreateRideDto, RideActionDto, RidesQueryDto, UpdateRideStatusDto } from './dto/rides.dto';
import { RidesService } from './rides.service';

@ApiTags('Rides')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}
  @Post('estimate') @Roles(UserRole.PASSENGER, UserRole.ADMIN, UserRole.DISPATCHER) estimate(@Body() dto: CreateRideDto) { return this.ridesService.estimateFare(dto); }
  @Post() @Roles(UserRole.PASSENGER) create(@CurrentUser() user: AuthenticatedUser, @Body() dto: CreateRideDto) { return this.ridesService.create(user.id, dto); }
  @Get() findAll(@CurrentUser() user: AuthenticatedUser, @Query() query: RidesQueryDto) { return this.ridesService.findAll(user, query); }
  @Patch(':id/accept') @Roles(UserRole.DRIVER) accept(@CurrentUser() user: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string) { return this.ridesService.acceptRide(user.id, id); }
  @Patch(':id/status') @Roles(UserRole.DRIVER, UserRole.ADMIN, UserRole.DISPATCHER) updateStatus(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateRideStatusDto) { return this.ridesService.updateStatus(id, dto); }
  @Patch(':id/cancel') cancel(@CurrentUser() user: AuthenticatedUser, @Param('id', ParseUUIDPipe) id: string, @Body() dto: RideActionDto) { return this.ridesService.cancelRide(user, id, dto); }
}
