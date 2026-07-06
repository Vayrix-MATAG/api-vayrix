export interface MailTemplateOptions {
    title: string;
    prenom: string;
    content: string;
    ctaLabel?: string;
    ctaUrl?: string;
    code?: string;
    logoUrl?: string;
}
export declare function buildMailLayout(options: MailTemplateOptions): string;
export declare function buildOtpEmailHtml(prenom: string, code: string, purpose: string, logoUrl?: string): string;
export declare function buildWelcomeEmailHtml(prenom: string, nom: string, loginUrl: string, logoUrl?: string): string;
export declare function buildResetPasswordEmailHtml(prenom: string, code: string, logoUrl?: string): string;
export declare function buildNotificationEmailHtml(prenom: string, subject: string, message: string, logoUrl?: string): string;
