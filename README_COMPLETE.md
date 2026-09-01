# VAYRIX API - Documentation Complète

## 📋 Table des Matières

1. [Vue d'ensemble](#vue-densemble)
2. [Architecture Technique](#architecture-technique)
3. [Stack Technologique](#stack-technologique)
4. [Base de Données](#base-de-données)
5. [Modules et API](#modules-et-api)
6. [Workflow Métier](#workflow-métier)
7. [Sécurité](#sécurité)
8. [Installation](#installation)
9. [Configuration](#configuration)
10. [Comptes de Test](#comptes-de-test)

---

## 🎯 Vue d'ensemble

VAYRIX est une API REST pour une application de type Uber (VTC/Taxi) développée avec NestJS 11 et Prisma 7.

**Caractéristiques principales:**
- Authentification JWT avec refresh tokens
- OTP (SMS/Email) pour validation
- Géolocalisation temps réel
- Tarification dynamique
- Partage de courses (covoiturage)
- Sécurité avancée (mode sécurité, enregistrements audio, alertes SOS)
- Évaluation bidirectionnelle
- Notifications push
- Paiements multi-méthodes

---

## 🏗️ Architecture Technique

### Pattern Architectural

```
Controller → Service → Repository → Prisma → PostgreSQL
```

### Structure du Projet

```
src/
├── common/           # Code partagé (guards, interceptors, DTOs)
├── auth/             # Authentification JWT/OTP
├── users/            # Gestion utilisateurs
├── drivers/          # Gestion chauffeurs
├── vehicles/         # Gestion véhicules
├── rides/            # Gestion courses
├── payments/         # Paiements (en attente)
├── notifications/    # Notifications (en attente)
├── sharing/          # Partage courses (en attente)
├── sos/              # Alertes SOS (en attente)
├── uploads/          # Upload fichiers (en attente)
├── realtime/         # WebSocket (en attente)
├── queues/           # BullMQ (en attente)
├── mail/             # Envoi emails
├── sms/              # Envoi SMS
├── otp/              # Gestion OTP
├── prisma/           # Service Prisma
└── config/           # Configuration
```

---

## 💻 Stack Technologique

### Backend

| Composant | Version | Utilisation |
|-----------|---------|-------------|
| NestJS | 11.0.1 | Framework backend |
| Prisma | 7.8.0 | ORM PostgreSQL |
| PostgreSQL | - | Base de données |
| JWT | @nestjs/jwt 11.0.2 | Authentification |
| Bcrypt | 6.0.0 | Hashage mots de passe |
| Nodemailer | 9.0.3 | Envoi emails |
| Socket.IO | 4.8.3 | WebSocket |
| BullMQ | 5.79.2 | Files d'attente |
| Redis | ioredis 5.11.1 | Cache & queues |
| Swagger | @nestjs/swagger 11.4.5 | Documentation API |
| Helmet | 8.2.0 | Sécurité HTTP |
| Throttler | @nestjs/throttler 6.5.0 | Rate limiting |

---

## 🗄️ Base de Données

### Aperçu

- **SGBD:** PostgreSQL
- **Nombre de tables:** 29
- **Convention de nommage:** Français
- **Type d'ID:** BigInt (autoincrement)

### Tables Principales

#### 1. UTILISATEUR (utilisateur)
Table de base pour tous les utilisateurs.
- Champs: id, nom, prenom, telephone, email, motDePasse, photo, langue, derniereConnexion, dateCreation, dateModification, refreshToken
- Relations: Client, Chauffeur, Administrateur, Localisation, ModeSecurite, Notification, AlerteSecurite, JournalAudit

#### 2. CLIENT (client)
Profil client pour les passagers.
- Champs: id, utilisateurId, estEnLigne, statut, dateCreation
- Relations: ContactUrgence, PropositionPrix, DemandePartageCourse, ParticipantCourse, Evaluations

#### 3. CHAUFFEUR (chauffeur)
Profil chauffeur pour les conducteurs.
- Champs: id, utilisateurId, numeroPermis, estEnLigne, solde, statut, motifStatut, dateCreation, dateModification
- Relations: Vehicule, DocumentChauffeur, Course, PropositionPrix, PositionChauffeur, Evaluations

#### 4. COURSE (course)
Table centrale pour les courses. **Note:** Pas de clientId direct, les clients sont liés via ParticipantCourse.
- Champs: id, chauffeurId, vehiculeId, adresseDepart, latitudeDepart, longitudeDepart, adresseArrivee, latitudeArrivee, longitudeArrivee, distance, dureeEstimee, prixInitial, prixNegocie, prixFinal, typeCourse, statut, partageActif, dateCreation, dateAcceptation, dateDebut, dateFin
- Relations: Chauffeur, Vehicule, PropositionPrix, DemandePartageCourse, ValidationPartageCourse, ParticipantCourse, Paiement, EnregistrementAudio, AnalyseSecurite, AlerteSecurite, Evaluations

#### 5. PARTICIPANT_COURSE (participant_course)
Table de liaison entre Course et Client.
- Champs: id, courseId, clientId, adresseDepart, latitudeDepart, longitudeDepart, adresseArrivee, latitudeArrivee, longitudeArrivee, prixInitial, prixFinal, statut, economieClient, role, heureMontee, heureDescente, dateCreation
- Relations: Course, Client, Paiement

#### 6. VEHICULE (vehicule)
Véhicules des chauffeurs.
- Champs: id, chauffeurId, typeVehiculeId, marque, modele, couleur, matricule, annee, statut
- Relations: Chauffeur, TypeVehicule, Course, DocumentVehicule

#### 7. TYPE_VEHICULE (type_vehicule)
Catégories de véhicules avec tarification.
- Champs: id, nom, prixBase, prixParKm
- Relations: Vehicule, Tarification

#### 8. PAIEMENT (paiement)
Historique des paiements.
- Champs: id, courseId, participantCourseId, montant, methode, referenceTransaction, statut, datePaiement
- Relations: Course, ParticipantCourse

#### 9. POSITION_CHAUFFEUR (position_chauffeur)
Historique des positions GPS des chauffeurs.
- Champs: id, chauffeurId, latitude, longitude, vitesse, datePosition
- Relations: Chauffeur

#### 10. NOTIFICATION (notification)
Notifications push pour les utilisateurs.
- Champs: id, utilisateurId, titre, message, type, lu, dateCreation, dateDeLecture
- Relations: Utilisateur

### Tables de Sécurité

#### 11. OTP (otp)
Codes à usage unique pour validation.
- Champs: id, utilisateurId, code, canal, type, expireAt, utilise, tentatives, createdAt

#### 12. MODE_SECURITE (mode_securite)
Mode sécurité pour les utilisateurs vulnérables.
- Champs: id, utilisateurId, actif, dateActivation, dateDesactivation

#### 13. ENREGISTREMENT_AUDIO (enregistrement_audio)
Enregistrements audio pendant les courses.
- Champs: id, courseId, heureDebut, heureFin, urlAudio

#### 14. ANALYSE_SECURITE (analyse_securite)
Analyses de risque des courses.
- Champs: id, courseId, scoreRisque, niveauRisque, resume, dateAnalyse

#### 15. ALERTE_SECURITE (alerte_securite)
Alertes SOS et incidents de sécurité.
- Champs: id, courseId, utilisateurId, typeAlerte, niveauRisque, latitude, longitude, message, statut, dateCreation

### Tables de Partage de Course

#### 16. DEMANDE_PARTAGE_COURSE (demande_partage_course)
Demandes de partage de course.
- Champs: id, courseId, clientDemandeurId, adresseDepart, adresseArrivee, latitudeArrivee, longitudeArrivee, latitudeDepart, longitudeDepart, prixCalcule, statut, dateCreation

#### 17. VALIDATION_PARTAGE_COURSE (validation_partage_course)
Historique des validations de partage.
- Champs: id, demandePartageId, utilisateurId, typeValidateur, decision, commentaire, dateValidation

### Tables d'Évaluation

#### 18. EVALUATION_CHAUFFEUR (evaluation_chauffeur)
Évaluations des chauffeurs par les clients.
- Champs: id, courseId, clientId, chauffeurId, note, commentaire, dateCreation

#### 19. EVALUATION_CLIENT (evaluation_client)
Évaluations des clients par les chauffeurs.
- Champs: id, courseId, chauffeurId, clientId, note, commentaire, dateCreation

### Tables de Tarification

#### 20. TARIFICATION (tarification)
Règles de tarification par type de véhicule.
- Champs: id, typeVehiculeId, prixDepart, prixKm, prixMinimum, commission

#### 21. PROPOSITION_PRIX (proposition_prix)
Propositions de prix pour les courses.
- Champs: id, courseId, clientId, chauffeurId, auteur, prix, statut, dateProposition

### Tables de Documents

#### 22. DOCUMENT_CHAUFFEUR (document_chauffeur)
Documents des chauffeurs (permis, assurance, etc.).
- Champs: id, chauffeurId, typeDocument, urlDocument, statut, dateUpload

#### 23. DOCUMENT_VEHICULE (document_vehicule)
Documents des véhicules (carte grise, contrôle technique).
- Champs: id, vehiculeId, typeDocument, urlDocument, statut, dateUpload

### Tables Auxiliaires

#### 24. ROLE (role)
Rôles utilisateurs (CLIENT, CHAUFFEUR, ADMIN, SUPER_ADMIN).

#### 25. UTILISATEUR_ROLE (utilisateur_role)
Relation many-to-many entre utilisateurs et rôles.

#### 26. CONTACT_URGENCE (contact_urgence)
Contacts d'urgence des clients.

#### 27. LOCALISATION (localisation)
Adresses enregistrées des utilisateurs.

#### 28. ADMINISTRATEUR (administrateur)
Profils administrateurs.

#### 29. JOURNAL_AUDIT (journal_audit)
Journal d'audit pour traçabilité.

---

## 🚀 Modules et API

### Modules Actifs

| Module | Statut | Description |
|--------|--------|-------------|
| Common | ✅ Actif | Guards, interceptors, DTOs, utilitaires |
| Prisma | ✅ Actif | Service Prisma, accès base de données |
| Auth | ✅ Actif | Authentification JWT, OTP, refresh tokens |
| Users | ✅ Actif | Gestion profils utilisateurs |
| Role | ✅ Actif | Gestion des rôles |
| Mail | ✅ Actif | Envoi d'emails (Nodemailer) |
| Otp | ✅ Actif | Génération/vérification OTP |
| Sms | ✅ Actif | Envoi SMS |
| Drivers | ✅ Actif | Gestion chauffeurs |
| Vehicles | ✅ Actif | Gestion véhicules |
| Rides | ✅ Actif | Gestion courses |

### Modules en Attente

| Statut | Module | Description |
|--------|--------|-------------|
| ⏳ | Payments | Intégration paiements (Stripe, Mobile Money) |
| ⏳ | Notifications | Notifications push (Firebase, OneSignal) |
| ⏳ | Uploads | Upload fichiers (AWS S3, Cloudinary) |
| ⏳ | Sos | Alertes SOS et urgence |
| ⏳ | Sharing | Partage de courses (covoiturage) |
| ⏳ | Realtime | WebSocket temps réel (Socket.IO) |
| ⏳ | Queues | Files d'attente (BullMQ, Redis) |

---

## 📡 API Endpoints

### Préfixe API: `/api/v1`

### Auth Module (`/auth`)

| Méthode | Endpoint | Description | Rôles |
|---------|----------|-------------|-------|
| POST | `/auth/signup` | Inscription | Public |
| POST | `/auth/login` | Connexion (email/password) | Public |
| POST | `/auth/login/phone` | Connexion (téléphone/OTP) | Public |
| POST | `/auth/login/email-otp` | Connexion (email/OTP) | Public |
| POST | `/auth/refresh` | Rafraîchir token JWT | Public |
| POST | `/auth/reset-password/phone` | Reset MDP (téléphone) | Public |
| POST | `/auth/reset-password/email` | Reset MDP (email) | Public |
| POST | `/auth/verify-email` | Vérifier email | Public |
| POST | `/auth/logout` | Déconnexion | Authentifié |

### Users Module (`/users`)

| Méthode | Endpoint | Description | Rôles |
|---------|----------|-------------|-------|
| GET | `/users/me` | Mon profil | Authentifié |
| PATCH | `/users/me` | Modifier mon profil | Authentifié |
| POST | `/users/me/password` | Changer mot de passe | Authentifié |
| POST | `/users/me/photo` | Changer photo | Authentifié |

### Drivers Module (`/drivers`)

| Méthode | Endpoint | Description | Rôles |
|---------|----------|-------------|-------|
| GET | `/drivers/me` | Mon profil chauffeur | CHAUFFEUR |
| PATCH | `/drivers/me` | Modifier mon profil | CHAUFFEUR |
| PATCH | `/drivers/me/online` | Modifier statut en ligne | CHAUFFEUR |
| PATCH | `/drivers/me/status` | Modifier statut | CHAUFFEUR, ADMIN |
| POST | `/drivers/me/location` | Mettre à jour position GPS | CHAUFFEUR |
| GET | `/drivers` | Lister tous les chauffeurs | ADMIN |
| GET | `/drivers/:id` | Détail d'un chauffeur | ADMIN |

### Vehicles Module (`/vehicles`)

| Méthode | Endpoint | Description | Rôles |
|---------|----------|-------------|-------|
| POST | `/vehicles` | Créer un véhicule | ADMIN, CHAUFFEUR |
| GET | `/vehicles` | Lister tous les véhicules | ADMIN, CHAUFFEUR |
| GET | `/vehicles/:id` | Détail d'un véhicule | ADMIN, CHAUFFEUR |
| PATCH | `/vehicles/:id/status` | Modifier statut véhicule | ADMIN |
| DELETE | `/vehicles/:id` | Supprimer un véhicule | ADMIN |

### Rides Module (`/rides`)

| Méthode | Endpoint | Description | Rôles |
|---------|----------|-------------|-------|
| GET | `/rides` | Lister toutes les courses | ADMIN, SUPER_ADMIN |
| POST | `/rides/estimate` | Estimer le tarif | CLIENT, ADMIN, SUPER_ADMIN |
| POST | `/rides` | Créer une nouvelle course | CLIENT, SUPER_ADMIN |
| GET | `/rides/me` | Mes courses (client) | CLIENT |
| GET | `/rides/driver` | Mes courses (chauffeur) | CHAUFFEUR |
| GET | `/rides/available-drivers` | Rechercher chauffeurs disponibles | CLIENT, ADMIN |
| GET | `/rides/:id` | Détail d'une course | CLIENT, CHAUFFEUR, ADMIN |
| PATCH | `/rides/:id/accept` | Accepter une course | CHAUFFEUR |
| PATCH | `/rides/:id/start` | Démarrer une course | CHAUFFEUR |
| PATCH | `/rides/:id/complete` | Terminer une course | CHAUFFEUR |
| PATCH | `/rides/:id/cancel` | Annuler une course | CLIENT, CHAUFFEUR |

---

## 🔄 Workflow Métier

### Workflow de Course Standard

1. **Client** demande une course (adresse départ/arrivée)
2. **Système** estime le prix et recherche les chauffeurs disponibles
3. **Client** sélectionne un chauffeur
4. **Course** créée avec statut PENDING
5. **Chauffeur** notifié, accepte ou refuse
6. Si accepté → Course statut ACCEPTED
7. **Chauffeur** démarre la course → statut IN_PROGRESS
8. **Tracking GPS** temps réel pendant la course
9. **Chauffeur** termine la course → statut COMPLETED
10. **Paiement** traité
11. **Évaluation** bidirectionnelle (client ↔ chauffeur)

### Workflow d'Authentification

1. **Utilisateur** s'inscrit (email, téléphone, password)
2. **Système** hash le password (bcrypt) et crée l'utilisateur
3. **OTP** envoyé par SMS/Email pour validation
4. Après validation → **JWT + Refresh Token** générés
5. **Utilisateur** stocke les tokens
6. Chaque requête API inclut le **JWT**
7. **Guard JWT** valide le token
8. Si refresh token expiré → nouveau JWT généré

### Workflow de Partage de Course

1. **Course** créée par Client A
2. **Système** propose le partage
3. **Client B** demande de rejoindre
4. **Validation** par Client A + Chauffeur
5. Si accepté → **ParticipantCourse** créé pour Client B
6. **Prix** recalculé avec économie pour les deux
7. Course partagée avec tracking multi-passagers

---

## 🔒 Sécurité

### Authentification

- **JWT (Access Token):** 15 minutes d'expiration
- **Refresh Token:** 7 jours d'expiration
- **OTP:** 6 chiffres, 5 minutes d'expiration
- **Password Hashing:** Bcrypt avec 12 rounds

### Guards

| Guard | Description |
|-------|-------------|
| JwtAuthGuard | Vérifie le token JWT |
| RolesGuard | Vérifie les rôles utilisateur |
| OtpGuard | Vérifie un OTP valide |
| ThrottlerGuard | Rate limiting (100 req/min) |

### Decorators

| Decorator | Description |
|-----------|-------------|
| @Public() | Rend une route publique (sans auth) |
| @Roles('ADMIN') | Restreint aux rôles spécifiés |
| @CurrentUser() | Injecte l'utilisateur connecté |

### Rate Limiting

- **TTL:** 60 secondes
- **Limit:** 100 requêtes par IP

### Sécurité HTTP

- **Helmet:** Headers de sécurité HTTP
- **CORS:** Origines configurables
- **HSTS:** Désactivé en développement

---

## 📦 Installation

### Prérequis

- Node.js 18+
- PostgreSQL 14+
- Redis 6+ (pour BullMQ)
- npm ou yarn

### Étapes

```bash
# Cloner le repository
git clone <repository-url>
cd Backend cursor

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos configurations

# Générer le client Prisma
npx prisma generate

# Exécuter les migrations
npx prisma migrate dev

# Démarrer en développement
npm run start:dev

# Démarrer en production
npm run build
npm run start
```

---

## ⚙️ Configuration

### Variables d'Environnement

```bash
# Application
NODE_ENV=development
PORT=3000
API_PREFIX=api/v1
FRONTEND_URL=http://localhost:3001

# Base de données
DATABASE_URL="postgresql://user:password@localhost:5432/vayrix_api?schema=public"
DATABASE_POOL_MAX=10

# JWT
JWT_SECRET=votre-secret-jwt
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=votre-secret-refresh
JWT_REFRESH_EXPIRES_IN=7d

# SMTP (Email)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=votre-email@gmail.com
MAIL_PASSWORD=votre-mot-de-passe-app
MAIL_FROM_EMAIL=votre-email@gmail.com
MAIL_FROM_NAME=VAYRIX

# SMS
SMS_PROVIDER=mock
SMS_API_KEY=votre-cle-api
SMS_API_URL=https://api.sms-provider.com

# Redis (pour BullMQ)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Rate limiting
THROTTLE_TTL=60000
THROTTLE_LIMIT=100
```

---

## 🧪 Comptes de Test

### Comptes par défaut

| Rôle | Email | Mot de passe |
|------|-------|--------------|
| Admin | admin@vayrix.com | Password123! |
| Client | client@vayrix.com | Password123! |
| Chauffeur | chauffeur@vayrix.com | Password123! |
| Admin (alternatif) | nengue382@gmail.com | admin123 |

### Accès Swagger

1. Naviguer vers `http://localhost:3000`
2. Cliquer sur "Connexion OTP"
3. Entrer un numéro de téléphone ou email
4. Recevoir l'OTP (en mode dev, vérifier les logs)
5. Entrer l'OTP
6. Accéder à la documentation complète

---

## 📚 Documentation Swagger

La documentation API interactive est disponible via Swagger:

- **URL:** `http://localhost:3000/docs`
- **Authentification:** OTP requis pour accéder aux endpoints protégés
- **Fonctionnalités:**
  - Test des endpoints directement depuis l'interface
  - Documentation des paramètres et réponses
  - Exemples de requêtes/réponses
  - Téléchargement des schémas OpenAPI

---

## 🛠️ Scripts Disponibles

```bash
# Développement
npm run start:dev    # Démarrer avec hot-reload
npm run start        # Démarrer en mode production

# Build
npm run build        # Compiler TypeScript

# Tests
npm run test         # Exécuter les tests unitaires
npm run test:e2e     # Exécuter les tests E2E
npm run test:cov     # Tests avec couverture

# Prisma
npx prisma generate  # Générer le client Prisma
npx prisma migrate dev # Créer une migration
npx prisma studio    # Ouvrir Prisma Studio
npx prisma db push   # Synchroniser le schéma sans migration

# Linting
npm run lint         # Vérifier le code
npm run lint:fix     # Corriger automatiquement
```

---

## 📝 Règles de Développement

### Structure d'un Module

```
module-name/
├── module-name.controller.ts  # Contrôleur (routes)
├── module-name.service.ts     # Service (logique métier)
├── repositories/
│   └── module-name.repository.ts  # Repository (accès données)
├── dto/
│   ├── create.dto.ts          # DTO création
│   ├── update.dto.ts          # DTO mise à jour
│   └── query.dto.ts           # DTO filtres/pagination
├── entities/
│   └── module-name.entity.ts  # Entity de réponse
└── module-name.module.ts      # Module NestJS
```

### Conventions

- **Nommage:** Français pour la base de données, anglais pour le code
- **DTOs:** Validation avec class-validator
- **Réponses:** Format standardisé via ApiResponseInterceptor
- **Erreurs:** Gestion centralisée via GlobalExceptionFilter
- **Logging:** LoggerService pour tous les logs
- **Tests:** Jest pour les tests unitaires

---

## 🚧 Roadmap

### Phase 1 (Actif)
- ✅ Authentification JWT/OTP
- ✅ Gestion utilisateurs
- ✅ Gestion chauffeurs
- ✅ Gestion véhicules
- ✅ Gestion courses de base

### Phase 2 (En cours)
- ⏳ Intégration paiements (Stripe, Mobile Money)
- ⏳ Notifications push (Firebase)
- ⏳ Upload fichiers (AWS S3)
- ⏳ WebSocket temps réel

### Phase 3 (Futur)
- 📋 Algorithme de matching avancé
- 📋 Tarification dynamique (surge pricing)
- 📋 Système de fidélité
- 📋 Analytics et reporting
- 📋 Multi-devise et multi-langue

---

## 📞 Support

Pour toute question ou problème:
- **Email:** support@vayrix.com
- **Documentation:** Voir Swagger `/docs`
- **Issues:** Créer une issue sur le repository

---

## 📄 Licence

Propriétaire: VAYRIX

Dernière mise à jour: Septembre 2026
