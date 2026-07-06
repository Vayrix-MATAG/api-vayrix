# VAYRIX API — Backend

Backend NestJS 11 pour la plateforme de transport **VAYRIX** (type Uber).

- **Stack** : NestJS, Prisma 7, PostgreSQL, JWT, Redis, Nodemailer, Swagger
- **Documentation API** : `http://localhost:3000/docs` (après démarrage)

---

## Prérequis

- Node.js 22+
- PostgreSQL 16+
- Redis 7+ (optionnel, modules files d'attente)
- npm

---

## Installation locale

```bash
npm install
```

Configurez **uniquement** le fichier `.env` à la racine du projet (toutes les variables y sont listées).

### Base de données

```bash
npx prisma migrate dev
npm run prisma:seed
npx prisma generate
```

### Démarrage

```bash
# Développement (watch)
npm run start:dev

# Production
npm run build
npm run start:prod
```

L'API est disponible sur `http://localhost:3000/api/v1`.

---

## Variables d'environnement

**Fichier unique : `.env`** — toute la configuration de l'application passe par ce fichier.  
`src/config/configuration.ts` lit exclusivement `process.env` (chargé depuis `.env` via NestJS ConfigModule).

> `.env.example` est un modèle Git sans secrets, **non lu par l'application**. Ne configurez que `.env`.

Résumé des sections :

### Application

| Variable | Description | Défaut |
|----------|-------------|--------|
| `NODE_ENV` | Environnement | `development` |
| `PORT` | Port HTTP | `3000` |
| `API_PREFIX` | Préfixe des routes | `api/v1` |
| `FRONTEND_URL` | URL frontend (liens emails) | `http://localhost:3000` |

### Base de données

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | URL PostgreSQL Prisma |

### JWT

| Variable | Description |
|----------|-------------|
| `JWT_SECRET` | Clé secrète access token |
| `JWT_REFRESH_SECRET` | Clé secrète refresh token |
| `JWT_EXPIRES_IN` | Durée access token (`15m`) |
| `JWT_REFRESH_EXPIRES_IN` | Durée refresh token (`7d`) |

### Email (SMTP — Nodemailer)

Configuration dans `src/config/configuration.ts` → section `mail`.  
Service : `src/mail/mail.service.ts`.

| Variable | Description | Exemple |
|----------|-------------|---------|
| `MAIL_HOST` | Serveur SMTP | `smtp.gmail.com` |
| `MAIL_PORT` | Port SMTP | `587` |
| `MAIL_SECURE` | TLS direct (`true`/`false`) | `false` |
| `MAIL_USER` | Utilisateur SMTP | `votre@email.com` |
| `MAIL_PASSWORD` | Mot de passe application | *(secret)* |
| `MAIL_FROM_EMAIL` | Expéditeur | `noreply@vayrix.com` |
| `MAIL_FROM_NAME` | Nom expéditeur | `VAYRIX` |
| `MAIL_LOGO_URL` | URL logo emails (optionnel) | `https://…/logo.png` |

> **Gmail :** utilisez un [mot de passe d'application](https://myaccount.google.com/apppasswords), pas le mot de passe du compte.

### SMS

Configuration dans `src/config/configuration.ts` → section `sms`.  
Service : `src/sms/sms.service.ts` (envoi uniquement, pas de logique OTP).

| Variable | Description | Défaut |
|----------|-------------|--------|
| `SMS_PROVIDER` | `mock` (dev, log console) ou `http` (API REST prod) | `mock` |
| `SMS_API_URL` | URL endpoint envoi SMS | — |
| `SMS_API_KEY` | Clé API / Bearer token | — |
| `SMS_API_SECRET` | Secret complémentaire (optionnel) | — |
| `SMS_SENDER_ID` | Identifiant expéditeur | `VAYRIX` |

En **développement** (`SMS_PROVIDER=mock`), les codes OTP SMS s'affichent dans les logs du serveur.

En **production** (`SMS_PROVIDER=http`), le service envoie une requête `POST` JSON vers `SMS_API_URL` avec les headers `Authorization: Bearer {SMS_API_KEY}`.

### OTP

Configuration dans `src/config/configuration.ts` → section `otp`.  
Logique métier : `src/otp/otp.service.ts` (table Prisma `otp`).

| Variable | Description | Défaut |
|----------|-------------|--------|
| `OTP_EXPIRY_MINUTES` | Expiration code | `5` |
| `OTP_RESEND_COOLDOWN_SECONDS` | Délai entre 2 envois | `60` |
| `OTP_MAX_ATTEMPTS` | Tentatives max | `5` |

---

## Authentification — Endpoints

| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/auth/signup` | Inscription |
| POST | `/auth/login` | Connexion email/téléphone + mot de passe |
| POST | `/auth/send-phone-otp` | OTP SMS connexion |
| POST | `/auth/verify-phone-otp` | Vérification OTP SMS |
| POST | `/auth/send-email-otp` | OTP email connexion |
| POST | `/auth/verify-email-otp` | Vérification OTP email |
| POST | `/auth/login/otp/request` | *(legacy)* OTP SMS |
| POST | `/auth/login/otp/verify` | *(legacy)* Vérification OTP SMS |
| POST | `/auth/forgot-password` | Reset MDP via SMS |
| POST | `/auth/reset-password` | Confirmer reset SMS |
| POST | `/auth/forgot-password-email` | Reset MDP via email |
| POST | `/auth/verify-forgot-password-email` | Vérifier OTP reset email |
| POST | `/auth/reset-password-email` | Confirmer reset email |
| POST | `/auth/refresh` | Rafraîchir JWT |
| POST | `/auth/logout` | Déconnexion |
| GET | `/auth/profile` | Profil connecté |

Comptes seed : `client@vayrix.com` / `Password123!`

---

## Scripts utiles

```bash
npm run build              # Compiler
npm run start:dev          # Dev watch
npm run prisma:migrate     # Migration dev
npm run prisma:seed        # Peupler la BD
npm run prisma:studio      # Interface Prisma
npx prisma migrate reset --force   # Réinitialiser la BD (destructif)
```

---

## Déploiement Docker Swarm

Fichiers :

| Fichier | Rôle |
|---------|------|
| `Dockerfile` | Image multi-étapes Node 22 Alpine |
| `docker-stack.yml` | Stack Swarm (API + PostgreSQL + Redis) |
| `docker/entrypoint.sh` | Migrations Prisma + démarrage |
| `docker/swarm.env.example` | Modèle Git pour le déploiement Swarm uniquement (pas pour le dev local) |

### 1. Initialiser Swarm (manager)

```bash
docker swarm init
docker network create --driver overlay vayrix-net
```

### 2. Créer les secrets

```bash
echo "votre-jwt-secret"     | docker secret create vayrix_jwt_secret -
echo "votre-refresh-secret"  | docker secret create vayrix_jwt_refresh_secret -
echo "mot-de-passe-postgres" | docker secret create vayrix_db_password -
echo "mot-de-passe-smtp"     | docker secret create vayrix_mail_password -
echo "cle-api-sms"           | docker secret create vayrix_sms_api_key -
```

### 3. Builder l'image

```bash
docker build -t vayrix-api:latest .
```

### 4. Déployer la stack

En production Swarm, les secrets sensibles passent par `docker secret` (voir étape 2).  
Les variables non secrètes peuvent être exportées depuis un fichier `docker/swarm.env` local (non versionné) :

```bash
cp docker/swarm.env.example docker/swarm.env
# Éditer docker/swarm.env (MAIL_USER, SMS_API_URL, CORS…)

export $(grep -v '^#' docker/swarm.env | xargs)
docker stack deploy -c docker-stack.yml vayrix
```

> Le développement local utilise **uniquement** `.env` à la racine du projet.

### 5. Vérifier

```bash
docker stack services vayrix
docker service logs vayrix_api -f
curl http://localhost:3000/api/v1/health
```

### Mise à jour

```bash
docker build -t vayrix-api:latest .
docker service update --force vayrix_api
```

### Supprimer la stack

```bash
docker stack rm vayrix
```

---

## Structure des modules

```
src/
├── auth/          # Authentification (JWT, signup, login)
├── users/         # Profil utilisateur
├── otp/           # Logique OTP centralisée (table otp)
├── mail/          # Envoi emails HTML (Nodemailer)
├── sms/           # Envoi SMS (mock ou HTTP)
├── prisma/        # PrismaService
└── config/        # configuration.ts (ConfigModule)
```

## Swagger

Documentation interactive : **`http://localhost:3000/docs`**

### Maintenir Swagger à jour

Lors de l'ajout ou la modification d'un endpoint :

1. Annoter le controller avec `@ApiTags`, `@ApiOperation`, `@ApiBody`, `@ApiBearerAuth('JWT')`
2. Utiliser les helpers de `src/common/swagger/swagger.helpers.ts` :
   - `@ApiWrappedOkResponse(Entity)` — réponse enveloppée `{ success, data, ... }`
   - `@ApiWrappedCreatedResponse(Entity)` — réponse 201
   - `@ApiPublicErrors()` — endpoints publics
   - `@ApiProtectedErrors()` — endpoints JWT
3. Ajouter `@ApiProperty` sur chaque champ des DTO et entités

---

Projet privé — VAYRIX.
#   a p i - v a y r i x  
 