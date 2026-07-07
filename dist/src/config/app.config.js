"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('app', () => ({
    nodeEnv: process.env.NODE_ENV ?? 'development',
    port: Number.parseInt(process.env.PORT ?? '', 10),
    apiPrefix: process.env.API_PREFIX ?? 'api/v1',
    frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3000',
    corsOrigins: (process.env.CORS_ORIGINS ?? 'http://localhost:3000').split(','),
    throttleTtl: parseInt(process.env.THROTTLE_TTL ?? '60000', 10),
    throttleLimit: parseInt(process.env.THROTTLE_LIMIT ?? '100', 10),
}));
//# sourceMappingURL=app.config.js.map