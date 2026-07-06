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
var MailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = __importStar(require("nodemailer"));
const mail_templates_1 = require("./templates/mail.templates");
let MailService = MailService_1 = class MailService {
    configService;
    logger = new common_1.Logger(MailService_1.name);
    transporter = null;
    constructor(configService) {
        this.configService = configService;
    }
    isConfigured() {
        return Boolean(this.configService.get('mail.host') &&
            this.configService.get('mail.user') &&
            this.configService.get('mail.password') &&
            this.configService.get('mail.fromEmail'));
    }
    getTransporter() {
        if (!this.isConfigured()) {
            throw new common_1.ServiceUnavailableException('Service email non configuré. Définissez MAIL_HOST, MAIL_USER, MAIL_PASSWORD et MAIL_FROM_EMAIL dans .env');
        }
        if (!this.transporter) {
            this.transporter = nodemailer.createTransport({
                host: this.configService.getOrThrow('mail.host'),
                port: this.configService.get('mail.port') ?? 587,
                secure: this.configService.get('mail.secure') ?? false,
                auth: {
                    user: this.configService.getOrThrow('mail.user'),
                    pass: this.configService.getOrThrow('mail.password'),
                },
            });
        }
        return this.transporter;
    }
    getFromAddress() {
        const name = this.configService.get('mail.fromName') ?? 'VAYRIX';
        const email = this.configService.getOrThrow('mail.fromEmail');
        return `"${name}" <${email}>`;
    }
    getLogoUrl() {
        return this.configService.get('mail.logoUrl') || undefined;
    }
    async sendOtpEmail(to, prenom, code, purpose = 'connexion') {
        const html = (0, mail_templates_1.buildOtpEmailHtml)(prenom, code, purpose, this.getLogoUrl());
        await this.sendMail(to, 'VAYRIX — Code de vérification', html, code);
    }
    async sendWelcomeEmail(to, prenom, nom, loginUrl) {
        const url = loginUrl ??
            `${this.configService.get('app.frontendUrl') ?? 'http://localhost:3000'}/login`;
        const html = (0, mail_templates_1.buildWelcomeEmailHtml)(prenom, nom, url, this.getLogoUrl());
        await this.sendMail(to, 'Bienvenue chez VAYRIX !', html);
    }
    async sendResetPasswordEmail(to, prenom, code) {
        const html = (0, mail_templates_1.buildResetPasswordEmailHtml)(prenom, code, this.getLogoUrl());
        await this.sendMail(to, 'VAYRIX — Réinitialisation de mot de passe', html, code);
    }
    async sendNotificationEmail(to, prenom, subject, message) {
        const html = (0, mail_templates_1.buildNotificationEmailHtml)(prenom, subject, message, this.getLogoUrl());
        await this.sendMail(to, subject, html);
    }
    async sendMail(to, subject, html, devCode) {
        if (!this.isConfigured()) {
            if (devCode && this.configService.get('nodeEnv') === 'development') {
                this.logger.warn(`[MAIL:DEV] SMTP non configuré — code pour ${to} : ${devCode}`);
            }
            throw new common_1.ServiceUnavailableException('Service email non configuré. Ajoutez MAIL_HOST, MAIL_USER, MAIL_PASSWORD et MAIL_FROM_EMAIL dans votre fichier .env puis redémarrez le serveur.');
        }
        try {
            const info = await this.getTransporter().sendMail({
                from: this.getFromAddress(),
                to,
                subject,
                html,
            });
            this.logger.log(`Email envoyé à ${to} — messageId: ${info.messageId}`);
        }
        catch (error) {
            this.logger.error(`Échec envoi email à ${to}`, error);
            throw new common_1.ServiceUnavailableException(`Impossible d'envoyer l'email. Vérifiez vos identifiants SMTP (Gmail : utilisez un mot de passe d'application). Détail : ${error instanceof Error ? error.message : 'erreur inconnue'}`);
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = MailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map