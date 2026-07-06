import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Utilisateur: "Utilisateur";
    readonly Otp: "Otp";
    readonly Role: "Role";
    readonly UtilisateurRole: "UtilisateurRole";
    readonly Client: "Client";
    readonly ContactUrgence: "ContactUrgence";
    readonly Localisation: "Localisation";
    readonly Chauffeur: "Chauffeur";
    readonly TypeVehicule: "TypeVehicule";
    readonly Vehicule: "Vehicule";
    readonly DocumentChauffeur: "DocumentChauffeur";
    readonly DocumentVehicule: "DocumentVehicule";
    readonly Course: "Course";
    readonly PropositionPrix: "PropositionPrix";
    readonly DemandePartageCourse: "DemandePartageCourse";
    readonly ParticipantCourse: "ParticipantCourse";
    readonly Paiement: "Paiement";
    readonly PositionChauffeur: "PositionChauffeur";
    readonly ModeSecurite: "ModeSecurite";
    readonly EnregistrementAudio: "EnregistrementAudio";
    readonly TranscriptionAudio: "TranscriptionAudio";
    readonly AnalyseSecurite: "AnalyseSecurite";
    readonly AlerteSecurite: "AlerteSecurite";
    readonly Notification: "Notification";
    readonly EvaluationChauffeur: "EvaluationChauffeur";
    readonly EvaluationClient: "EvaluationClient";
    readonly Administrateur: "Administrateur";
    readonly JournalAudit: "JournalAudit";
    readonly Tarification: "Tarification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UtilisateurScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly telephone: "telephone";
    readonly email: "email";
    readonly motDePasse: "motDePasse";
    readonly photo: "photo";
    readonly langue: "langue";
    readonly derniereConnexion: "derniereConnexion";
    readonly dateCreation: "dateCreation";
    readonly dateModification: "dateModification";
    readonly refreshToken: "refreshToken";
};
export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum];
export declare const OtpScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly code: "code";
    readonly canal: "canal";
    readonly type: "type";
    readonly expireAt: "expireAt";
    readonly utilise: "utilise";
    readonly tentatives: "tentatives";
    readonly createdAt: "createdAt";
};
export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly description: "description";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const UtilisateurRoleScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly roleId: "roleId";
};
export type UtilisateurRoleScalarFieldEnum = (typeof UtilisateurRoleScalarFieldEnum)[keyof typeof UtilisateurRoleScalarFieldEnum];
export declare const ClientScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly estEnLigne: "estEnLigne";
    readonly statut: "statut";
    readonly dateCreation: "dateCreation";
};
export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];
export declare const ContactUrgenceScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly nom: "nom";
    readonly telephone: "telephone";
    readonly mail: "mail";
};
export type ContactUrgenceScalarFieldEnum = (typeof ContactUrgenceScalarFieldEnum)[keyof typeof ContactUrgenceScalarFieldEnum];
export declare const LocalisationScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly adresse: "adresse";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
};
export type LocalisationScalarFieldEnum = (typeof LocalisationScalarFieldEnum)[keyof typeof LocalisationScalarFieldEnum];
export declare const ChauffeurScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly numeroPermis: "numeroPermis";
    readonly estEnLigne: "estEnLigne";
    readonly solde: "solde";
    readonly statut: "statut";
    readonly motifStatut: "motifStatut";
    readonly dateCreation: "dateCreation";
    readonly dateModification: "dateModification";
};
export type ChauffeurScalarFieldEnum = (typeof ChauffeurScalarFieldEnum)[keyof typeof ChauffeurScalarFieldEnum];
export declare const TypeVehiculeScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly prixBase: "prixBase";
    readonly prixParKm: "prixParKm";
};
export type TypeVehiculeScalarFieldEnum = (typeof TypeVehiculeScalarFieldEnum)[keyof typeof TypeVehiculeScalarFieldEnum];
export declare const VehiculeScalarFieldEnum: {
    readonly id: "id";
    readonly chauffeurId: "chauffeurId";
    readonly typeVehiculeId: "typeVehiculeId";
    readonly marque: "marque";
    readonly modele: "modele";
    readonly couleur: "couleur";
    readonly matricule: "matricule";
    readonly annee: "annee";
    readonly statut: "statut";
};
export type VehiculeScalarFieldEnum = (typeof VehiculeScalarFieldEnum)[keyof typeof VehiculeScalarFieldEnum];
export declare const DocumentChauffeurScalarFieldEnum: {
    readonly id: "id";
    readonly chauffeurId: "chauffeurId";
    readonly typeDocument: "typeDocument";
    readonly urlDocument: "urlDocument";
    readonly statut: "statut";
    readonly dateUpload: "dateUpload";
};
export type DocumentChauffeurScalarFieldEnum = (typeof DocumentChauffeurScalarFieldEnum)[keyof typeof DocumentChauffeurScalarFieldEnum];
export declare const DocumentVehiculeScalarFieldEnum: {
    readonly id: "id";
    readonly vehiculeId: "vehiculeId";
    readonly typeDocument: "typeDocument";
    readonly urlDocument: "urlDocument";
    readonly statut: "statut";
    readonly dateUpload: "dateUpload";
};
export type DocumentVehiculeScalarFieldEnum = (typeof DocumentVehiculeScalarFieldEnum)[keyof typeof DocumentVehiculeScalarFieldEnum];
export declare const CourseScalarFieldEnum: {
    readonly id: "id";
    readonly chauffeurId: "chauffeurId";
    readonly vehiculeId: "vehiculeId";
    readonly distance: "distance";
    readonly prixInitial: "prixInitial";
    readonly prixFinal: "prixFinal";
    readonly typeCourse: "typeCourse";
    readonly statut: "statut";
    readonly partageActif: "partageActif";
    readonly dateCreation: "dateCreation";
    readonly dateAcceptation: "dateAcceptation";
    readonly dateDebut: "dateDebut";
    readonly dateFin: "dateFin";
};
export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];
export declare const PropositionPrixScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly clientId: "clientId";
    readonly chauffeurId: "chauffeurId";
    readonly auteur: "auteur";
    readonly prix: "prix";
    readonly statut: "statut";
    readonly dateProposition: "dateProposition";
};
export type PropositionPrixScalarFieldEnum = (typeof PropositionPrixScalarFieldEnum)[keyof typeof PropositionPrixScalarFieldEnum];
export declare const DemandePartageCourseScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly clientDemandeurId: "clientDemandeurId";
    readonly adresseDepart: "adresseDepart";
    readonly adresseArrivee: "adresseArrivee";
    readonly latitudeArrivee: "latitudeArrivee";
    readonly longitudeArrivee: "longitudeArrivee";
    readonly latitudeDepart: "latitudeDepart";
    readonly longitudeDepart: "longitudeDepart";
    readonly prixCalcule: "prixCalcule";
    readonly statut: "statut";
    readonly dateCreation: "dateCreation";
};
export type DemandePartageCourseScalarFieldEnum = (typeof DemandePartageCourseScalarFieldEnum)[keyof typeof DemandePartageCourseScalarFieldEnum];
export declare const ParticipantCourseScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly clientId: "clientId";
    readonly adresseDepart: "adresseDepart";
    readonly latitudeDepart: "latitudeDepart";
    readonly longitudeDepart: "longitudeDepart";
    readonly adresseArrivee: "adresseArrivee";
    readonly latitudeArrivee: "latitudeArrivee";
    readonly longitudeArrivee: "longitudeArrivee";
    readonly prixInitial: "prixInitial";
    readonly prixFinal: "prixFinal";
    readonly statut: "statut";
    readonly economieClient: "economieClient";
    readonly role: "role";
    readonly heureMontee: "heureMontee";
    readonly heureDescente: "heureDescente";
    readonly dateCreation: "dateCreation";
};
export type ParticipantCourseScalarFieldEnum = (typeof ParticipantCourseScalarFieldEnum)[keyof typeof ParticipantCourseScalarFieldEnum];
export declare const PaiementScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly participantCourseId: "participantCourseId";
    readonly montant: "montant";
    readonly methode: "methode";
    readonly referenceTransaction: "referenceTransaction";
    readonly statut: "statut";
    readonly datePaiement: "datePaiement";
};
export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum];
export declare const PositionChauffeurScalarFieldEnum: {
    readonly id: "id";
    readonly chauffeurId: "chauffeurId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly vitesse: "vitesse";
    readonly datePosition: "datePosition";
};
export type PositionChauffeurScalarFieldEnum = (typeof PositionChauffeurScalarFieldEnum)[keyof typeof PositionChauffeurScalarFieldEnum];
export declare const ModeSecuriteScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly actif: "actif";
    readonly dateActivation: "dateActivation";
    readonly dateDesactivation: "dateDesactivation";
};
export type ModeSecuriteScalarFieldEnum = (typeof ModeSecuriteScalarFieldEnum)[keyof typeof ModeSecuriteScalarFieldEnum];
export declare const EnregistrementAudioScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly heureDebut: "heureDebut";
    readonly heureFin: "heureFin";
    readonly urlAudio: "urlAudio";
};
export type EnregistrementAudioScalarFieldEnum = (typeof EnregistrementAudioScalarFieldEnum)[keyof typeof EnregistrementAudioScalarFieldEnum];
export declare const TranscriptionAudioScalarFieldEnum: {
    readonly id: "id";
    readonly enregistrementId: "enregistrementId";
    readonly texte: "texte";
    readonly horodatage: "horodatage";
};
export type TranscriptionAudioScalarFieldEnum = (typeof TranscriptionAudioScalarFieldEnum)[keyof typeof TranscriptionAudioScalarFieldEnum];
export declare const AnalyseSecuriteScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly scoreRisque: "scoreRisque";
    readonly niveauRisque: "niveauRisque";
    readonly resume: "resume";
    readonly dateAnalyse: "dateAnalyse";
};
export type AnalyseSecuriteScalarFieldEnum = (typeof AnalyseSecuriteScalarFieldEnum)[keyof typeof AnalyseSecuriteScalarFieldEnum];
export declare const AlerteSecuriteScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly utilisateurId: "utilisateurId";
    readonly typeAlerte: "typeAlerte";
    readonly niveauRisque: "niveauRisque";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly message: "message";
    readonly statut: "statut";
    readonly dateCreation: "dateCreation";
};
export type AlerteSecuriteScalarFieldEnum = (typeof AlerteSecuriteScalarFieldEnum)[keyof typeof AlerteSecuriteScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly titre: "titre";
    readonly message: "message";
    readonly type: "type";
    readonly lu: "lu";
    readonly dateCreation: "dateCreation";
    readonly dateDeLecture: "dateDeLecture";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const EvaluationChauffeurScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly clientId: "clientId";
    readonly chauffeurId: "chauffeurId";
    readonly note: "note";
    readonly commentaire: "commentaire";
    readonly dateCreation: "dateCreation";
};
export type EvaluationChauffeurScalarFieldEnum = (typeof EvaluationChauffeurScalarFieldEnum)[keyof typeof EvaluationChauffeurScalarFieldEnum];
export declare const EvaluationClientScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly chauffeurId: "chauffeurId";
    readonly clientId: "clientId";
    readonly note: "note";
    readonly commentaire: "commentaire";
    readonly dateCreation: "dateCreation";
};
export type EvaluationClientScalarFieldEnum = (typeof EvaluationClientScalarFieldEnum)[keyof typeof EvaluationClientScalarFieldEnum];
export declare const AdministrateurScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly niveau: "niveau";
};
export type AdministrateurScalarFieldEnum = (typeof AdministrateurScalarFieldEnum)[keyof typeof AdministrateurScalarFieldEnum];
export declare const JournalAuditScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly action: "action";
    readonly dateAction: "dateAction";
};
export type JournalAuditScalarFieldEnum = (typeof JournalAuditScalarFieldEnum)[keyof typeof JournalAuditScalarFieldEnum];
export declare const TarificationScalarFieldEnum: {
    readonly id: "id";
    readonly typeVehiculeId: "typeVehiculeId";
    readonly prixDepart: "prixDepart";
    readonly prixKm: "prixKm";
    readonly prixMinimum: "prixMinimum";
    readonly commission: "commission";
};
export type TarificationScalarFieldEnum = (typeof TarificationScalarFieldEnum)[keyof typeof TarificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
