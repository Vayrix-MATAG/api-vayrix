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
var SmsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let SmsService = SmsService_1 = class SmsService {
    configService;
    logger = new common_1.Logger(SmsService_1.name);
    constructor(configService) {
        this.configService = configService;
    }
    async sendOtp(telephone, code, context) {
        const message = `VAYRIX — Votre code de verification est : ${code}. Valide 5 minutes. Ne le partagez pas.`;
        await this.send({ telephone, message, context });
    }
    async send(payload) {
        const provider = this.getProvider();
        switch (provider) {
            case 'http':
                await this.sendViaHttp(payload);
                break;
            case 'mock':
            default:
                this.logger.log(`[SMS:MOCK:${payload.context}] → ${payload.telephone} : ${payload.message}`);
                break;
        }
    }
    getProvider() {
        return (this.configService.get('sms.provider') ?? 'mock');
    }
    async sendViaHttp(payload) {
        const apiUrl = this.configService.getOrThrow('sms.apiUrl');
        const apiKey = this.configService.getOrThrow('sms.apiKey');
        const senderId = this.configService.get('sms.senderId') ?? 'VAYRIX';
        const body = {
            to: payload.telephone,
            from: senderId,
            message: payload.message,
            text: payload.message,
        };
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
                'X-API-Key': apiKey,
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            const errorText = await response.text().catch(() => '');
            this.logger.error(`[SMS:HTTP:${payload.context}] Échec ${response.status} → ${payload.telephone} — ${errorText}`);
            throw new Error(`Échec envoi SMS (${response.status})`);
        }
        this.logger.log(`[SMS:HTTP:${payload.context}] Envoyé à ${payload.telephone}`);
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = SmsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SmsService);
//# sourceMappingURL=sms.service.js.map