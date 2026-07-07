"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('swagger', () => ({
    title: process.env.SWAGGER_TITLE ?? 'VAYRIX API',
    description: process.env.SWAGGER_DESCRIPTION ??
        'Documentation professionnelle de l’API VAYRIX',
    version: process.env.SWAGGER_VERSION ?? '1.0.0',
}));
//# sourceMappingURL=swagger.config.js.map