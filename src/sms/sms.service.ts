import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export type SmsProvider = 'mock' | 'http';

export interface SmsSendPayload {
  telephone: string;
  message: string;
  context: string;
}

/**
 * Service SMS — envoi uniquement (aucune logique OTP).
 * Configuration via variables d'environnement (section SMS du .env).
 */
@Injectable()
export class SmsService {
  private readonly logger = new Logger(SmsService.name);

  constructor(private readonly configService: ConfigService) {}

  async sendOtp(telephone: string, code: string, context: string): Promise<void> {
    const message = `VAYRIX — Votre code de verification est : ${code}. Valide 5 minutes. Ne le partagez pas.`;
    await this.send({ telephone, message, context });
  }

  async send(payload: SmsSendPayload): Promise<void> {
    const provider = this.getProvider();

    switch (provider) {
      case 'http':
        await this.sendViaHttp(payload);
        break;
      case 'mock':
      default:
        this.logger.log(
          `[SMS:MOCK:${payload.context}] → ${payload.telephone} : ${payload.message}`,
        );
        break;
    }
  }

  private getProvider(): SmsProvider {
    return (this.configService.get<string>('sms.provider') ?? 'mock') as SmsProvider;
  }

  /** Envoi via API HTTP REST (compatible Twilio, Orange SMS API, etc.) */
  private async sendViaHttp(payload: SmsSendPayload): Promise<void> {
    const apiUrl = this.configService.getOrThrow<string>('sms.apiUrl');
    const apiKey = this.configService.getOrThrow<string>('sms.apiKey');
    const senderId = this.configService.get<string>('sms.senderId') ?? 'VAYRIX';

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
      this.logger.error(
        `[SMS:HTTP:${payload.context}] Échec ${response.status} → ${payload.telephone} — ${errorText}`,
      );
      throw new Error(`Échec envoi SMS (${response.status})`);
    }

    this.logger.log(`[SMS:HTTP:${payload.context}] Envoyé à ${payload.telephone}`);
  }
}
