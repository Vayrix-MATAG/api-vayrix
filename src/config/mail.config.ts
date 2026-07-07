import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT ?? '587', 10),
  secure: process.env.MAIL_SECURE === 'true',
  user: process.env.MAIL_USER,
  password: process.env.MAIL_PASSWORD,
  fromEmail: process.env.MAIL_FROM_EMAIL,
  fromName: process.env.MAIL_FROM_NAME ?? 'VAYRIX',
  logoUrl: process.env.MAIL_LOGO_URL || undefined,
}));
