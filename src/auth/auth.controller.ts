import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiExcludeEndpoint,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { OtpRequestDto } from './dto/otp-request.dto';
import { OtpVerifyDto } from './dto/otp-verify.dto';
import { SendEmailOtpDto } from './dto/send-email-otp.dto';
import { VerifyEmailOtpDto } from './dto/verify-email-otp.dto';
import { SendPhoneOtpDto } from './dto/send-phone-otp.dto';
import { VerifyPhoneOtpDto } from './dto/verify-phone-otp.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ForgotPasswordEmailDto } from './dto/forgot-password-email.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ResetPasswordEmailDto } from './dto/reset-password-email.dto';
import { VerifyForgotPasswordEmailDto } from './dto/verify-forgot-password-email.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { ResendCodeDto } from './dto/resend-code.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { AuthResponseEntity, AuthUserEntity } from './entities/auth.entity';
import { MessageResponseEntity } from '../common/entities/message-response.entity';
import {
  ApiPublicErrors,
  ApiProtectedErrors,
  ApiWrappedCreatedResponse,
  ApiWrappedOkResponse,
} from '../common/swagger/swagger.helpers';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';
import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signup')
  @ApiOperation({
    summary: 'Inscription utilisateur',
    description:
      'Crée un compte CLIENT ou CHAUFFEUR, connecte automatiquement et envoie un email de bienvenue.',
  })
  @ApiBody({ type: SignupDto })
  @ApiWrappedCreatedResponse(AuthResponseEntity, 'Compte créé et connecté')
  @ApiPublicErrors()
  signup(@Body() dto: SignupDto): Promise<AuthResponseEntity> {
    return this.authService.signup(dto);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Connexion par mot de passe',
    description:
      'Accepte `email` + `password`, `telephone` + `password`, ou `login` (email/téléphone) + `password`.',
  })
  @ApiBody({ type: LoginDto })
  @ApiWrappedOkResponse(AuthResponseEntity, 'Connexion réussie')
  @ApiPublicErrors()
  login(@Body() dto: LoginDto): Promise<AuthResponseEntity> {
    return this.authService.login(dto);
  }

  @Public()
  @Post('send-phone-otp')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Connexion OTP — envoyer le code par SMS' })
  @ApiBody({ type: SendPhoneOtpDto })
  @ApiWrappedOkResponse(MessageResponseEntity, 'Code OTP envoyé par SMS')
  @ApiPublicErrors()
  sendPhoneOtp(@Body() dto: SendPhoneOtpDto): Promise<MessageResponseEntity> {
    return this.authService.sendPhoneOtp(dto);
  }

  @Public()
  @Post('verify-phone-otp')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Connexion OTP — vérifier le code SMS et se connecter' })
  @ApiBody({ type: VerifyPhoneOtpDto })
  @ApiWrappedOkResponse(AuthResponseEntity, 'Connexion OTP réussie')
  @ApiPublicErrors()
  verifyPhoneOtp(@Body() dto: VerifyPhoneOtpDto): Promise<AuthResponseEntity> {
    return this.authService.verifyPhoneOtp(dto);
  }

  @Public()
  @ApiExcludeEndpoint()
  @Post('login/otp/request')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: '[Legacy] Demander un OTP SMS',
    description: 'Alias de `POST /auth/send-phone-otp`. Conservé pour rétrocompatibilité.',
  })
  @ApiBody({ type: OtpRequestDto })
  @ApiWrappedOkResponse(MessageResponseEntity)
  @ApiPublicErrors()
  requestLoginOtp(@Body() dto: OtpRequestDto): Promise<MessageResponseEntity> {
    return this.authService.requestLoginOtp(dto);
  }

  @Public()
  @ApiExcludeEndpoint()
  @Post('login/otp/verify')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: '[Legacy] Vérifier OTP SMS',
    description: 'Alias de `POST /auth/verify-phone-otp`. Conservé pour rétrocompatibilité.',
  })
  @ApiBody({ type: OtpVerifyDto })
  @ApiWrappedOkResponse(AuthResponseEntity)
  @ApiPublicErrors()
  verifyLoginOtp(@Body() dto: OtpVerifyDto): Promise<AuthResponseEntity> {
    return this.authService.verifyLoginOtp(dto);
  }

  @Public()
  @Post('send-email-otp')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Connexion OTP — envoyer le code par email' })
  @ApiBody({ type: SendEmailOtpDto })
  @ApiWrappedOkResponse(MessageResponseEntity, 'Code OTP envoyé par email')
  @ApiPublicErrors()
  sendEmailOtp(@Body() dto: SendEmailOtpDto): Promise<MessageResponseEntity> {
    return this.authService.sendEmailOtp(dto);
  }

  @Public()
  @Post('verify-email-otp')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Connexion OTP — vérifier le code email et se connecter' })
  @ApiBody({ type: VerifyEmailOtpDto })
  @ApiWrappedOkResponse(AuthResponseEntity, 'Connexion OTP réussie')
  @ApiPublicErrors()
  verifyEmailOtp(@Body() dto: VerifyEmailOtpDto): Promise<AuthResponseEntity> {
    return this.authService.verifyEmailOtp(dto);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Déconnexion', description: 'Supprime le refresh token stocké.' })
  @ApiWrappedOkResponse(MessageResponseEntity)
  @ApiProtectedErrors()
  logout(@CurrentUser() user: AuthenticatedUser): Promise<MessageResponseEntity> {
    return this.authService.logout(user.id);
  }

  @Public()
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Rafraîchir les tokens JWT' })
  @ApiBody({ type: RefreshTokenDto })
  @ApiWrappedOkResponse(AuthResponseEntity, 'Nouveaux tokens générés')
  @ApiPublicErrors()
  refresh(@Body() dto: RefreshTokenDto): Promise<AuthResponseEntity> {
    return this.authService.refresh(dto.refreshToken);
  }

  @Public()
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mot de passe oublié — envoyer OTP par SMS' })
  @ApiBody({ type: ForgotPasswordDto })
  @ApiWrappedOkResponse(MessageResponseEntity)
  @ApiPublicErrors()
  forgotPassword(@Body() dto: ForgotPasswordDto): Promise<MessageResponseEntity> {
    return this.authService.forgotPassword(dto);
  }

  @Public()
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mot de passe oublié — réinitialiser via OTP SMS' })
  @ApiBody({ type: ResetPasswordDto })
  @ApiWrappedOkResponse(MessageResponseEntity)
  @ApiPublicErrors()
  resetPassword(@Body() dto: ResetPasswordDto): Promise<MessageResponseEntity> {
    return this.authService.resetPassword(dto);
  }

  @Public()
  @Post('forgot-password-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mot de passe oublié — envoyer OTP par email' })
  @ApiBody({ type: ForgotPasswordEmailDto })
  @ApiWrappedOkResponse(MessageResponseEntity)
  @ApiPublicErrors()
  forgotPasswordEmail(
    @Body() dto: ForgotPasswordEmailDto,
  ): Promise<MessageResponseEntity> {
    return this.authService.forgotPasswordEmail(dto);
  }

  @Public()
  @Post('verify-forgot-password-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mot de passe oublié — vérifier OTP email (sans consommer)' })
  @ApiBody({ type: VerifyForgotPasswordEmailDto })
  @ApiWrappedOkResponse(MessageResponseEntity)
  @ApiPublicErrors()
  verifyForgotPasswordEmail(
    @Body() dto: VerifyForgotPasswordEmailDto,
  ): Promise<MessageResponseEntity> {
    return this.authService.verifyForgotPasswordEmail(dto);
  }

  @Public()
  @Post('reset-password-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mot de passe oublié — réinitialiser via OTP email' })
  @ApiBody({ type: ResetPasswordEmailDto })
  @ApiWrappedOkResponse(MessageResponseEntity)
  @ApiPublicErrors()
  resetPasswordEmail(
    @Body() dto: ResetPasswordEmailDto,
  ): Promise<MessageResponseEntity> {
    return this.authService.resetPasswordEmail(dto);
  }

  @Public()
  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Vérifier l\'email et activer le compte client' })
  @ApiBody({ type: VerifyEmailDto })
  @ApiWrappedOkResponse(MessageResponseEntity)
  @ApiPublicErrors()
  verifyEmail(@Body() dto: VerifyEmailDto): Promise<MessageResponseEntity> {
    return this.authService.verifyEmail(dto);
  }

  @Public()
  @Post('resend-code')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Renvoyer un code OTP par SMS' })
  @ApiBody({ type: ResendCodeDto })
  @ApiWrappedOkResponse(MessageResponseEntity)
  @ApiPublicErrors()
  resendCode(@Body() dto: ResendCodeDto): Promise<MessageResponseEntity> {
    return this.authService.resendCode(dto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT')
  @ApiOperation({ summary: 'Profil de l\'utilisateur connecté' })
  @ApiWrappedOkResponse(AuthUserEntity)
  @ApiProtectedErrors()
  getProfile(@CurrentUser() user: AuthenticatedUser): Promise<AuthUserEntity> {
    return this.authService.getProfile(user.id);
  }
}
