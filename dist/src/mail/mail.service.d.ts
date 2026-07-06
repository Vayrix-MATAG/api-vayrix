import { ConfigService } from '@nestjs/config';
export declare class MailService {
    private readonly configService;
    private readonly logger;
    private transporter;
    constructor(configService: ConfigService);
    isConfigured(): boolean;
    private getTransporter;
    private getFromAddress;
    private getLogoUrl;
    sendOtpEmail(to: string, prenom: string, code: string, purpose?: string): Promise<void>;
    sendWelcomeEmail(to: string, prenom: string, nom: string, loginUrl?: string): Promise<void>;
    sendResetPasswordEmail(to: string, prenom: string, code: string): Promise<void>;
    sendNotificationEmail(to: string, prenom: string, subject: string, message: string): Promise<void>;
    private sendMail;
}
