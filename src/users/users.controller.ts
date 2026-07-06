import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import {
  UpdateUserDto,
  UpdateUserLangueDto,
  UpdateUserPhotoDto,
  UpdateUserTelephoneDto,
} from './dto/users.dto';
import { UserEntity } from './entities/user.entity';
import { MessageResponseEntity } from '../common/entities/message-response.entity';
import {
  ApiProtectedErrors,
  ApiWrappedOkResponse,
} from '../common/swagger/swagger.helpers';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';

@ApiTags('Users')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @ApiOperation({ summary: 'Mon profil' })
  @ApiWrappedOkResponse(UserEntity)
  @ApiProtectedErrors()
  getMe(@CurrentUser() user: AuthenticatedUser): Promise<UserEntity> {
    return this.usersService.findOne(user.id);
  }

  @Patch('me')
  @ApiOperation({ summary: 'Mettre à jour mon profil (nom, prénom)' })
  @ApiBody({ type: UpdateUserDto })
  @ApiWrappedOkResponse(UserEntity)
  @ApiProtectedErrors()
  updateMe(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.usersService.update(user.id, dto);
  }

  @Patch('photo')
  @ApiOperation({ summary: 'Mettre à jour ma photo de profil' })
  @ApiBody({ type: UpdateUserPhotoDto })
  @ApiWrappedOkResponse(UserEntity)
  @ApiProtectedErrors()
  updatePhoto(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: UpdateUserPhotoDto,
  ): Promise<UserEntity> {
    return this.usersService.updatePhoto(user.id, dto);
  }

  @Patch('langue')
  @ApiOperation({ summary: 'Mettre à jour ma langue' })
  @ApiBody({ type: UpdateUserLangueDto })
  @ApiWrappedOkResponse(UserEntity)
  @ApiProtectedErrors()
  updateLangue(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: UpdateUserLangueDto,
  ): Promise<UserEntity> {
    return this.usersService.updateLangue(user.id, dto);
  }

  @Patch('telephone')
  @ApiOperation({ summary: 'Mettre à jour mon numéro de téléphone' })
  @ApiBody({ type: UpdateUserTelephoneDto })
  @ApiWrappedOkResponse(UserEntity)
  @ApiProtectedErrors()
  updateTelephone(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: UpdateUserTelephoneDto,
  ): Promise<UserEntity> {
    return this.usersService.updateTelephone(user.id, dto);
  }

  @Delete('me')
  @ApiOperation({ summary: 'Supprimer mon compte' })
  @ApiWrappedOkResponse(MessageResponseEntity)
  @ApiProtectedErrors()
  removeMe(@CurrentUser() user: AuthenticatedUser): Promise<MessageResponseEntity> {
    return this.usersService.remove(user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Détail d\'un utilisateur par ID' })
  @ApiParam({ name: 'id', description: 'ID utilisateur', example: '1' })
  @ApiWrappedOkResponse(UserEntity)
  @ApiProtectedErrors()
  findOne(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.findOne(id);
  }
}
