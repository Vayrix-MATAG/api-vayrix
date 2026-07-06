import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import {
  buildNotificationEmailHtml,
  buildOtpEmailHtml,
  buildResetPasswordEmailHtml,
  buildWelcomeEmailHtml,
} from './templates/mail.templates';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private transporter: Transporter | null = null;

  constructor(private readonly configService: ConfigService) {}

  /** Vérifie que toutes les variables SMTP requises sont présentes */
  isConfigured(): boolean {
    return Boolean(
      this.configService.get<string>('mail.host') &&
        this.configService.get<string>('mail.user') &&
        this.configService.get<string>('mail.password') &&
        this.configService.get<string>('mail.fromEmail'),
    );
  }

  private getTransporter(): Transporter {
    if (!this.isConfigured()) {
      throw new ServiceUnavailableException(
        'Service email non configuré. Définissez MAIL_HOST, MAIL_USER, MAIL_PASSWORD et MAIL_FROM_EMAIL dans .env',
      );
    }

    if (!this.transporter) {
      this.transporter = nodemailer.createTransport({
        host: this.configService.getOrThrow<string>('mail.host'),
        port: this.configService.get<number>('mail.port') ?? 587,
        secure: this.configService.get<boolean>('mail.secure') ?? false,
        auth: {
          user: this.configService.getOrThrow<string>('mail.user'),
          pass: this.configService.getOrThrow<string>('mail.password'),
        },
      });
    }

    return this.transporter;
  }

  private getFromAddress(): string {
    const name = this.configService.get<string>('mail.fromName') ?? 'VAYRIX';
    const email = this.configService.getOrThrow<string>('mail.fromEmail');
    return `"${name}" <${email}>`;
  }

  private getLogoUrl(): string | undefined {
    return this.configService.get<string>('mail.logoUrl') || undefined;
  }

  async sendOtpEmail(
    to: string,
    prenom: string,
    code: string,
    purpose = 'connexion',
  ): Promise<void> {
    const html = buildOtpEmailHtml(prenom, code, purpose, this.getLogoUrl());
    await this.sendMail(to, 'VAYRIX — Code de vérification', html, code);
  }

  async sendWelcomeEmail(
    to: string,
    prenom: string,
    nom: string,
    loginUrl?: string,
  ): Promise<void> {
    const url =
      loginUrl ??
      `${this.configService.get<string>('app.frontendUrl') ?? 'http://localhost:3000'}/login`;
    const html = buildWelcomeEmailHtml(prenom, nom, url, this.getLogoUrl());
    await this.sendMail(to, 'Bienvenue chez VAYRIX !', html);
  }

  async sendResetPasswordEmail(
    to: string,
    prenom: string,
    code: string,
  ): Promise<void> {
    const html = buildResetPasswordEmailHtml(prenom, code, this.getLogoUrl());
    await this.sendMail(to, 'VAYRIX — Réinitialisation de mot de passe', html, code);
  }

  async sendNotificationEmail(
    to: string,
    prenom: string,
    subject: string,
    message: string,
  ): Promise<void> {
    const html = buildNotificationEmailHtml(prenom, subject, message, this.getLogoUrl());
    await this.sendMail(to, subject, html);
  }

  private async sendMail(
    to: string,
    subject: string,
    html: string,
    devCode?: string,
  ): Promise<void> {
    if (!this.isConfigured()) {
      if (devCode && this.configService.get<string>('nodeEnv') === 'development') {
        this.logger.warn(
          `[MAIL:DEV] SMTP non configuré — code pour ${to} : ${devCode}`,
        );
      }
      throw new ServiceUnavailableException(
        'Service email non configuré. Ajoutez MAIL_HOST, MAIL_USER, MAIL_PASSWORD et MAIL_FROM_EMAIL dans votre fichier .env puis redémarrez le serveur.',
      );
    }

    try {
      const info = await this.getTransporter().sendMail({
        from: this.getFromAddress(),
        to,
        subject,
        html,
      });
      this.logger.log(`Email envoyé à ${to} — messageId: ${info.messageId}`);
    } catch (error) {
      this.logger.error(`Échec envoi email à ${to}`, error);
      throw new ServiceUnavailableException(
        `Impossible d'envoyer l'email. Vérifiez vos identifiants SMTP (Gmail : utilisez un mot de passe d'application). Détail : ${error instanceof Error ? error.message : 'erreur inconnue'}`,
      );
    }
  }
}
