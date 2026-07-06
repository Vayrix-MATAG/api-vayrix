import { DocumentBuilder } from '@nestjs/swagger';

export function buildSwaggerDocument() {
  return new DocumentBuilder()
    .setTitle('VAYRIX API')
    .setDescription(
      `Backend professionnel de transport **VAYRIX**.

## Authentification

Tous les endpoints protégés requièrent un header \`Authorization: Bearer <accessToken>\`.

### Modes de connexion disponibles

| Mode | Endpoints |
|------|-----------|
| Mot de passe | \`POST /auth/login\` (email, téléphone ou login + password) |
| OTP SMS | \`POST /auth/send-phone-otp\` → \`POST /auth/verify-phone-otp\` |
| OTP Email | \`POST /auth/send-email-otp\` → \`POST /auth/verify-email-otp\` |
| Reset MDP SMS | \`POST /auth/forgot-password\` → \`POST /auth/reset-password\` |
| Reset MDP Email | \`POST /auth/forgot-password-email\` → \`POST /auth/reset-password-email\` |

### Accès à la documentation Swagger

La documentation est protégée : ouvrez \`http://localhost:<PORT>\` — connexion par **email + code OTP**, puis accès automatique à \`/docs\` si vous êtes déjà connecté.

### Format de réponse

Toutes les réponses sont enveloppées :
\`\`\`json
{ "success": true, "message": "Succès", "data": { ... }, "timestamp": "..." }
\`\`\`
`,
    )
    .setVersion('1.0.0')
    .setContact('VAYRIX', 'https://vayrix.com', 'support@vayrix.com')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Access token JWT obtenu via login, signup ou OTP',
      },
      'JWT',
    )
    .addTag('Health', 'Santé de l\'API')
    .addTag('Auth', 'Inscription, connexion, OTP, session JWT')
    .addTag('Users', 'Gestion du profil utilisateur')
    .build();
}
