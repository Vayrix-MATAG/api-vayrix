"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMailLayout = buildMailLayout;
exports.buildOtpEmailHtml = buildOtpEmailHtml;
exports.buildWelcomeEmailHtml = buildWelcomeEmailHtml;
exports.buildResetPasswordEmailHtml = buildResetPasswordEmailHtml;
exports.buildNotificationEmailHtml = buildNotificationEmailHtml;
const BRAND_COLOR = '#FF7A00';
function buildMailLayout(options) {
    const logoBlock = options.logoUrl
        ? `<img src="${options.logoUrl}" alt="VAYRIX" width="120" style="display:block;margin:0 auto 24px;" />`
        : `<div style="text-align:center;margin-bottom:24px;">
         <span style="font-size:28px;font-weight:800;color:${BRAND_COLOR};letter-spacing:2px;">VAYRIX</span>
       </div>`;
    const codeBlock = options.code
        ? `<div style="text-align:center;margin:32px 0;">
         <span style="display:inline-block;font-size:36px;font-weight:700;letter-spacing:8px;
           color:#000000;background:#F5F5F5;padding:16px 32px;border-radius:8px;
           border:2px dashed ${BRAND_COLOR};">${options.code}</span>
       </div>`
        : '';
    const ctaBlock = options.ctaLabel && options.ctaUrl
        ? `<div style="text-align:center;margin:32px 0;">
           <a href="${options.ctaUrl}" style="display:inline-block;background:${BRAND_COLOR};
             color:#FFFFFF;text-decoration:none;padding:14px 36px;border-radius:6px;
             font-weight:600;font-size:16px;">${options.ctaLabel}</a>
         </div>`
        : '';
    return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${options.title}</title>
</head>
<body style="margin:0;padding:0;background:#F0F0F0;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F0F0F0;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0"
          style="background:#FFFFFF;border-radius:12px;overflow:hidden;max-width:600px;width:100%;
          box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#000000;padding:32px 40px;text-align:center;">
              ${logoBlock}
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <h1 style="margin:0 0 8px;font-size:24px;color:#000000;font-weight:700;">
                ${options.title}
              </h1>
              <p style="margin:0 0 24px;font-size:16px;color:#555555;">
                Bonjour <strong>${options.prenom}</strong>,
              </p>
              <div style="font-size:15px;color:#333333;line-height:1.7;">
                ${options.content}
              </div>
              ${codeBlock}
              ${ctaBlock}
            </td>
          </tr>
          <tr>
            <td style="background:#F9F9F9;padding:24px 40px;text-align:center;
              border-top:1px solid #EEEEEE;">
              <p style="margin:0;font-size:12px;color:#999999;">
                &copy; ${new Date().getFullYear()} VAYRIX &mdash; Transport intelligent
              </p>
              <p style="margin:8px 0 0;font-size:11px;color:#BBBBBB;">
                Cet email a été envoyé automatiquement, merci de ne pas y répondre.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
function buildOtpEmailHtml(prenom, code, purpose, logoUrl) {
    return buildMailLayout({
        title: 'Votre code de vérification',
        prenom,
        logoUrl,
        code,
        content: `<p>Vous avez demandé un code de vérification pour <strong>${purpose}</strong>.</p>
      <p>Utilisez le code ci-dessous. Il expire dans <strong>5 minutes</strong>.</p>
      <p style="color:#999;font-size:13px;">Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.</p>`,
    });
}
function buildWelcomeEmailHtml(prenom, nom, loginUrl, logoUrl) {
    return buildMailLayout({
        title: 'Bienvenue chez VAYRIX !',
        prenom,
        logoUrl,
        ctaLabel: 'Se connecter',
        ctaUrl: loginUrl,
        content: `<p>Nous sommes ravis de vous accueillir, <strong>${prenom} ${nom}</strong> !</p>
      <p>Votre compte VAYRIX a été créé avec succès. Vous pouvez dès maintenant commander
      vos courses en toute simplicité.</p>
      <p>Cliquez sur le bouton ci-dessous pour accéder à votre espace.</p>`,
    });
}
function buildResetPasswordEmailHtml(prenom, code, logoUrl) {
    return buildMailLayout({
        title: 'Réinitialisation de mot de passe',
        prenom,
        logoUrl,
        code,
        content: `<p>Vous avez demandé la réinitialisation de votre mot de passe VAYRIX.</p>
      <p>Utilisez le code ci-dessous pour procéder. Il expire dans <strong>5 minutes</strong>.</p>
      <p style="color:#999;font-size:13px;">Si vous n'avez pas fait cette demande, ignorez cet email.</p>`,
    });
}
function buildNotificationEmailHtml(prenom, subject, message, logoUrl) {
    return buildMailLayout({
        title: subject,
        prenom,
        logoUrl,
        content: `<p>${message}</p>`,
    });
}
//# sourceMappingURL=mail.templates.js.map