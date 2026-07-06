"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const roles_constant_1 = require("../common/constants/roles.constant");
const mail_service_1 = require("../mail/mail.service");
const otp_constants_1 = require("../otp/otp.constants");
const otp_service_1 = require("../otp/otp.service");
const sms_service_1 = require("../sms/sms.service");
const users_repository_1 = require("../users/repositories/users.repository");
const auth_repository_1 = require("./repositories/auth.repository");
let AuthService = AuthService_1 = class AuthService {
    authRepository;
    usersRepository;
    jwtService;
    configService;
    otpService;
    smsService;
    mailService;
    logger = new common_1.Logger(AuthService_1.name);
    saltRounds = 12;
    constructor(authRepository, usersRepository, jwtService, configService, otpService, smsService, mailService) {
        this.authRepository = authRepository;
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
        this.configService = configService;
        this.otpService = otpService;
        this.smsService = smsService;
        this.mailService = mailService;
    }
    async signup(dto) {
        const existingEmail = await this.usersRepository.findByEmail(dto.email);
        if (existingEmail) {
            throw new common_1.ConflictException('Cet email est déjà utilisé');
        }
        const existingPhone = await this.usersRepository.findByTelephone(dto.telephone);
        if (existingPhone) {
            throw new common_1.ConflictException('Ce numéro de téléphone est déjà utilisé');
        }
        const hashedPassword = await bcrypt.hash(dto.password, this.saltRounds);
        const isClient = dto.role === roles_constant_1.APP_ROLES.CLIENT;
        const utilisateur = await this.authRepository.createSignup({
            nom: dto.nom,
            prenom: dto.prenom,
            telephone: dto.telephone,
            email: dto.email,
            motDePasse: hashedPassword,
            roleNom: dto.role,
            isClient,
        });
        this.logger.log(`Inscription réussie: ${utilisateur.email} (${dto.role})`);
        const response = await this.generateAuthResponse(utilisateur);
        setImmediate(() => {
            this.mailService
                .sendWelcomeEmail(utilisateur.email, utilisateur.prenom, utilisateur.nom)
                .catch((err) => this.logger.error('Échec envoi email de bienvenue', err));
        });
        return response;
    }
    async login(dto) {
        const identifier = dto.email ?? dto.telephone ?? dto.login;
        if (!identifier) {
            throw new common_1.BadRequestException('Email ou téléphone requis');
        }
        const utilisateur = await this.findByLogin(identifier);
        if (!utilisateur) {
            throw new common_1.UnauthorizedException('Identifiants invalides');
        }
        const isPasswordValid = await bcrypt.compare(dto.password, utilisateur.motDePasse);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Identifiants invalides');
        }
        return this.loginUtilisateur(utilisateur);
    }
    async requestLoginOtp(dto) {
        return this.sendPhoneOtp(dto);
    }
    async verifyLoginOtp(dto) {
        return this.verifyPhoneOtp(dto);
    }
    async sendPhoneOtp(dto) {
        const utilisateur = await this.authRepository.findByTelephone(dto.telephone);
        if (!utilisateur) {
            throw new common_1.NotFoundException('Numéro de téléphone introuvable');
        }
        const { code } = await this.otpService.createOtp(utilisateur.id, otp_constants_1.OTP_CANAL.SMS, otp_constants_1.OTP_TYPE.LOGIN);
        await this.smsService.sendOtp(dto.telephone, code, 'LOGIN');
        return { message: 'Code OTP envoyé par SMS' };
    }
    async verifyPhoneOtp(dto) {
        const utilisateur = await this.authRepository.findByTelephone(dto.telephone);
        if (!utilisateur) {
            throw new common_1.UnauthorizedException('Code OTP invalide');
        }
        await this.otpService.verifyOtp(utilisateur.id, otp_constants_1.OTP_CANAL.SMS, otp_constants_1.OTP_TYPE.LOGIN, dto.otp);
        return this.loginUtilisateur(utilisateur);
    }
    async sendEmailOtp(dto) {
        const utilisateur = await this.authRepository.findByEmail(dto.email);
        if (!utilisateur) {
            throw new common_1.NotFoundException('Adresse email introuvable');
        }
        const { code } = await this.otpService.createOtp(utilisateur.id, otp_constants_1.OTP_CANAL.EMAIL, otp_constants_1.OTP_TYPE.LOGIN);
        await this.mailService.sendOtpEmail(utilisateur.email, utilisateur.prenom, code, 'connexion');
        return { message: 'Code OTP envoyé par email' };
    }
    async verifyEmailOtp(dto) {
        const utilisateur = await this.authRepository.findByEmail(dto.email);
        if (!utilisateur) {
            throw new common_1.UnauthorizedException('Code OTP invalide');
        }
        await this.otpService.verifyOtp(utilisateur.id, otp_constants_1.OTP_CANAL.EMAIL, otp_constants_1.OTP_TYPE.LOGIN, dto.otp);
        return this.loginUtilisateur(utilisateur);
    }
    async logout(userId) {
        await this.authRepository.updateRefreshToken(BigInt(userId), null);
        return { message: 'Déconnexion réussie' };
    }
    async refresh(refreshToken) {
        let payload;
        try {
            payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.getOrThrow('jwt.refreshSecret'),
            });
        }
        catch {
            throw new common_1.UnauthorizedException('Refresh token invalide ou expiré');
        }
        const utilisateur = await this.authRepository.findByIdWithPassword(BigInt(payload.sub));
        if (!utilisateur?.refreshToken) {
            throw new common_1.UnauthorizedException('Refresh token invalide ou expiré');
        }
        const isValid = await bcrypt.compare(refreshToken, utilisateur.refreshToken);
        if (!isValid) {
            throw new common_1.UnauthorizedException('Refresh token invalide ou expiré');
        }
        const withRoles = await this.authRepository.findById(utilisateur.id);
        if (!withRoles) {
            throw new common_1.UnauthorizedException('Utilisateur introuvable');
        }
        return this.generateAuthResponse(withRoles);
    }
    async forgotPassword(dto) {
        const utilisateur = await this.authRepository.findByTelephone(dto.telephone);
        if (!utilisateur) {
            throw new common_1.NotFoundException('Numéro de téléphone introuvable');
        }
        const { code } = await this.otpService.createOtp(utilisateur.id, otp_constants_1.OTP_CANAL.SMS, otp_constants_1.OTP_TYPE.RESET_PASSWORD);
        await this.smsService.sendOtp(dto.telephone, code, 'RESET_PASSWORD');
        return { message: 'Code de réinitialisation envoyé par SMS' };
    }
    async resetPassword(dto) {
        const utilisateur = await this.authRepository.findByTelephone(dto.telephone);
        if (!utilisateur) {
            throw new common_1.BadRequestException('Code OTP invalide');
        }
        await this.otpService.verifyOtp(utilisateur.id, otp_constants_1.OTP_CANAL.SMS, otp_constants_1.OTP_TYPE.RESET_PASSWORD, dto.otp);
        await this.updatePasswordAndInvalidateSessions(utilisateur.id, dto.password);
        return { message: 'Mot de passe réinitialisé avec succès' };
    }
    async forgotPasswordEmail(dto) {
        const utilisateur = await this.authRepository.findByEmail(dto.email);
        if (!utilisateur) {
            throw new common_1.NotFoundException('Adresse email introuvable');
        }
        const { code } = await this.otpService.createOtp(utilisateur.id, otp_constants_1.OTP_CANAL.EMAIL, otp_constants_1.OTP_TYPE.RESET_PASSWORD);
        await this.mailService.sendResetPasswordEmail(utilisateur.email, utilisateur.prenom, code);
        return { message: 'Code de réinitialisation envoyé par email' };
    }
    async verifyForgotPasswordEmail(dto) {
        const utilisateur = await this.authRepository.findByEmail(dto.email);
        if (!utilisateur) {
            throw new common_1.BadRequestException('Code OTP invalide');
        }
        await this.otpService.validateOtpWithoutUse(utilisateur.id, otp_constants_1.OTP_CANAL.EMAIL, otp_constants_1.OTP_TYPE.RESET_PASSWORD, dto.otp);
        return { message: 'Code OTP vérifié avec succès' };
    }
    async resetPasswordEmail(dto) {
        const utilisateur = await this.authRepository.findByEmail(dto.email);
        if (!utilisateur) {
            throw new common_1.BadRequestException('Code OTP invalide');
        }
        await this.otpService.verifyOtp(utilisateur.id, otp_constants_1.OTP_CANAL.EMAIL, otp_constants_1.OTP_TYPE.RESET_PASSWORD, dto.otp);
        await this.updatePasswordAndInvalidateSessions(utilisateur.id, dto.password);
        return { message: 'Mot de passe réinitialisé avec succès' };
    }
    async verifyEmail(dto) {
        const utilisateur = await this.authRepository.findByEmail(dto.email);
        if (!utilisateur) {
            throw new common_1.BadRequestException('Code OTP invalide');
        }
        await this.otpService.verifyOtp(utilisateur.id, otp_constants_1.OTP_CANAL.EMAIL, otp_constants_1.OTP_TYPE.VERIFY_ACCOUNT, dto.otp);
        await this.authRepository.activateClientAccount(utilisateur.id);
        return { message: 'Email vérifié et compte activé' };
    }
    async resendCode(dto) {
        const utilisateur = await this.authRepository.findByTelephone(dto.telephone);
        if (!utilisateur) {
            throw new common_1.NotFoundException('Numéro de téléphone introuvable');
        }
        const { code } = await this.otpService.createOtp(utilisateur.id, otp_constants_1.OTP_CANAL.SMS, otp_constants_1.OTP_TYPE.VERIFY_ACCOUNT);
        await this.smsService.sendOtp(dto.telephone, code, 'RESEND');
        return { message: 'Nouveau code envoyé par SMS' };
    }
    async getProfile(userId) {
        const utilisateur = await this.authRepository.findById(BigInt(userId));
        if (!utilisateur) {
            throw new common_1.NotFoundException('Utilisateur introuvable');
        }
        return this.toAuthUser(utilisateur);
    }
    async loginUtilisateur(utilisateur) {
        await this.authRepository.updateLastLogin(utilisateur.id);
        const withRoles = await this.authRepository.findById(utilisateur.id);
        if (!withRoles) {
            throw new common_1.UnauthorizedException('Utilisateur introuvable');
        }
        this.logger.log(`Connexion réussie: ${utilisateur.email}`);
        return this.generateAuthResponse(withRoles);
    }
    async updatePasswordAndInvalidateSessions(utilisateurId, plainPassword) {
        const hashedPassword = await bcrypt.hash(plainPassword, this.saltRounds);
        await this.authRepository.updatePassword(utilisateurId, hashedPassword);
        await this.authRepository.updateRefreshToken(utilisateurId, null);
    }
    async findByLogin(login) {
        if (login.includes('@')) {
            return this.authRepository.findByEmail(login);
        }
        return this.authRepository.findByTelephone(login);
    }
    async generateAuthResponse(utilisateur) {
        const roles = utilisateur.utilisateurRoles.map((ur) => ur.role.nom);
        const payload = {
            sub: utilisateur.id.toString(),
            email: utilisateur.email,
            roles,
        };
        const accessToken = this.jwtService.sign(payload);
        const refreshExpiresIn = (this.configService.get('jwt.refreshExpiresIn') ?? '7d');
        const refreshToken = this.jwtService.sign(payload, {
            secret: this.configService.getOrThrow('jwt.refreshSecret'),
            expiresIn: refreshExpiresIn,
        });
        const hashedRefresh = await bcrypt.hash(refreshToken, this.saltRounds);
        await this.authRepository.updateRefreshToken(utilisateur.id, hashedRefresh);
        return {
            accessToken,
            refreshToken,
            expiresIn: this.configService.get('jwt.expiresIn') ?? '15m',
            utilisateur: this.toAuthUser(utilisateur),
        };
    }
    toAuthUser(utilisateur) {
        return {
            id: utilisateur.id.toString(),
            nom: utilisateur.nom,
            prenom: utilisateur.prenom,
            telephone: utilisateur.telephone,
            email: utilisateur.email,
            roles: utilisateur.utilisateurRoles.map((ur) => ur.role.nom),
            photo: utilisateur.photo,
            langue: utilisateur.langue,
            derniereConnexion: utilisateur.derniereConnexion,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        users_repository_1.UsersRepository,
        jwt_1.JwtService,
        config_1.ConfigService,
        otp_service_1.OtpService,
        sms_service_1.SmsService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map