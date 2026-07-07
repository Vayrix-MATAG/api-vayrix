"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('sms', () => ({
    provider: (process.env.SMS_PROVIDER ?? 'mock'),
    apiUrl: process.env.SMS_API_URL,
    apiKey: process.env.SMS_API_KEY,
    apiSecret: process.env.SMS_API_SECRET || undefined,
    senderId: process.env.SMS_SENDER_ID ?? 'VAYRIX',
}));
//# sourceMappingURL=sms.config.js.map