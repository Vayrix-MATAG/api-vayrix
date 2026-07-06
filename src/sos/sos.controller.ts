import { Body, Controller, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import { CreateSosDto } from './dto/sos.dto';
import { SosService } from './sos.service';

@ApiTags('SOS')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('sos')
export class SosController {
  constructor(private readonly sosService: SosService) {}
  @Post(':rideId') trigger(@CurrentUser() user: AuthenticatedUser, @Param('rideId', ParseUUIDPipe) rideId: string, @Body() dto: CreateSosDto) { return this.sosService.trigger(user.id, rideId, dto); }
  @Patch(':id/resolve') @Roles(UserRole.ADMIN, UserRole.DISPATCHER) resolve(@Param('id', ParseUUIDPipe) id: string) { return this.sosService.resolve(id); }
}
