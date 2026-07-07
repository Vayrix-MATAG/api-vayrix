"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = require("path");
(0, dotenv_1.config)({ path: (0, path_1.resolve)(process.cwd(), '.env'), override: true });
function parseHttpPort() {
    const raw = process.env.PORT?.trim();
    if (!raw) {
        throw new Error('PORT est obligatoire dans le fichier .env');
    }
    const port = Number.parseInt(raw, 10);
    if (Number.isNaN(port) || port < 1 || port > 65535) {
        throw new Error(`PORT invalide dans .env : "${raw}"`);
    }
    return port;
}
exports.default = () => ({
    nodeEnv: process.env.NODE_ENV ?? 'development',
    port: parseHttpPort(),
    apiPrefix: process.env.API_PREFIX ?? 'api/v1',
    app: {
        frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3000',
    },
    database: {
        url: process.env.DATABASE_URL,
        poolMax: parseInt(process.env.DATABASE_POOL_MAX ?? '10', 10),
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN ?? '15m',
        refreshSecret: process.env.JWT_REFRESH_SECRET,
        refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? '7d',
    },
    mail: {
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT ?? '587', 10),
        secure: process.env.MAIL_SECURE === 'true',
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD,
        fromEmail: process.env.MAIL_FROM_EMAIL,
        fromName: process.env.MAIL_FROM_NAME ?? 'VAYRIX',
        logoUrl: process.env.MAIL_LOGO_URL || undefined,
    },
    otp: {
        expiryMinutes: parseInt(process.env.OTP_EXPIRY_MINUTES ?? '5', 10),
        resendCooldownSeconds: parseInt(process.env.OTP_RESEND_COOLDOWN_SECONDS ?? '60', 10),
        maxAttempts: parseInt(process.env.OTP_MAX_ATTEMPTS ?? '5', 10),
    },
    sms: {
        provider: (process.env.SMS_PROVIDER ?? 'mock'),
        apiUrl: process.env.SMS_API_URL,
        apiKey: process.env.SMS_API_KEY,
        apiSecret: process.env.SMS_API_SECRET || undefined,
        senderId: process.env.SMS_SENDER_ID ?? 'VAYRIX',
    },
    redis: {
        host: process.env.REDIS_HOST ?? 'localhost',
        port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
        password: process.env.REDIS_PASSWORD || undefined,
    },
    cors: {
        origins: (process.env.CORS_ORIGINS ?? 'http://localhost:3000').split(','),
    },
    throttle: {
        ttl: parseInt(process.env.THROTTLE_TTL ?? '60000', 10),
        limit: parseInt(process.env.THROTTLE_LIMIT ?? '100', 10),
    },
    storage: {
        path: process.env.STORAGE_PATH ?? 'storage',
        maxFileSize: parseInt(process.env.MAX_FILE_SIZE ?? '10485760', 10),
    },
    pricing: {
        currency: process.env.CURRENCY ?? 'XOF',
        baseFare: parseFloat(process.env.BASE_FARE ?? '500'),
        perKmRate: parseFloat(process.env.PER_KM_RATE ?? '250'),
        perMinRate: parseFloat(process.env.PER_MIN_RATE ?? '50'),
    },
    swagger: {
        title: process.env.SWAGGER_TITLE ?? 'VAYRIX API',
        description: process.env.SWAGGER_DESCRIPTION ??
            'Documentation professionnelle de l’API VAYRIX',
        version: process.env.SWAGGER_VERSION ?? '1.0.0',
    },
});
//# sourceMappingURL=configuration.js.map