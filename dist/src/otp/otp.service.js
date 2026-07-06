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
var OtpService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
const otp_repository_1 = require("./repositories/otp.repository");
let OtpService = OtpService_1 = class OtpService {
    otpRepository;
    configService;
    logger = new common_1.Logger(OtpService_1.name);
    constructor(otpRepository, configService) {
        this.otpRepository = otpRepository;
        this.configService = configService;
    }
    generateOtp() {
        return (0, crypto_1.randomInt)(100000, 999999).toString();
    }
    async canRequestNewOtp(utilisateurId, canal, type) {
        const latest = await this.otpRepository.findLatest(utilisateurId, canal, type);
        if (!latest) {
            return true;
        }
        const cooldownMs = this.getResendCooldownMs();
        const elapsed = Date.now() - latest.createdAt.getTime();
        return elapsed >= cooldownMs;
    }
    async createOtp(utilisateurId, canal, type) {
        const canRequest = await this.canRequestNewOtp(utilisateurId, canal, type);
        if (!canRequest) {
            const cooldownSec = this.getResendCooldownMs() / 1000;
            throw new common_1.HttpException(`Veuillez attendre ${cooldownSec} secondes avant de demander un nouveau code`, 429);
        }
        await this.invalidateOtp(utilisateurId, canal, type);
        const code = this.generateOtp();
        const expireAt = new Date(Date.now() + this.getExpiryMs());
        const otp = await this.otpRepository.create({
            code,
            canal,
            type,
            expireAt,
            utilisateur: { connect: { id: utilisateurId } },
        });
        this.logger.debug(`OTP créé [${canal}/${type}] pour utilisateur ${utilisateurId}`);
        return { code, otp };
    }
    async invalidateOtp(utilisateurId, canal, type) {
        await this.otpRepository.invalidateAll(utilisateurId, canal, type);
    }
    async validateOtpWithoutUse(utilisateurId, canal, type, code) {
        const otp = await this.otpRepository.findLatestActive(utilisateurId, canal, type);
        if (!otp || this.isExpired(otp)) {
            throw new common_1.BadRequestException('Code OTP invalide ou expiré');
        }
        if (otp.tentatives >= this.getMaxAttempts()) {
            throw new common_1.BadRequestException('Nombre maximum de tentatives atteint. Veuillez demander un nouveau code');
        }
        if (otp.code !== code) {
            await this.incrementAttempt(otp.id);
            throw new common_1.BadRequestException('Code OTP invalide');
        }
        return otp;
    }
    async verifyOtp(utilisateurId, canal, type, code) {
        const otp = await this.otpRepository.findLatestActive(utilisateurId, canal, type);
        if (!otp) {
            throw new common_1.BadRequestException('Code OTP invalide ou expiré');
        }
        if (this.isExpired(otp)) {
            throw new common_1.BadRequestException('Code OTP expiré');
        }
        if (otp.tentatives >= this.getMaxAttempts()) {
            await this.markAsUsed(otp.id);
            throw new common_1.BadRequestException('Nombre maximum de tentatives atteint. Veuillez demander un nouveau code');
        }
        if (otp.code !== code) {
            await this.incrementAttempt(otp.id);
            const updated = await this.otpRepository.findLatestActive(utilisateurId, canal, type);
            if (updated && updated.tentatives >= this.getMaxAttempts()) {
                await this.markAsUsed(updated.id);
                throw new common_1.BadRequestException('Nombre maximum de tentatives atteint. Veuillez demander un nouveau code');
            }
            throw new common_1.BadRequestException('Code OTP invalide');
        }
        await this.markAsUsed(otp.id);
        return otp;
    }
    async incrementAttempt(otpId) {
        await this.otpRepository.incrementAttempt(otpId);
    }
    isExpired(otp) {
        return otp.expireAt < new Date();
    }
    async markAsUsed(otpId) {
        await this.otpRepository.markAsUsed(otpId);
    }
    async deleteExpiredOtp() {
        const count = await this.otpRepository.deleteExpired();
        if (count > 0) {
            this.logger.log(`${count} OTP expiré(s) supprimé(s)`);
        }
        return count;
    }
    getExpiryMs() {
        const minutes = this.configService.get('otp.expiryMinutes') ?? 5;
        return minutes * 60 * 1000;
    }
    getResendCooldownMs() {
        const seconds = this.configService.get('otp.resendCooldownSeconds') ?? 60;
        return seconds * 1000;
    }
    getMaxAttempts() {
        return this.configService.get('otp.maxAttempts') ?? 5;
    }
};
exports.OtpService = OtpService;
exports.OtpService = OtpService = OtpService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [otp_repository_1.OtpRepository,
        config_1.ConfigService])
], OtpService);
//# sourceMappingURL=otp.service.js.map