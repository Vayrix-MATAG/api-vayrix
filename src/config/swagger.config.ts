import { registerAs } from '@nestjs/config';

export default registerAs('swagger', () => ({
  title: process.env.SWAGGER_TITLE ?? 'VAYRIX API',
  description:
    process.env.SWAGGER_DESCRIPTION ??
    'Documentation professionnelle de l’API VAYRIX',
  version: process.env.SWAGGER_VERSION ?? '1.0.0',
}));
