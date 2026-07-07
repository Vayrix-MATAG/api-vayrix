import { registerAs } from '@nestjs/config';

export default registerAs('sms', () => ({
  provider: (process.env.SMS_PROVIDER ?? 'mock') as 'mock' | 'http',
  apiUrl: process.env.SMS_API_URL,
  apiKey: process.env.SMS_API_KEY,
  apiSecret: process.env.SMS_API_SECRET || undefined,
  senderId: process.env.SMS_SENDER_ID ?? 'VAYRIX',
}));
