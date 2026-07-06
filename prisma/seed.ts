import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL! }),
});

const DEFAULT_PASSWORD = 'Password123!';
const NENGUE_PASSWORD = 'admin123';

async function main(): Promise<void> {
  console.log('Demarrage du seed VAYRIX (admin, client, chauffeur, nengue)...');

  const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 12);
  const hashedNenguePassword = await bcrypt.hash(NENGUE_PASSWORD, 12);

  // ---------------------------------------------------------------------------
  // ROLE
  // ---------------------------------------------------------------------------
  const roleAdmin = await prisma.role.create({
    data: { nom: 'ADMIN', description: 'Administrateur systeme VAYRIX' },
  });
  const roleClient = await prisma.role.create({
    data: { nom: 'CLIENT', description: 'Client passager VAYRIX' },
  });
  const roleChauffeur = await prisma.role.create({
    data: { nom: 'CHAUFFEUR', description: 'Chauffeur partenaire VAYRIX' },
  });

  // ---------------------------------------------------------------------------
  // UTILISATEUR (3 comptes : admin, client, chauffeur)
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // UTILISATEUR_ROLE
  // ---------------------------------------------------------------------------
  await prisma.utilisateurRole.createMany({
    data: [
      { utilisateurId: utilisateurAdmin.id, roleId: roleAdmin.id },
      { utilisateurId: utilisateurClient.id, roleId: roleClient.id },
      { utilisateurId: utilisateurChauffeur.id, roleId: roleChauffeur.id },
      { utilisateurId: utilisateurNengue.id, roleId: roleAdmin.id },
    ],
  });

  // ---------------------------------------------------------------------------
  // CLIENT / CHAUFFEUR / ADMINISTRATEUR
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // CONTACT_URGENCE
  // ---------------------------------------------------------------------------
  await prisma.contactUrgence.create({
    data: {
      utilisateurId: utilisateurClient.id,
      nom: 'Diop Amadou',
      telephone: '+221770000099',
      mail: 'amadou.diop@email.com',
    },
  });

  // ---------------------------------------------------------------------------
  // LOCALISATION
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // MODE_SECURITE
  // ---------------------------------------------------------------------------
  await prisma.modeSecurite.create({
    data: {
      utilisateurId: utilisateurClient.id,
      actif: true,
      dateActivation: new Date(),
      dateDesactivation: null,
    },
  });

  // ---------------------------------------------------------------------------
  // TYPE_VEHICULE + TARIFICATION
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // VEHICULE + DOCUMENTS
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // COURSE
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // PARTICIPANT_COURSE
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // PROPOSITION_PRIX + DEMANDE_PARTAGE_COURSE
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // PAIEMENT
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // POSITION_CHAUFFEUR
  // ---------------------------------------------------------------------------
  await prisma.positionChauffeur.create({
    data: {
      chauffeurId: chauffeur.id,
      latitude: 14.7167,
      longitude: -17.4677,
      vitesse: 35.5,
    },
  });

  // ---------------------------------------------------------------------------
  // ENREGISTREMENT_AUDIO + TRANSCRIPTION_AUDIO
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // ANALYSE_SECURITE + ALERTE_SECURITE
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // NOTIFICATION
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // EVALUATIONS
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // JOURNAL_AUDIT
  // ---------------------------------------------------------------------------
  await prisma.journalAudit.create({
    data: {
      utilisateurId: utilisateurAdmin.id,
      action: 'SEED_INITIAL_VAYRIX',
    },
  });

  console.log('');
  console.log('Seed VAYRIX termine avec succes.');
  console.log('-------------------------------------------');
  console.log('Comptes fictifs :');
  console.log(`  Admin     : admin@vayrix.com`);
  console.log(`  Client    : client@vayrix.com`);
  console.log(`  Chauffeur : chauffeur@vayrix.com`);
  console.log(`  Nengue    : nengue382@gmail.com (+237697573894) — mot de passe : admin123`);
  console.log('');
  console.log('28 tables peuplees avec donnees de demonstration.');
}

main()
  .catch((error: unknown) => {
    console.error('Erreur lors du seed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
