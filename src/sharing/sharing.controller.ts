import { Body, Controller, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
import { CreateRideShareDto } from './dto/sharing.dto';
import { SharingService } from './sharing.service';

@ApiTags('Sharing')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('sharing')
export class SharingController {
  constructor(private readonly sharingService: SharingService) {}
  @Post('rides/:rideId') createShare(@CurrentUser() user: AuthenticatedUser, @Param('rideId', ParseUUIDPipe) rideId: string, @Body() dto: CreateRideShareDto) { return this.sharingService.createShare(user.id, rideId, dto); }
}
