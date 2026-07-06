"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.TarificationScalarFieldEnum = exports.JournalAuditScalarFieldEnum = exports.AdministrateurScalarFieldEnum = exports.EvaluationClientScalarFieldEnum = exports.EvaluationChauffeurScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.AlerteSecuriteScalarFieldEnum = exports.AnalyseSecuriteScalarFieldEnum = exports.TranscriptionAudioScalarFieldEnum = exports.EnregistrementAudioScalarFieldEnum = exports.ModeSecuriteScalarFieldEnum = exports.PositionChauffeurScalarFieldEnum = exports.PaiementScalarFieldEnum = exports.ParticipantCourseScalarFieldEnum = exports.DemandePartageCourseScalarFieldEnum = exports.PropositionPrixScalarFieldEnum = exports.CourseScalarFieldEnum = exports.DocumentVehiculeScalarFieldEnum = exports.DocumentChauffeurScalarFieldEnum = exports.VehiculeScalarFieldEnum = exports.TypeVehiculeScalarFieldEnum = exports.ChauffeurScalarFieldEnum = exports.LocalisationScalarFieldEnum = exports.ContactUrgenceScalarFieldEnum = exports.ClientScalarFieldEnum = exports.UtilisateurRoleScalarFieldEnum = exports.RoleScalarFieldEnum = exports.OtpScalarFieldEnum = exports.UtilisateurScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Utilisateur: 'Utilisateur',
    Otp: 'Otp',
    Role: 'Role',
    UtilisateurRole: 'UtilisateurRole',
    Client: 'Client',
    ContactUrgence: 'ContactUrgence',
    Localisation: 'Localisation',
    Chauffeur: 'Chauffeur',
    TypeVehicule: 'TypeVehicule',
    Vehicule: 'Vehicule',
    DocumentChauffeur: 'DocumentChauffeur',
    DocumentVehicule: 'DocumentVehicule',
    Course: 'Course',
    PropositionPrix: 'PropositionPrix',
    DemandePartageCourse: 'DemandePartageCourse',
    ParticipantCourse: 'ParticipantCourse',
    Paiement: 'Paiement',
    PositionChauffeur: 'PositionChauffeur',
    ModeSecurite: 'ModeSecurite',
    EnregistrementAudio: 'EnregistrementAudio',
    TranscriptionAudio: 'TranscriptionAudio',
    AnalyseSecurite: 'AnalyseSecurite',
    AlerteSecurite: 'AlerteSecurite',
    Notification: 'Notification',
    EvaluationChauffeur: 'EvaluationChauffeur',
    EvaluationClient: 'EvaluationClient',
    Administrateur: 'Administrateur',
    JournalAudit: 'JournalAudit',
    Tarification: 'Tarification'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UtilisateurScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    email: 'email',
    motDePasse: 'motDePasse',
    photo: 'photo',
    langue: 'langue',
    derniereConnexion: 'derniereConnexion',
    dateCreation: 'dateCreation',
    dateModification: 'dateModification',
    refreshToken: 'refreshToken'
};
exports.OtpScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    code: 'code',
    canal: 'canal',
    type: 'type',
    expireAt: 'expireAt',
    utilise: 'utilise',
    tentatives: 'tentatives',
    createdAt: 'createdAt'
};
exports.RoleScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    description: 'description'
};
exports.UtilisateurRoleScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    roleId: 'roleId'
};
exports.ClientScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    estEnLigne: 'estEnLigne',
    statut: 'statut',
    dateCreation: 'dateCreation'
};
exports.ContactUrgenceScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    nom: 'nom',
    telephone: 'telephone',
    mail: 'mail'
};
exports.LocalisationScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    adresse: 'adresse',
    latitude: 'latitude',
    longitude: 'longitude'
};
exports.ChauffeurScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    numeroPermis: 'numeroPermis',
    estEnLigne: 'estEnLigne',
    solde: 'solde',
    statut: 'statut',
    motifStatut: 'motifStatut',
    dateCreation: 'dateCreation',
    dateModification: 'dateModification'
};
exports.TypeVehiculeScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    prixBase: 'prixBase',
    prixParKm: 'prixParKm'
};
exports.VehiculeScalarFieldEnum = {
    id: 'id',
    chauffeurId: 'chauffeurId',
    typeVehiculeId: 'typeVehiculeId',
    marque: 'marque',
    modele: 'modele',
    couleur: 'couleur',
    matricule: 'matricule',
    annee: 'annee',
    statut: 'statut'
};
exports.DocumentChauffeurScalarFieldEnum = {
    id: 'id',
    chauffeurId: 'chauffeurId',
    typeDocument: 'typeDocument',
    urlDocument: 'urlDocument',
    statut: 'statut',
    dateUpload: 'dateUpload'
};
exports.DocumentVehiculeScalarFieldEnum = {
    id: 'id',
    vehiculeId: 'vehiculeId',
    typeDocument: 'typeDocument',
    urlDocument: 'urlDocument',
    statut: 'statut',
    dateUpload: 'dateUpload'
};
exports.CourseScalarFieldEnum = {
    id: 'id',
    chauffeurId: 'chauffeurId',
    vehiculeId: 'vehiculeId',
    distance: 'distance',
    prixInitial: 'prixInitial',
    prixFinal: 'prixFinal',
    typeCourse: 'typeCourse',
    statut: 'statut',
    partageActif: 'partageActif',
    dateCreation: 'dateCreation',
    dateAcceptation: 'dateAcceptation',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin'
};
exports.PropositionPrixScalarFieldEnum = {
    id: 'id',
    courseId: 'courseId',
    clientId: 'clientId',
    chauffeurId: 'chauffeurId',
    auteur: 'auteur',
    prix: 'prix',
    statut: 'statut',
    dateProposition: 'dateProposition'
};
exports.DemandePartageCourseScalarFieldEnum = {
    id: 'id',
    courseId: 'courseId',
    clientDemandeurId: 'clientDemandeurId',
    adresseDepart: 'adresseDepart',
    adresseArrivee: 'adresseArrivee',
    latitudeArrivee: 'latitudeArrivee',
    longitudeArrivee: 'longitudeArrivee',
    latitudeDepart: 'latitudeDepart',
    longitudeDepart: 'longitudeDepart',
    prixCalcule: 'prixCalcule',
    statut: 'statut',
    dateCreation: 'dateCreation'
};
exports.ParticipantCourseScalarFieldEnum = {
    id: 'id',
    courseId: 'courseId',
    clientId: 'clientId',
    adresseDepart: 'adresseDepart',
    latitudeDepart: 'latitudeDepart',
    longitudeDepart: 'longitudeDepart',
    adresseArrivee: 'adresseArrivee',
    latitudeArrivee: 'latitudeArrivee',
    longitudeArrivee: 'longitudeArrivee',
    prixInitial: 'prixInitial',
    prixFinal: 'prixFinal',
    statut: 'statut',
    economieClient: 'economieClient',
    role: 'role',
    heureMontee: 'heureMontee',
    heureDescente: 'heureDescente',
    dateCreation: 'dateCreation'
};
exports.PaiementScalarFieldEnum = {
    id: 'id',
    courseId: 'courseId',
    participantCourseId: 'participantCourseId',
    montant: 'montant',
    methode: 'methode',
    referenceTransaction: 'referenceTransaction',
    statut: 'statut',
    datePaiement: 'datePaiement'
};
exports.PositionChauffeurScalarFieldEnum = {
    id: 'id',
    chauffeurId: 'chauffeurId',
    latitude: 'latitude',
    longitude: 'longitude',
    vitesse: 'vitesse',
    datePosition: 'datePosition'
};
exports.ModeSecuriteScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    actif: 'actif',
    dateActivation: 'dateActivation',
    dateDesactivation: 'dateDesactivation'
};
exports.EnregistrementAudioScalarFieldEnum = {
    id: 'id',
    courseId: 'courseId',
    heureDebut: 'heureDebut',
    heureFin: 'heureFin',
    urlAudio: 'urlAudio'
};
exports.TranscriptionAudioScalarFieldEnum = {
    id: 'id',
    enregistrementId: 'enregistrementId',
    texte: 'texte',
    horodatage: 'horodatage'
};
exports.AnalyseSecuriteScalarFieldEnum = {
    id: 'id',
    courseId: 'courseId',
    scoreRisque: 'scoreRisque',
    niveauRisque: 'niveauRisque',
    resume: 'resume',
    dateAnalyse: 'dateAnalyse'
};
exports.AlerteSecuriteScalarFieldEnum = {
    id: 'id',
    courseId: 'courseId',
    utilisateurId: 'utilisateurId',
    typeAlerte: 'typeAlerte',
    niveauRisque: 'niveauRisque',
    latitude: 'latitude',
    longitude: 'longitude',
    message: 'message',
    statut: 'statut',
    dateCreation: 'dateCreation'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    titre: 'titre',
    message: 'message',
    type: 'type',
    lu: 'lu',
    dateCreation: 'dateCreation',
    dateDeLecture: 'dateDeLecture'
};
exports.EvaluationChauffeurScalarFieldEnum = {
    id: 'id',
    courseId: 'courseId',
    clientId: 'clientId',
    chauffeurId: 'chauffeurId',
    note: 'note',
    commentaire: 'commentaire',
    dateCreation: 'dateCreation'
};
exports.EvaluationClientScalarFieldEnum = {
    id: 'id',
    courseId: 'courseId',
    chauffeurId: 'chauffeurId',
    clientId: 'clientId',
    note: 'note',
    commentaire: 'commentaire',
    dateCreation: 'dateCreation'
};
exports.AdministrateurScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    niveau: 'niveau'
};
exports.JournalAuditScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    action: 'action',
    dateAction: 'dateAction'
};
exports.TarificationScalarFieldEnum = {
    id: 'id',
    typeVehiculeId: 'typeVehiculeId',
    prixDepart: 'prixDepart',
    prixKm: 'prixKm',
    prixMinimum: 'prixMinimum',
    commission: 'commission'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map