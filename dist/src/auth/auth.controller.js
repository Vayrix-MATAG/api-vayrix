"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const signup_dto_1 = require("./dto/signup.dto");
const login_dto_1 = require("./dto/login.dto");
const otp_request_dto_1 = require("./dto/otp-request.dto");
const otp_verify_dto_1 = require("./dto/otp-verify.dto");
const send_email_otp_dto_1 = require("./dto/send-email-otp.dto");
const verify_email_otp_dto_1 = require("./dto/verify-email-otp.dto");
const send_phone_otp_dto_1 = require("./dto/send-phone-otp.dto");
const verify_phone_otp_dto_1 = require("./dto/verify-phone-otp.dto");
const forgot_password_dto_1 = require("./dto/forgot-password.dto");
const forgot_password_email_dto_1 = require("./dto/forgot-password-email.dto");
const reset_password_dto_1 = require("./dto/reset-password.dto");
const reset_password_email_dto_1 = require("./dto/reset-password-email.dto");
const verify_forgot_password_email_dto_1 = require("./dto/verify-forgot-password-email.dto");
const verify_email_dto_1 = require("./dto/verify-email.dto");
const resend_code_dto_1 = require("./dto/resend-code.dto");
const refresh_token_dto_1 = require("./dto/refresh-token.dto");
const auth_entity_1 = require("./entities/auth.entity");
const message_response_entity_1 = require("../common/entities/message-response.entity");
const swagger_helpers_1 = require("../common/swagger/swagger.helpers");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const public_decorator_1 = require("../common/decorators/public.decorator");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    signup(dto) {
        return this.authService.signup(dto);
    }
    login(dto) {
        return this.authService.login(dto);
    }
    sendPhoneOtp(dto) {
        return this.authService.sendPhoneOtp(dto);
    }
    verifyPhoneOtp(dto) {
        return this.authService.verifyPhoneOtp(dto);
    }
    requestLoginOtp(dto) {
        return this.authService.requestLoginOtp(dto);
    }
    verifyLoginOtp(dto) {
        return this.authService.verifyLoginOtp(dto);
    }
    sendEmailOtp(dto) {
        return this.authService.sendEmailOtp(dto);
    }
    verifyEmailOtp(dto) {
        return this.authService.verifyEmailOtp(dto);
    }
    logout(user) {
        return this.authService.logout(user.id);
    }
    refresh(dto) {
        return this.authService.refresh(dto.refreshToken);
    }
    forgotPassword(dto) {
        return this.authService.forgotPassword(dto);
    }
    resetPassword(dto) {
        return this.authService.resetPassword(dto);
    }
    forgotPasswordEmail(dto) {
        return this.authService.forgotPasswordEmail(dto);
    }
    verifyForgotPasswordEmail(dto) {
        return this.authService.verifyForgotPasswordEmail(dto);
    }
    resetPasswordEmail(dto) {
        return this.authService.resetPasswordEmail(dto);
    }
    verifyEmail(dto) {
        return this.authService.verifyEmail(dto);
    }
    resendCode(dto) {
        return this.authService.resendCode(dto);
    }
    getProfile(user) {
        return this.authService.getProfile(user.id);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiOperation)({
        summary: 'Inscription utilisateur',
        description: 'Crée un compte CLIENT ou CHAUFFEUR, connecte automatiquement et envoie un email de bienvenue.',
    }),
    (0, swagger_1.ApiBody)({ type: signup_dto_1.SignupDto }),
    (0, swagger_helpers_1.ApiWrappedCreatedResponse)(auth_entity_1.AuthResponseEntity, 'Compte créé et connecté'),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Connexion par mot de passe',
        description: 'Accepte `email` + `password`, `telephone` + `password`, ou `login` (email/téléphone) + `password`.',
    }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(auth_entity_1.AuthResponseEntity, 'Connexion réussie'),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('send-phone-otp'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Connexion OTP — envoyer le code par SMS' }),
    (0, swagger_1.ApiBody)({ type: send_phone_otp_dto_1.SendPhoneOtpDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity, 'Code OTP envoyé par SMS'),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_phone_otp_dto_1.SendPhoneOtpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendPhoneOtp", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('verify-phone-otp'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Connexion OTP — vérifier le code SMS et se connecter' }),
    (0, swagger_1.ApiBody)({ type: verify_phone_otp_dto_1.VerifyPhoneOtpDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(auth_entity_1.AuthResponseEntity, 'Connexion OTP réussie'),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_phone_otp_dto_1.VerifyPhoneOtpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyPhoneOtp", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login/otp/request'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Legacy] Demander un OTP SMS',
        description: 'Alias de `POST /auth/send-phone-otp`. Conservé pour rétrocompatibilité.',
    }),
    (0, swagger_1.ApiBody)({ type: otp_request_dto_1.OtpRequestDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [otp_request_dto_1.OtpRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "requestLoginOtp", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login/otp/verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Legacy] Vérifier OTP SMS',
        description: 'Alias de `POST /auth/verify-phone-otp`. Conservé pour rétrocompatibilité.',
    }),
    (0, swagger_1.ApiBody)({ type: otp_verify_dto_1.OtpVerifyDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(auth_entity_1.AuthResponseEntity),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [otp_verify_dto_1.OtpVerifyDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyLoginOtp", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('send-email-otp'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Connexion OTP — envoyer le code par email' }),
    (0, swagger_1.ApiBody)({ type: send_email_otp_dto_1.SendEmailOtpDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity, 'Code OTP envoyé par email'),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_email_otp_dto_1.SendEmailOtpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendEmailOtp", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('verify-email-otp'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Connexion OTP — vérifier le code email et se connecter' }),
    (0, swagger_1.ApiBody)({ type: verify_email_otp_dto_1.VerifyEmailOtpDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(auth_entity_1.AuthResponseEntity, 'Connexion OTP réussie'),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_email_otp_dto_1.VerifyEmailOtpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmailOtp", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Déconnexion', description: 'Supprime le refresh token stocké.' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Rafraîchir les tokens JWT' }),
    (0, swagger_1.ApiBody)({ type: refresh_token_dto_1.RefreshTokenDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(auth_entity_1.AuthResponseEntity, 'Nouveaux tokens générés'),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_token_dto_1.RefreshTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('forgot-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Mot de passe oublié — envoyer OTP par SMS' }),
    (0, swagger_1.ApiBody)({ type: forgot_password_dto_1.ForgotPasswordDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('reset-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Mot de passe oublié — réinitialiser via OTP SMS' }),
    (0, swagger_1.ApiBody)({ type: reset_password_dto_1.ResetPasswordDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('forgot-password-email'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Mot de passe oublié — envoyer OTP par email' }),
    (0, swagger_1.ApiBody)({ type: forgot_password_email_dto_1.ForgotPasswordEmailDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_email_dto_1.ForgotPasswordEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPasswordEmail", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('verify-forgot-password-email'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Mot de passe oublié — vérifier OTP email (sans consommer)' }),
    (0, swagger_1.ApiBody)({ type: verify_forgot_password_email_dto_1.VerifyForgotPasswordEmailDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_forgot_password_email_dto_1.VerifyForgotPasswordEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyForgotPasswordEmail", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('reset-password-email'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Mot de passe oublié — réinitialiser via OTP email' }),
    (0, swagger_1.ApiBody)({ type: reset_password_email_dto_1.ResetPasswordEmailDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_email_dto_1.ResetPasswordEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPasswordEmail", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('verify-email'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Vérifier l\'email et activer le compte client' }),
    (0, swagger_1.ApiBody)({ type: verify_email_dto_1.VerifyEmailDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_email_dto_1.VerifyEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('resend-code'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Renvoyer un code OTP par SMS' }),
    (0, swagger_1.ApiBody)({ type: resend_code_dto_1.ResendCodeDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity),
    (0, swagger_helpers_1.ApiPublicErrors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resend_code_dto_1.ResendCodeDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendCode", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, swagger_1.ApiOperation)({ summary: 'Profil de l\'utilisateur connecté' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(auth_entity_1.AuthUserEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map