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
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcrypt = __importStar(require("bcrypt"));
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient({
    adapter: new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL }),
});
const DEFAULT_PASSWORD = 'Password123!';
const NENGUE_PASSWORD = 'admin123';
async function main() {
    console.log('Demarrage du seed VAYRIX (admin, client, chauffeur, nengue)...');
    const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 12);
    const hashedNenguePassword = await bcrypt.hash(NENGUE_PASSWORD, 12);
    const baseRoles = [
        { nom: 'ADMIN', description: 'Administrateur système VAYRIX' },
        { nom: 'CLIENT', description: 'Client passager VAYRIX' },
        { nom: 'CHAUFFEUR', description: 'Chauffeur partenaire VAYRIX' },
        { nom: 'SUPER_ADMIN', description: 'Super administrateur VAYRIX' },
    ];
    const seededRoles = await Promise.all(baseRoles.map((role) => prisma.role.upsert({
        where: { nom: role.nom },
        update: { description: role.description },
        create: role,
    })));
    const roleByName = Object.fromEntries(seededRoles.map((role) => [role.nom, role]));
    const roleAdmin = roleByName.ADMIN;
    const roleClient = roleByName.CLIENT;
    const roleChauffeur = roleByName.CHAUFFEUR;
    const utilisateurAdmin = await prisma.utilisateur.create({
        data: {
            nom: 'Sarr',
            prenom: 'Fatou',
            telephone: '+221770000001',
            email: 'admin@vayrix.com',
            motDePasse: hashedPassword,
            photo: 'storage/photos/admin-fatou.jpg',
            langue: 'fr',
            derniereConnexion: new Date(),
        },
    });
    const utilisateurClient = await prisma.utilisateur.create({
        data: {
            nom: 'Diop',
            prenom: 'Awa',
            telephone: '+221770000002',
            email: 'client@vayrix.com',
            motDePasse: hashedPassword,
            photo: 'storage/photos/client-awa.jpg',
            langue: 'fr',
            derniereConnexion: new Date(),
        },
    });
    const utilisateurChauffeur = await prisma.utilisateur.create({
        data: {
            nom: 'Ndiaye',
            prenom: 'Moussa',
            telephone: '+221770000003',
            email: 'chauffeur@vayrix.com',
            motDePasse: hashedPassword,
            photo: 'storage/photos/chauffeur-moussa.jpg',
            langue: 'fr',
            derniereConnexion: new Date(),
        },
    });
    const utilisateurNengue = await prisma.utilisateur.create({
        data: {
            nom: 'Nengue',
            prenom: 'Admin',
            telephone: '+237697573894',
            email: 'nengue382@gmail.com',
            motDePasse: hashedNenguePassword,
            photo: 'storage/photos/admin-nengue.jpg',
            langue: 'fr',
            derniereConnexion: new Date(),
        },
    });
    const roleSuperAdmin = roleByName.SUPER_ADMIN;
    await prisma.utilisateurRole.createMany({
        data: [
            { utilisateurId: utilisateurAdmin.id, roleId: roleAdmin.id },
            { utilisateurId: utilisateurClient.id, roleId: roleClient.id },
            { utilisateurId: utilisateurChauffeur.id, roleId: roleChauffeur.id },
            { utilisateurId: utilisateurNengue.id, roleId: roleAdmin.id },
            { utilisateurId: utilisateurNengue.id, roleId: roleSuperAdmin.id },
        ],
    });
    const client = await prisma.client.create({
        data: {
            utilisateurId: utilisateurClient.id,
            estEnLigne: true,
            statut: 'ACTIF',
        },
    });
    const chauffeur = await prisma.chauffeur.create({
        data: {
            utilisateurId: utilisateurChauffeur.id,
            numeroPermis: 'SN-DL-2026-001',
            estEnLigne: true,
            solde: 125000,
            statut: 'VALIDE',
            motifStatut: null,
        },
    });
    await prisma.administrateur.create({
        data: {
            utilisateurId: utilisateurAdmin.id,
            niveau: 'SUPER_ADMIN',
        },
    });
    await prisma.administrateur.create({
        data: {
            utilisateurId: utilisateurNengue.id,
            niveau: 'SUPER_ADMIN',
        },
    });
    await prisma.contactUrgence.create({
        data: {
            utilisateurId: utilisateurClient.id,
            nom: 'Diop Amadou',
            telephone: '+221770000099',
            mail: 'amadou.diop@email.com',
        },
    });
    await prisma.localisation.createMany({
        data: [
            {
                utilisateurId: utilisateurClient.id,
                adresse: 'Almadies, Dakar',
                latitude: 14.7463,
                longitude: -17.5092,
            },
            {
                utilisateurId: utilisateurChauffeur.id,
                adresse: 'Plateau, Dakar',
                latitude: 14.6937,
                longitude: -17.4441,
            },
        ],
    });
    await prisma.modeSecurite.create({
        data: {
            utilisateurId: utilisateurClient.id,
            actif: true,
            dateActivation: new Date(),
            dateDesactivation: null,
        },
    });
    const typeBerline = await prisma.typeVehicule.create({
        data: {
            nom: 'Berline',
            prixBase: 500,
            prixParKm: 250,
        },
    });
    const typeSuv = await prisma.typeVehicule.create({
        data: {
            nom: 'SUV',
            prixBase: 800,
            prixParKm: 350,
        },
    });
    await prisma.tarification.createMany({
        data: [
            {
                typeVehiculeId: typeBerline.id,
                prixDepart: 500,
                prixKm: 250,
                prixMinimum: 1000,
                commission: 15,
            },
            {
                typeVehiculeId: typeSuv.id,
                prixDepart: 800,
                prixKm: 350,
                prixMinimum: 1500,
                commission: 18,
            },
        ],
    });
    const vehicule = await prisma.vehicule.create({
        data: {
            chauffeurId: chauffeur.id,
            typeVehiculeId: typeBerline.id,
            marque: 'Toyota',
            modele: 'Corolla',
            couleur: 'Blanc',
            matricule: 'DK-1234-AB',
            annee: 2022,
            statut: 'VALIDE',
        },
    });
    await prisma.documentChauffeur.create({
        data: {
            chauffeurId: chauffeur.id,
            typeDocument: 'PERMIS_CONDUIRE',
            urlDocument: 'storage/documents/permis-moussa.pdf',
            statut: 'VALIDE',
        },
    });
    await prisma.documentVehicule.create({
        data: {
            vehiculeId: vehicule.id,
            typeDocument: 'CARTE_GRISE',
            urlDocument: 'storage/documents/carte-grise-dk1234ab.pdf',
            statut: 'VALIDE',
        },
    });
    const course = await prisma.course.create({
        data: {
            chauffeurId: chauffeur.id,
            vehiculeId: vehicule.id,
            distance: 8.5,
            prixInitial: 2625,
            prixFinal: 2500,
            typeCourse: 'STANDARD',
            statut: 'TERMINEE',
            partageActif: true,
            dateAcceptation: new Date('2026-07-06T10:05:00Z'),
            dateDebut: new Date('2026-07-06T10:15:00Z'),
            dateFin: new Date('2026-07-06T10:35:00Z'),
        },
    });
    const participant = await prisma.participantCourse.create({
        data: {
            courseId: course.id,
            clientId: client.id,
            adresseDepart: 'Almadies, Dakar',
            latitudeDepart: 14.7463,
            longitudeDepart: -17.5092,
            adresseArrivee: 'Place de l Independance, Dakar',
            latitudeArrivee: 14.6708,
            longitudeArrivee: -17.4411,
            prixInitial: 2625,
            prixFinal: 2500,
            statut: 'TERMINE',
            economieClient: 125,
            role: 'PASSAGER',
            heureMontee: new Date('2026-07-06T10:15:00Z'),
            heureDescente: new Date('2026-07-06T10:35:00Z'),
        },
    });
    await prisma.propositionPrix.create({
        data: {
            courseId: course.id,
            clientId: client.id,
            chauffeurId: chauffeur.id,
            auteur: 'CHAUFFEUR',
            prix: 2500,
            statut: 'ACCEPTEE',
        },
    });
    await prisma.demandePartageCourse.create({
        data: {
            courseId: course.id,
            clientDemandeurId: client.id,
            adresseDepart: 'Almadies, Dakar',
            adresseArrivee: 'Plateau, Dakar',
            latitudeDepart: 14.7463,
            longitudeDepart: -17.5092,
            latitudeArrivee: 14.6937,
            longitudeArrivee: -17.4441,
            prixCalcule: 1800,
            statut: 'ACCEPTEE',
        },
    });
    await prisma.paiement.create({
        data: {
            courseId: course.id,
            participantCourseId: participant.id,
            montant: 2500,
            methode: 'MOBILE_MONEY',
            referenceTransaction: 'TXN-VAYRIX-20260706-001',
            statut: 'PAYE',
            datePaiement: new Date('2026-07-06T10:36:00Z'),
        },
    });
    await prisma.positionChauffeur.create({
        data: {
            chauffeurId: chauffeur.id,
            latitude: 14.7167,
            longitude: -17.4677,
            vitesse: 35.5,
        },
    });
    const enregistrement = await prisma.enregistrementAudio.create({
        data: {
            courseId: course.id,
            heureDebut: new Date('2026-07-06T10:15:00Z'),
            heureFin: new Date('2026-07-06T10:35:00Z'),
            urlAudio: 'storage/audio/course-001.mp3',
        },
    });
    await prisma.transcriptionAudio.create({
        data: {
            enregistrementId: enregistrement.id,
            texte: 'Tout semble normal pendant le trajet. Le chauffeur est poli.',
            horodatage: new Date('2026-07-06T10:36:00Z'),
        },
    });
    await prisma.analyseSecurite.create({
        data: {
            courseId: course.id,
            scoreRisque: 12.5,
            niveauRisque: 'FAIBLE',
            resume: 'Aucun comportement suspect detecte pendant la course.',
        },
    });
    await prisma.alerteSecurite.create({
        data: {
            courseId: course.id,
            utilisateurId: utilisateurClient.id,
            typeAlerte: 'SOS',
            niveauRisque: 'FAIBLE',
            latitude: 14.7167,
            longitude: -17.4677,
            message: 'Alerte test resolue rapidement',
            statut: 'RESOLUE',
        },
    });
    await prisma.notification.createMany({
        data: [
            {
                utilisateurId: utilisateurClient.id,
                titre: 'Course terminee',
                message: 'Votre course vers Place de l Independance est terminee.',
                type: 'COURSE',
                lu: true,
                dateDeLecture: new Date(),
            },
            {
                utilisateurId: utilisateurChauffeur.id,
                titre: 'Paiement recu',
                message: 'Vous avez recu 2500 XOF pour la course #1.',
                type: 'PAIEMENT',
                lu: false,
            },
            {
                utilisateurId: utilisateurAdmin.id,
                titre: 'Nouvelle course',
                message: 'Une course a ete completee sur la plateforme.',
                type: 'SYSTEME',
                lu: false,
            },
        ],
    });
    await prisma.evaluationChauffeur.create({
        data: {
            courseId: course.id,
            clientId: client.id,
            chauffeurId: chauffeur.id,
            note: 5,
            commentaire: 'Excellent chauffeur, trajet tres confortable.',
        },
    });
    await prisma.evaluationClient.create({
        data: {
            courseId: course.id,
            chauffeurId: chauffeur.id,
            clientId: client.id,
            note: 5,
            commentaire: 'Client ponctuel et respectueux.',
        },
    });
    await prisma.journalAudit.create({
        data: {
            utilisateurId: utilisateurAdmin.id,
            action: 'SEED_INITIAL_VAYRIX',
        },
    });
    console.log('');
    console.log('Seed VAYRIX termine avec succes.');
    console.log('-------------------------------------------');
    console.log('Roles de base : ADMIN, CLIENT, CHAUFFEUR, SUPER_ADMIN');
    console.log('');
    console.log('Comptes fictifs :');
    console.log(`  Admin     : admin@vayrix.com`);
    console.log(`  Client    : client@vayrix.com`);
    console.log(`  Chauffeur : chauffeur@vayrix.com`);
    console.log(`  Nengue    : nengue382@gmail.com (+237697573894) — mot de passe : admin123`);
    console.log('');
    console.log('28 tables peuplees avec donnees de demonstration.');
}
main()
    .catch((error) => {
    console.error('Erreur lors du seed:', error);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map