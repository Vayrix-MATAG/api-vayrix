# Conception de la Base de Données VAYRIX

## 📊 Vue d'ensemble

**SGBD:** PostgreSQL  
**Nombre de tables:** 29  
**Convention de nommage:** Français  
**Type d'ID:** BigInt (autoincrement)  
**Relations:** Cascade, SetNull, Restrict

---

## 🏗️ Architecture Conceptuelle

### Domaines Fonctionnels

La base de données est organisée en **6 domaines fonctionnels**:

```
┌─────────────────────────────────────────────────────────────────┐
│                    1. IDENTITÉ & AUTHENTIFICATION              │
├─────────────────────────────────────────────────────────────────┤
│ • Utilisateur (table centrale)                                  │
│ • Role, UtilisateurRole (gestion des rôles)                      │
│ • Otp (validation 2FA)                                           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    2. PROFILS UTILISATEURS                       │
├─────────────────────────────────────────────────────────────────┤
│ • Client (profil passager)                                       │
│ • Chauffeur (profil conducteur)                                 │
│ • Administrateur (profil admin)                                  │
│ • ContactUrgence (contacts d'urgence)                           │
│ • Localisation (adresses enregistrées)                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    3. COURSES & TRANSPORT                        │
├─────────────────────────────────────────────────────────────────┤
│ • Course (table centrale des courses)                           │
│ • ParticipantCourse (participants à une course)                  │
│ • Vehicule (véhicules des chauffeurs)                           │
│ • TypeVehicule (catégories de véhicules)                        │
│ • PositionChauffeur (tracking GPS)                              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    4. TARIFICATION & PAIEMENTS                   │
├─────────────────────────────────────────────────────────────────┤
│ • Tarification (règles de prix)                                 │
│ • PropositionPrix (négociation de prix)                         │
│ • Paiement (historique des paiements)                           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    5. SÉCURITÉ & SURVEILLANCE                   │
├─────────────────────────────────────────────────────────────────┤
│ • ModeSecurite (mode protection utilisateurs)                    │
│ • EnregistrementAudio (enregistrements courses)                │
│ • TranscriptionAudio (transcriptions IA)                        │
│ • AnalyseSecurite (analyse de risque)                           │
│ • AlerteSecurite (alertes SOS)                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    6. PARTAGE & ÉVALUATION                      │
├─────────────────────────────────────────────────────────────────┤
│ • DemandePartageCourse (demandes covoiturage)                   │
│ • ValidationPartageCourse (validations partage)                 │
│ • EvaluationChauffeur (évaluations par clients)                   │
│ • EvaluationClient (évaluations par chauffeurs)                 │
│ • Notification (notifications push)                              │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Relations Clés

### Relation Centrale: UTILISATEUR

```
                    UTILISATEUR
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────▼────┐    ┌────▼────┐    ┌────▼────┐
    │ CLIENT  │    │CHAUFFEUR│    │  ADMIN  │
    └─────────┘    └─────────┘    └─────────┘
```

**Pattern:** Un utilisateur peut avoir un seul profil (Client OU Chauffeur OU Administrateur) via une relation 1:1 optionnelle.

### Relation Centrale: COURSE

```
                    COURSE
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────▼────┐    ┌────▼────┐    ┌────▼────┐
    │CHAUFFEUR │    │VEHICULE │    │PARTICI- │
    │(option)  │    │(option) │    │PANT    │
    └─────────┘    └─────────┘    └─────────┘
```

**Pattern:** Une course peut avoir un chauffeur et un véhicule (optionnels), et plusieurs participants via ParticipantCourse.

**⚠️ Point Important:** La table COURSE n'a PAS de `client_id` direct. Les clients sont liés via la table `ParticipantCourse`. Cela permet:
- Le partage de courses (covoiturage)
- La gestion multi-passagers
- La traçabilité individuelle de chaque participant

---

## 📋 Tables par Domaine

### 1. IDENTITÉ & AUTHENTIFICATION (3 tables)

| Table | Rôle | Clé étrangère |
|-------|------|---------------|
| **Utilisateur** | Table centrale identité | - |
| **Role** | Définition des rôles | - |
| **UtilisateurRole** | Relation many-to-many | utilisateurId, roleId |
| **Otp** | Codes OTP pour validation | utilisateurId |

**Relations:**
- `Utilisateur` → `UtilisateurRole[]` (1:N)
- `Role` → `UtilisateurRole[]` (1:N)
- `Utilisateur` → `Otp[]` (1:N)

---

### 2. PROFILS UTILISATEURS (6 tables)

| Table | Rôle | Clé étrangère |
|-------|------|---------------|
| **Client** | Profil passager | utilisateurId |
| **Chauffeur** | Profil conducteur | utilisateurId |
| **Administrateur** | Profil admin | utilisateurId |
| **ContactUrgence** | Contacts d'urgence | utilisateurId |
| **Localisation** | Adresses enregistrées | utilisateurId |
| **ModeSecurite** | Mode protection | utilisateurId |

**Relations:**
- `Utilisateur` → `Client?` (1:1 optionnel)
- `Utilisateur` → `Chauffeur?` (1:1 optionnel)
- `Utilisateur` → `Administrateur?` (1:1 optionnel)
- `Client` → `ContactUrgence[]` (1:N)
- `Utilisateur` → `Localisation[]` (1:N)
- `Utilisateur` → `ModeSecurite?` (1:1 optionnel)

**Documents:**
- `DocumentChauffeur` → `Chauffeur` (1:N)
- `DocumentVehicule` → `Vehicule` (1:N)

---

### 3. COURSES & TRANSPORT (5 tables)

| Table | Rôle | Clé étrangère |
|-------|------|---------------|
| **Course** | Table centrale courses | chauffeurId?, vehiculeId? |
| **ParticipantCourse** | Participants à une course | courseId, clientId |
| **Vehicule** | Véhicules chauffeurs | chauffeurId, typeVehiculeId |
| **TypeVehicule** | Catégories véhicules | - |
| **PositionChauffeur** | Tracking GPS | chauffeurId |

**Relations:**
- `Course` → `Chauffeur?` (N:1 optionnel)
- `Course` → `Vehicule?` (N:1 optionnel)
- `Course` → `ParticipantCourse[]` (1:N)
- `Chauffeur` → `Vehicule[]` (1:N)
- `Vehicule` → `TypeVehicule` (N:1)
- `Chauffeur` → `PositionChauffeur[]` (1:N)

**Flux de données:**
```
Chauffeur → Vehicule → Course ← ParticipantCourse ← Client
```

---

### 4. TARIFICATION & PAIEMENTS (3 tables)

| Table | Rôle | Clé étrangère |
|-------|------|---------------|
| **Tarification** | Règles de prix | typeVehiculeId |
| **PropositionPrix** | Négociation prix | courseId, clientId, chauffeurId |
| **Paiement** | Historique paiements | courseId, participantCourseId |

**Relations:**
- `TypeVehicule` → `Tarification[]` (1:N)
- `Course` → `PropositionPrix[]` (1:N)
- `Course` → `Paiement[]` (1:N)
- `ParticipantCourse` → `Paiement[]` (1:N)

**Flux de tarification:**
```
TypeVehicule → Tarification → (calcul prix) → Course
Course → PropositionPrix (négociation) → Paiement
```

---

### 5. SÉCURITÉ & SURVEILLANCE (5 tables)

| Table | Rôle | Clé étrangère |
|-------|------|---------------|
| **ModeSecurite** | Mode protection | utilisateurId |
| **EnregistrementAudio** | Enregistrements courses | courseId |
| **TranscriptionAudio** | Transcriptions IA | enregistrementId |
| **AnalyseSecurite** | Analyse de risque | courseId |
| **AlerteSecurite** | Alertes SOS | courseId, utilisateurId |

**Relations:**
- `Utilisateur` → `ModeSecurite?` (1:1)
- `Course` → `EnregistrementAudio[]` (1:N)
- `EnregistrementAudio` → `TranscriptionAudio[]` (1:N)
- `Course` → `AnalyseSecurite[]` (1:N)
- `Course` → `AlerteSecurite[]` (1:N)
- `Utilisateur` → `AlerteSecurite[]` (1:N)

**Flux de sécurité:**
```
Course → EnregistrementAudio → TranscriptionAudio
Course → AnalyseSecurite
Course + Utilisateur → AlerteSecurite
```

---

### 6. PARTAGE & ÉVALUATION (5 tables)

| Table | Rôle | Clé étrangère |
|-------|------|---------------|
| **DemandePartageCourse** | Demandes covoiturage | courseId, clientDemandeurId |
| **ValidationPartageCourse** | Validations partage | demandePartageId, utilisateurId |
| **EvaluationChauffeur** | Évaluations par clients | courseId, clientId, chauffeurId |
| **EvaluationClient** | Évaluations par chauffeurs | courseId, chauffeurId, clientId |
| **Notification** | Notifications push | utilisateurId |

**Relations:**
- `Course` → `DemandePartageCourse[]` (1:N)
- `DemandePartageCourse` → `ValidationPartageCourse[]` (1:N)
- `Course` → `EvaluationChauffeur[]` (1:N)
- `Course` → `EvaluationClient[]` (1:N)
- `Utilisateur` → `Notification[]` (1:N)

**Flux de partage:**
```
Course → DemandePartageCourse → ValidationPartageCourse → ParticipantCourse
```

---

## 🎯 Points Clés de la Conception

### 1. Séparation Identité vs Profil

**Avantages:**
- Flexibilité: Un utilisateur peut changer de rôle
- Sécurité: Les données d'authentification sont séparées des données métier
- Scalabilité: Facile d'ajouter de nouveaux types de profils

**Implémentation:**
```
Utilisateur (authentification)
    ├─ Client (profil passager)
    ├─ Chauffeur (profil conducteur)
    └─ Administrateur (profil admin)
```

### 2. Course sans clientId direct

**Pourquoi?**
- Permet le partage de courses (covoiturage)
- Gère les courses multi-passagers
- Traçabilité individuelle de chaque participant

**Implémentation:**
```
Course (table centrale)
    └─ ParticipantCourse (table de liaison)
        └─ Client (profil passager)
```

### 3. Relations Optionnelles

**Tables avec FK optionnelles:**
- `Course.chauffeurId` (nullable) - Course sans chauffeur assigné
- `Course.vehiculeId` (nullable) - Course sans véhicule assigné
- `Course.adresseDepart` (nullable) - Course sans adresse précisée
- `ParticipantCourse.prixFinal` (nullable) - Prix final pas encore calculé

**Avantages:**
- Flexibilité dans le workflow de course
- Supporte les états intermédiaires (PENDING, ACCEPTED, etc.)

### 4. Cascade vs Restrict vs SetNull

**Cascade:** Suppression en cascade
- `Utilisateur` → `Client`, `Chauffeur`, `Administrateur`
- `Course` → `ParticipantCourse`, `Paiement`, `EnregistrementAudio`
- `Chauffeur` → `Vehicule`, `DocumentChauffeur`

**Restrict:** Empêche la suppression
- `Vehicule.typeVehiculeId` - Ne peut pas supprimer un type de véhicule utilisé
- `Paiement.participantCourseId` - Ne peut pas supprimer un participant payé

**SetNull:** Met à null
- `Course.chauffeurId` - Si chauffeur supprimé, course garde chauffeurId null
- `Course.vehiculeId` - Si véhicule supprimé, course garde vehiculeId null

### 5. Indexes Stratégiques

**Indexes sur les clés étrangères:**
- Tous les `utilisateurId`, `courseId`, `chauffeurId`, `clientId`
- Optimise les jointures fréquentes

**Indexes composites:**
- `Localisation: [latitude, longitude]` - Recherche géospatiale
- `PositionChauffeur: [latitude, longitude]` - Recherche chauffeurs proches
- `UtilisateurRole: [utilisateurId, roleId]` (unique) - Évite les doublons

**Indexes sur les statuts:**
- `Client.statut`, `Chauffeur.statut`, `Course.statut`
- Optimise les filtres par statut

---

## 🔄 Flux de Données Principaux

### Flux de Course Complet

```
1. Client crée une demande de course
   └─→ Course (statut: PENDING)

2. Système recherche chauffeurs disponibles
   └─→ PositionChauffeur (recherche géospatiale)

3. Chauffeur accepte la course
   └─→ Course.chauffeurId (statut: ACCEPTED)
   └─→ Course.vehiculeId

4. Ajout participant (client principal)
   └─→ ParticipantCourse (role: PRINCIPAL)

5. Course démarre
   └─→ Course.dateDebut (statut: IN_PROGRESS)
   └─→ EnregistrementAudio (début enregistrement)

6. Tracking GPS temps réel
   └─→ PositionChauffeur (mises à jour continues)

7. Course terminée
   └─→ Course.dateFin (statut: COMPLETED)
   └─→ EnregistrementAudio.heureFin

8. Paiement traité
   └─→ Paiement (statut: SUCCESS)

9. Évaluation bidirectionnelle
   └─→ EvaluationChauffeur (client → chauffeur)
   └─→ EvaluationClient (chauffeur → client)

10. Analyse de sécurité
    └─→ AnalyseSecurite (score risque)
```

### Flux de Partage de Course

```
1. Course créée par Client A
   └─→ Course (partageActif: true)

2. Client B demande de rejoindre
   └─→ DemandePartageCourse (statut: EN_ATTENTE)

3. Validation par Client A
   └─→ ValidationPartageCourse (typeValidateur: CLIENT_PRINCIPAL)

4. Validation par Chauffeur
   └─→ ValidationPartageCourse (typeValidateur: CHAUFFEUR)

5. Si toutes validations acceptées
   └─→ ParticipantCourse (role: PARTAGE, client: Client B)
   └─→ Course (recalcul prix avec économie)
```

---

## 📊 Statistiques de la Base de Données

| Métrique | Valeur |
|----------|--------|
| **Tables totales** | 29 |
| **Relations 1:1** | 4 (Client, Chauffeur, Admin, ModeSecurite) |
| **Relations 1:N** | 25+ |
| **Relations N:N** | 1 (Utilisateur ↔ Role) |
| **FK optionnelles** | 8+ |
| **Indexes** | 40+ |
| **Tables avec timestamps** | 20+ |

---

## 🚀 Recommandations d'Optimisation

### 1. Partitionnement

**Tables candidates au partitionnement:**
- `PositionChauffeur` - Par date (données temporelles volumineuses)
- `EnregistrementAudio` - Par date (fichiers lourds)
- `JournalAudit` - Par date (logs historiques)

### 2. Archivage

**Données à archiver:**
- `PositionChauffeur` après 30 jours
- `EnregistrementAudio` après 90 jours
- `Otp` après 7 jours
- `JournalAudit` après 1 an

### 3. Materialized Views

**Vues matérialisées suggérées:**
- Statistiques chauffeurs (note moyenne, nombre de courses)
- Statistiques clients (dépenses totales, nombre de courses)
- Revenus par période (agrégation paiements)

### 4. Indexes Additionnels

**Indexes suggérés:**
- `Course: [statut, dateCreation]` - Filtrage par statut et date
- `ParticipantCourse: [clientId, statut]` - Courses d'un client par statut
- `Paiement: [statut, datePaiement]` - Paiements par statut et date

---

## 🔐 Sécurité des Données

### Données Sensibles

| Table | Champs sensibles | Protection |
|-------|------------------|------------|
| Utilisateur | motDePasse, refreshToken | Hashage bcrypt |
| Otp | code | Expiration 5 min |
| Paiement | referenceTransaction | Chiffrement suggéré |
| ModeSecurite | - | Accès restreint |

### Audit Trail

- `JournalAudit` - Trace toutes les actions utilisateurs
- `dateCreation` / `dateModification` - Sur la plupart des tables
- `dateAction` - Timestamp précis des actions

---

## 📝 Conclusion

La base de données VAYRIX est conçue pour:

✅ **Flexibilité:** Séparation identité/profil, relations optionnelles  
✅ **Scalabilité:** Architecture modulaire, indexes stratégiques  
✅ **Sécurité:** Audit trail, protection des données sensibles  
✅ **Fonctionnalités riches:** Partage de courses, sécurité avancée, évaluations  
✅ **Performance:** Indexes optimisés, relations bien définies  

La conception suit les meilleures pratiques pour une application de type VTC avec des fonctionnalités avancées de covoiturage et de sécurité.
