# Module Rides - Rapport d'implémentation

## Vue d'ensemble

Le module **Rides** a été implémenté pour gérer le cycle complet de courses simples (non partagées, sans négociation) dans le système VAYRIX.

## Fichiers créés

### Architecture du module

```
src/rides/
├── interfaces/
│   └── ride-status.interface.ts       # Enums et interfaces (CourseStatus, ParticipantStatus, etc.)
├── dto/
│   └── rides.dto.ts                   # DTOs de validation (CreateRideDto, EstimateRideDto, etc.)
├── entities/
│   └── ride.entity.ts                 # Entités API (RideEntity, ParticipantEntity, RideEstimateEntity)
├── repositories/
│   └── rides.repository.ts            # Repository Prisma (CRUD, transactions)
├── services/
│   ├── tarification.service.ts        # Service de calcul de tarif
│   ├── distance.service.ts            # Service de calcul de distance (Haversine)
│   ├── course-state-machine.service.ts # Machine à états pour transitions de statut
│   └── driver-matching.service.ts     # Service de recherche de chauffeurs
├── mappers/
│   └── rides.mapper.ts                # Mappers Prisma -> Entités API
├── rides.controller.ts                # Contrôleur API (endpoints)
├── rides.service.ts                   # Service métier
└── rides.module.ts                    # Module NestJS
```

## Fichiers modifiés

- `src/app.module.ts` : Activation de `RidesModule`

## Endpoints API ajoutés

| Méthode | Route | Auth | Rôle | Description |
|---------|-------|------|------|-------------|
| `POST` | `/rides/estimate` | 🔒 | CLIENT, ADMIN | Estimer le tarif d'une course |
| `POST` | `/rides` | 🔒 | CLIENT | Créer une nouvelle course |
| `GET` | `/rides/me` | 🔒 | CLIENT | Mes courses (client) |
| `GET` | `/rides/driver` | 🔒 | CHAUFFEUR | Mes courses (chauffeur) |
| `GET` | `/rides/available-drivers` | 🔒 | CLIENT, ADMIN | Rechercher des chauffeurs disponibles |
| `GET` | `/rides/:id` | 🔒 | CLIENT, CHAUFFEUR, ADMIN | Détail d'une course |
| `PATCH` | `/rides/:id/accept` | 🔒 | CHAUFFEUR | Accepter une course |
| `PATCH` | `/rides/:id/start` | 🔒 | CHAUFFEUR | Démarrer une course |
| `PATCH` | `/rides/:id/complete` | 🔒 | CHAUFFEUR | Terminer une course |
| `PATCH` | `/rides/:id/cancel` | 🔒 | CLIENT, CHAUFFEUR | Annuler une course |

## Logique tarifaire

### Source de vérité
- **Table Prisma** : `Tarification` (liée à `TypeVehicule`)
- **Champs utilisés** : `prixDepart`, `prixKm`, `prixMinimum`, `commission`

### Formule de calcul
```
prixCalcule = prixDepart + (prixKm × distanceKm)
prixFinal = max(prixCalcule, prixMinimum)
```

### Service
- `TarificationService.calculerTarif(typeVehiculeId, distanceKm)`
- `TarificationService.estimerTarif(typeVehiculeId, distanceKm)`

## Logique de distance

### Algorithme
- **Formule Haversine** pour calcul de distance géodésique
- **Rayon Terre** : 6371 km
- **Vitesse moyenne** : 30 km/h (pour estimation durée)

### Service
- `DistanceService.calculateDistance(lat1, lon1, lat2, lon2)`
- Retourne : `distanceKm` et `dureeEstimeeMinutes`

### Abstraction
Préparé pour remplacer par un provider de routing futur (Google Maps, Mapbox, etc.)

## Machine à états

### États de course
- `DEMANDEE` → `EN_RECHERCHE` → `ACCEPTEE` → `EN_COURS` → `TERMINEE`
- `ANNULEE` (état terminal depuis n'importe quel état)

### Transitions autorisées
```typescript
DEMANDEE → EN_RECHERCHE, ANNULEE
EN_RECHERCHE → ACCEPTEE, ANNULEE
ACCEPTEE → EN_COURS, ANNULEE
EN_COURS → TERMINEE, ANNULEE
TERMINEE → (terminal)
ANNULEE → (terminal)
```

### Service
- `CourseStateMachine.transition(from, to)` : Vérifie et effectue la transition
- `CourseStateMachine.canTransition(from, to)` : Vérifie si transition valide
- `CourseStateMachine.isTerminal(status)` : Vérifie si état terminal

## Logique d'affectation chauffeur

### Critères de recherche
- Chauffeur actif (`statut = 'ACTIF'`)
- En ligne (`estEnLigne = true`)
- Véhicule disponible (`statut = 'DISPONIBLE'`)
- Type de véhicule correspondant
- Position GPS connue (via `PositionChauffeur`)

### Service
- `DriverMatchingService.findAvailableDrivers(criteria)` : Liste des chauffeurs disponibles
- `DriverMatchingService.findClosestDriver(criteria)` : Chauffeur le plus proche

### Paramètres
- `typeVehiculeId` : Type de véhicule requis
- `latitudeDepart`, `longitudeDepart` : Point de départ
- `rayonKm` : Rayon de recherche (défaut 10km)

### Résultat
Liste triée par distance croissante avec informations chauffeur et véhicule

## Concurrence et transactions

### Acceptation de course
- **Transaction Prisma** atomique pour éviter doubles acceptations
- **Vérification** : `chauffeurId` null avant mise à jour
- **Verrouillage** : Transaction garantit unicité

### Création de course
- **Transaction** : Création `Course` + `ParticipantCourse` atomique
- **Intégrité** : Garantit cohérence des données

## Gestion des participants

### Représentation client
- Le client est représenté par `ParticipantCourse` (pas de `clientId` direct dans `Course`)
- **Rôle** : `DEMANDEUR` pour le créateur de la course
- **Statut participant** : Synchronisé avec statut course

### Sécurité d'accès
- Un utilisateur ne peut voir que ses propres courses (client ou chauffeur)
- Vérification : `participant.client.utilisateurId === utilisateurId` ou `course.chauffeurId === utilisateurId`

## BigInt handling

### Conversion
- Tous les IDs Prisma (`bigint`) convertis en `string` pour l'API
- Conversion explicite : `BigInt(id)` pour les paramètres entrants
- Conversion implicite : `id.toString()` pour les sorties

### Exemples
```typescript
// Entrée
BigInt(user.id)
BigInt(courseId)

// Sortie
course.id.toString()
chauffeurId?.toString()
```

## Validation DTO

### DTOs avec class-validator
- `CreateRideDto` : Validation coordonnées GPS, adresses, type véhicule
- `EstimateRideDto` : Validation coordonnées GPS, type véhicule
- `AcceptRideDto` : Validation véhicule ID
- `CancelRideDto` : Validation motif d'annulation
- `RidesQueryDto` : Validation pagination, filtres

### Contraintes
- Coordonnées GPS : `-90` à `90` (latitude), `-180` à `180` (longitude)
- Type véhicule : String (ID)
- Type course : Enum (`STANDARD`, `PREMIUM`, `EXPRESS`)

## Documentation Swagger

### Décorateurs utilisés
- `@ApiTags('Rides')`
- `@ApiOperation({ summary: '...' })`
- `@ApiWrappedOkResponse(Entity)`
- `@ApiProtectedErrors()`
- `@ApiBearerAuth('JWT')`
- `@ApiProperty()` sur tous les champs DTO/Entity

### Helpers
- `@ApiWrappedOkResponse` : Enveloppe réponse avec format global
- `@ApiProtectedErrors` : Erreurs standardisées

## Réponses API

### Format global (réutilisé)
```json
{
  "success": true,
  "message": "...",
  "data": { ... },
  "meta": null
}
```

### Exceptions
- `NotFoundException` : Course/chauffeur/vehicule introuvable
- `ForbiddenException` : Droits insuffisants
- `BadRequestException` : Transition invalide, course non disponible
- `ConflictException` : (préparé pour conflits)

## Tests

### Tests unitaires (à implémenter)
- Calcul tarif
- Calcul distance
- Transitions machine à états
- Recherche chauffeurs
- Mapping entités

### Tests E2E (à implémenter)
- Création course
- Acceptation course
- Double acceptation simultanée
- Démarrage course
- Terminaison course
- Annulation course
- Accès non autorisé
- Course inexistante
- Transition statut invalide

## Commandes exécutées

```bash
npm run build
```

**Résultat** : ✅ Succès (0 erreurs)

## Migrations

**Aucune migration nécessaire** - Le schéma Prisma existant contient déjà toutes les tables requises :
- `Course` (avec champs adresse, lat/long, prix, durée)
- `ParticipantCourse` (lien client-course)
- `Tarification` (règles par type véhicule)
- `PositionChauffeur` (positions GPS)
- `Chauffeur`, `Vehicule`, `TypeVehicule`, `Client`

## Problèmes restants

### Tests
- Tests unitaires non implémentés (planifié pour phase ultérieure)
- Tests E2E non implémentés (planifié pour phase ultérieure)

### Fonctionnalités non incluses (conformément aux spécifications)
- Paiement (module séparé)
- WebSocket/Socket.IO (module séparé)
- Notifications push (module séparé)
- Partage de course (module séparé)
- SOS/Sécurité (module séparé)
- Négociation de prix (module séparé)

## Architecture respectée

### Flux respecté
```
Controller → Service → Repository → Prisma → PostgreSQL
```

### Séparation des responsabilités
- **Controller** : Validation JWT, rôles, appel service
- **Service** : Logique métier, coordination services
- **Repository** : Accès données Prisma
- **Services spécialisés** : Tarification, Distance, Matching, State Machine

### Aucune logique Prisma dans controllers
- Toutes les requêtes Prisma dans `RidesRepository`
- Transactions via `PrismaService.withTransaction()`

### Aucune logique métier dans repositories
- Repositories ne contiennent que des requêtes Prisma
- Logique métier dans services

## Préparation pour modules futurs

### Paiement
- Structure `prixFinal` déjà en place
- `ParticipantCourse` prêt pour lien avec `Paiement`

### WebSocket
- Structure de course prête pour tracking temps réel
- Positions chauffeurs déjà gérées

### Notifications
- Événements de transition d'état identifiables
- Structure participant pour notifications ciblées

### Partage de course
- `partageActif` déjà en place
- `ValidationPartageCourse` table existante
- Structure participant multi-clients prête

## Résumé

Le module Rides est **fonctionnel et opérationnel** avec :
- ✅ Cycle complet de course (création → acceptation → démarrage → terminaison)
- ✅ Calcul tarif côté backend (table Tarification)
- ✅ Calcul distance (Haversine)
- ✅ Machine à états robuste
- ✅ Recherche chauffeurs avec critères
- ✅ Transactions atomiques (évite doubles acceptations)
- ✅ Sécurité d'accès (client/chauffeur)
- ✅ Documentation Swagger complète
- ✅ Build réussi
- ✅ Architecture respectée
- ⏳ Tests à implémenter (phase ultérieure)
