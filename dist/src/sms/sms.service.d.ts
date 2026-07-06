import { ConfigService } from '@nestjs/config';
export type SmsProvider = 'mock' | 'http';
export interface SmsSendPayload {
    telephone: string;
    message: string;
    context: string;
}
export declare class SmsService {
    private readonly configService;
    private readonly logger;
    constructor(configService: ConfigService);
    sendOtp(telephone: string, code: string, context: string): Promise<void>;
    send(payload: SmsSendPayload): Promise<void>;
    private getProvider;
    private sendViaHttp;
}
