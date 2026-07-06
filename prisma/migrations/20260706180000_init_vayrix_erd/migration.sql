-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "utilisateur" (
    "id" BIGSERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "prenom" VARCHAR(100) NOT NULL,
    "telephone" VARCHAR(20) NOT NULL,
    "email" VARCHAR(191) NOT NULL,
    "photo" VARCHAR(500),
    "langue" VARCHAR(10) NOT NULL,
    "derniere_connexion" TIMESTAMP(3),
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_modification" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" BIGSERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "utilisateur_role" (
    "id" BIGSERIAL NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "role_id" BIGINT NOT NULL,

    CONSTRAINT "utilisateur_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" BIGSERIAL NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "est_en_ligne" BOOLEAN NOT NULL DEFAULT false,
    "statut" VARCHAR(50) NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_urgence" (
    "id" BIGSERIAL NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "telephone" VARCHAR(20) NOT NULL,
    "mail" VARCHAR(191) NOT NULL,

    CONSTRAINT "contact_urgence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "localisation" (
    "id" BIGSERIAL NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "adresse" VARCHAR(500) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "localisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chauffeur" (
    "id" BIGSERIAL NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "numero_permis" VARCHAR(50) NOT NULL,
    "est_en_ligne" BOOLEAN NOT NULL DEFAULT false,
    "solde" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "statut" VARCHAR(50) NOT NULL,
    "motif_statut" VARCHAR(500),
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_modification" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chauffeur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_vehicule" (
    "id" BIGSERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "prix_base" DECIMAL(12,2) NOT NULL,
    "prix_par_km" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "type_vehicule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicule" (
    "id" BIGSERIAL NOT NULL,
    "chauffeur_id" BIGINT NOT NULL,
    "type_vehicule_id" BIGINT NOT NULL,
    "marque" VARCHAR(100) NOT NULL,
    "modele" VARCHAR(100) NOT NULL,
    "couleur" VARCHAR(50) NOT NULL,
    "matricule" VARCHAR(20) NOT NULL,
    "annee" INTEGER NOT NULL,
    "statut" VARCHAR(50) NOT NULL,

    CONSTRAINT "vehicule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_chauffeur" (
    "id" BIGSERIAL NOT NULL,
    "chauffeur_id" BIGINT NOT NULL,
    "type_document" VARCHAR(100) NOT NULL,
    "url_document" VARCHAR(500) NOT NULL,
    "statut" VARCHAR(50) NOT NULL,
    "date_upload" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document_chauffeur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_vehicule" (
    "id" BIGSERIAL NOT NULL,
    "vehicule_id" BIGINT NOT NULL,
    "type_document" VARCHAR(100) NOT NULL,
    "url_document" VARCHAR(500) NOT NULL,
    "statut" VARCHAR(50) NOT NULL,
    "date_upload" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document_vehicule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course" (
    "id" BIGSERIAL NOT NULL,
    "chauffeur_id" BIGINT,
    "vehicule_id" BIGINT,
    "distance" DECIMAL(10,2),
    "prix_initial" DECIMAL(12,2),
    "prix_final" DECIMAL(12,2),
    "type_course" VARCHAR(50) NOT NULL,
    "statut" VARCHAR(50) NOT NULL,
    "partage_actif" BOOLEAN NOT NULL DEFAULT false,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_acceptation" TIMESTAMP(3),
    "date_debut" TIMESTAMP(3),
    "date_fin" TIMESTAMP(3),

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proposition_prix" (
    "id" BIGSERIAL NOT NULL,
    "course_id" BIGINT NOT NULL,
    "client_id" BIGINT NOT NULL,
    "chauffeur_id" BIGINT NOT NULL,
    "auteur" VARCHAR(50) NOT NULL,
    "prix" DECIMAL(12,2) NOT NULL,
    "statut" VARCHAR(50) NOT NULL,
    "date_proposition" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "proposition_prix_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "demande_partage_course" (
    "id" BIGSERIAL NOT NULL,
    "course_id" BIGINT NOT NULL,
    "client_demandeur_id" BIGINT NOT NULL,
    "adresse_depart" VARCHAR(500) NOT NULL,
    "adresse_arrivee" VARCHAR(500) NOT NULL,
    "latitude_arrivee" DOUBLE PRECISION NOT NULL,
    "longitude_arrivee" DOUBLE PRECISION NOT NULL,
    "latitude_depart" DOUBLE PRECISION NOT NULL,
    "longitude_depart" DOUBLE PRECISION NOT NULL,
    "prix_calcule" DECIMAL(12,2) NOT NULL,
    "statut" VARCHAR(50) NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "demande_partage_course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participant_course" (
    "id" BIGSERIAL NOT NULL,
    "course_id" BIGINT NOT NULL,
    "client_id" BIGINT NOT NULL,
    "adresse_depart" VARCHAR(500) NOT NULL,
    "latitude_depart" DOUBLE PRECISION NOT NULL,
    "longitude_depart" DOUBLE PRECISION NOT NULL,
    "adresse_arrivee" VARCHAR(500) NOT NULL,
    "latitude_arrivee" DOUBLE PRECISION NOT NULL,
    "longitude_arrivee" DOUBLE PRECISION NOT NULL,
    "prix_initial" DECIMAL(12,2) NOT NULL,
    "prix_final" DECIMAL(12,2),
    "statut" VARCHAR(50) NOT NULL,
    "economie_client" DECIMAL(12,2),
    "role" VARCHAR(50) NOT NULL,
    "heure_montee" TIMESTAMP(3),
    "heure_descente" TIMESTAMP(3),
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "participant_course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paiement" (
    "id" BIGSERIAL NOT NULL,
    "course_id" BIGINT NOT NULL,
    "participant_course_id" BIGINT NOT NULL,
    "montant" DECIMAL(12,2) NOT NULL,
    "methode" VARCHAR(50) NOT NULL,
    "reference_transaction" VARCHAR(100),
    "statut" VARCHAR(50) NOT NULL,
    "date_paiement" TIMESTAMP(3),

    CONSTRAINT "paiement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "position_chauffeur" (
    "id" BIGSERIAL NOT NULL,
    "chauffeur_id" BIGINT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "vitesse" DECIMAL(8,2),
    "date_position" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "position_chauffeur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mode_securite" (
    "id" BIGSERIAL NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "actif" BOOLEAN NOT NULL DEFAULT false,
    "date_activation" TIMESTAMP(3),
    "date_desactivation" TIMESTAMP(3),

    CONSTRAINT "mode_securite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enregistrement_audio" (
    "id" BIGSERIAL NOT NULL,
    "course_id" BIGINT NOT NULL,
    "heure_debut" TIMESTAMP(3) NOT NULL,
    "heure_fin" TIMESTAMP(3),
    "url_audio" VARCHAR(500) NOT NULL,

    CONSTRAINT "enregistrement_audio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transcription_audio" (
    "id" BIGSERIAL NOT NULL,
    "enregistrement_id" BIGINT NOT NULL,
    "texte" TEXT NOT NULL,
    "horodatage" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transcription_audio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analyse_securite" (
    "id" BIGSERIAL NOT NULL,
    "course_id" BIGINT NOT NULL,
    "score_risque" DECIMAL(5,2) NOT NULL,
    "niveau_risque" VARCHAR(50) NOT NULL,
    "resume" TEXT NOT NULL,
    "date_analyse" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "analyse_securite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alerte_securite" (
    "id" BIGSERIAL NOT NULL,
    "course_id" BIGINT NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "type_alerte" VARCHAR(100) NOT NULL,
    "niveau_risque" VARCHAR(50) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "message" VARCHAR(500),
    "statut" VARCHAR(50) NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alerte_securite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" BIGSERIAL NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "titre" VARCHAR(200) NOT NULL,
    "message" TEXT NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "lu" BOOLEAN NOT NULL DEFAULT false,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_de__lecture" TIMESTAMP(3),

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evaluation_chauffeur" (
    "id" BIGSERIAL NOT NULL,
    "course_id" BIGINT NOT NULL,
    "client_id" BIGINT NOT NULL,
    "chauffeur_id" BIGINT NOT NULL,
    "note" INTEGER NOT NULL,
    "commentaire" TEXT,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "evaluation_chauffeur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evaluation_client" (
    "id" BIGSERIAL NOT NULL,
    "course_id" BIGINT NOT NULL,
    "chauffeur_id" BIGINT NOT NULL,
    "client_id" BIGINT NOT NULL,
    "note" INTEGER NOT NULL,
    "commentaire" TEXT,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "evaluation_client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "administrateur" (
    "id" BIGSERIAL NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "niveau" VARCHAR(50) NOT NULL,

    CONSTRAINT "administrateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "journal_audit" (
    "id" BIGSERIAL NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "action" VARCHAR(200) NOT NULL,
    "date_action" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "journal_audit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarification" (
    "id" BIGSERIAL NOT NULL,
    "type_vehicule_id" BIGINT NOT NULL,
    "prix_depart" DECIMAL(12,2) NOT NULL,
    "prix_km" DECIMAL(12,2) NOT NULL,
    "prix_minimum" DECIMAL(12,2) NOT NULL,
    "commission" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "tarification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "utilisateur_email_key" ON "utilisateur"("email");

-- CreateIndex
CREATE INDEX "utilisateur_telephone_idx" ON "utilisateur"("telephone");

-- CreateIndex
CREATE INDEX "utilisateur_email_idx" ON "utilisateur"("email");

-- CreateIndex
CREATE INDEX "utilisateur_date_creation_idx" ON "utilisateur"("date_creation");

-- CreateIndex
CREATE UNIQUE INDEX "role_nom_key" ON "role"("nom");

-- CreateIndex
CREATE INDEX "utilisateur_role_utilisateur_id_idx" ON "utilisateur_role"("utilisateur_id");

-- CreateIndex
CREATE INDEX "utilisateur_role_role_id_idx" ON "utilisateur_role"("role_id");

-- CreateIndex
CREATE UNIQUE INDEX "utilisateur_role_utilisateur_id_role_id_key" ON "utilisateur_role"("utilisateur_id", "role_id");

-- CreateIndex
CREATE UNIQUE INDEX "client_utilisateur_id_key" ON "client"("utilisateur_id");

-- CreateIndex
CREATE INDEX "client_statut_idx" ON "client"("statut");

-- CreateIndex
CREATE INDEX "client_est_en_ligne_idx" ON "client"("est_en_ligne");

-- CreateIndex
CREATE INDEX "contact_urgence_utilisateur_id_idx" ON "contact_urgence"("utilisateur_id");

-- CreateIndex
CREATE INDEX "localisation_utilisateur_id_idx" ON "localisation"("utilisateur_id");

-- CreateIndex
CREATE INDEX "localisation_latitude_longitude_idx" ON "localisation"("latitude", "longitude");

-- CreateIndex
CREATE UNIQUE INDEX "chauffeur_utilisateur_id_key" ON "chauffeur"("utilisateur_id");

-- CreateIndex
CREATE INDEX "chauffeur_statut_idx" ON "chauffeur"("statut");

-- CreateIndex
CREATE INDEX "chauffeur_est_en_ligne_idx" ON "chauffeur"("est_en_ligne");

-- CreateIndex
CREATE UNIQUE INDEX "type_vehicule_nom_key" ON "type_vehicule"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "vehicule_matricule_key" ON "vehicule"("matricule");

-- CreateIndex
CREATE INDEX "vehicule_chauffeur_id_idx" ON "vehicule"("chauffeur_id");

-- CreateIndex
CREATE INDEX "vehicule_type_vehicule_id_idx" ON "vehicule"("type_vehicule_id");

-- CreateIndex
CREATE INDEX "vehicule_statut_idx" ON "vehicule"("statut");

-- CreateIndex
CREATE INDEX "document_chauffeur_chauffeur_id_idx" ON "document_chauffeur"("chauffeur_id");

-- CreateIndex
CREATE INDEX "document_chauffeur_statut_idx" ON "document_chauffeur"("statut");

-- CreateIndex
CREATE INDEX "document_vehicule_statut_idx" ON "document_vehicule"("statut");

-- CreateIndex
CREATE INDEX "document_vehicule_vehicule_id_idx" ON "document_vehicule"("vehicule_id");

-- CreateIndex
CREATE INDEX "course_chauffeur_id_idx" ON "course"("chauffeur_id");

-- CreateIndex
CREATE INDEX "course_vehicule_id_idx" ON "course"("vehicule_id");

-- CreateIndex
CREATE INDEX "course_statut_idx" ON "course"("statut");

-- CreateIndex
CREATE INDEX "course_date_creation_idx" ON "course"("date_creation");

-- CreateIndex
CREATE INDEX "proposition_prix_course_id_idx" ON "proposition_prix"("course_id");

-- CreateIndex
CREATE INDEX "proposition_prix_client_id_idx" ON "proposition_prix"("client_id");

-- CreateIndex
CREATE INDEX "proposition_prix_chauffeur_id_idx" ON "proposition_prix"("chauffeur_id");

-- CreateIndex
CREATE INDEX "proposition_prix_statut_idx" ON "proposition_prix"("statut");

-- CreateIndex
CREATE INDEX "demande_partage_course_course_id_idx" ON "demande_partage_course"("course_id");

-- CreateIndex
CREATE INDEX "demande_partage_course_client_demandeur_id_idx" ON "demande_partage_course"("client_demandeur_id");

-- CreateIndex
CREATE INDEX "demande_partage_course_statut_idx" ON "demande_partage_course"("statut");

-- CreateIndex
CREATE INDEX "participant_course_course_id_idx" ON "participant_course"("course_id");

-- CreateIndex
CREATE INDEX "participant_course_client_id_idx" ON "participant_course"("client_id");

-- CreateIndex
CREATE INDEX "participant_course_statut_idx" ON "participant_course"("statut");

-- CreateIndex
CREATE INDEX "paiement_course_id_idx" ON "paiement"("course_id");

-- CreateIndex
CREATE INDEX "paiement_participant_course_id_idx" ON "paiement"("participant_course_id");

-- CreateIndex
CREATE INDEX "paiement_statut_idx" ON "paiement"("statut");

-- CreateIndex
CREATE INDEX "paiement_reference_transaction_idx" ON "paiement"("reference_transaction");

-- CreateIndex
CREATE INDEX "position_chauffeur_chauffeur_id_idx" ON "position_chauffeur"("chauffeur_id");

-- CreateIndex
CREATE INDEX "position_chauffeur_date_position_idx" ON "position_chauffeur"("date_position");

-- CreateIndex
CREATE INDEX "position_chauffeur_latitude_longitude_idx" ON "position_chauffeur"("latitude", "longitude");

-- CreateIndex
CREATE UNIQUE INDEX "mode_securite_utilisateur_id_key" ON "mode_securite"("utilisateur_id");

-- CreateIndex
CREATE INDEX "mode_securite_actif_idx" ON "mode_securite"("actif");

-- CreateIndex
CREATE INDEX "enregistrement_audio_course_id_idx" ON "enregistrement_audio"("course_id");

-- CreateIndex
CREATE INDEX "transcription_audio_enregistrement_id_idx" ON "transcription_audio"("enregistrement_id");

-- CreateIndex
CREATE INDEX "analyse_securite_course_id_idx" ON "analyse_securite"("course_id");

-- CreateIndex
CREATE INDEX "analyse_securite_niveau_risque_idx" ON "analyse_securite"("niveau_risque");

-- CreateIndex
CREATE INDEX "alerte_securite_course_id_idx" ON "alerte_securite"("course_id");

-- CreateIndex
CREATE INDEX "alerte_securite_utilisateur_id_idx" ON "alerte_securite"("utilisateur_id");

-- CreateIndex
CREATE INDEX "alerte_securite_statut_idx" ON "alerte_securite"("statut");

-- CreateIndex
CREATE INDEX "notification_utilisateur_id_idx" ON "notification"("utilisateur_id");

-- CreateIndex
CREATE INDEX "notification_lu_idx" ON "notification"("lu");

-- CreateIndex
CREATE INDEX "notification_type_idx" ON "notification"("type");

-- CreateIndex
CREATE INDEX "notification_date_creation_idx" ON "notification"("date_creation");

-- CreateIndex
CREATE INDEX "evaluation_chauffeur_course_id_idx" ON "evaluation_chauffeur"("course_id");

-- CreateIndex
CREATE INDEX "evaluation_chauffeur_client_id_idx" ON "evaluation_chauffeur"("client_id");

-- CreateIndex
CREATE INDEX "evaluation_chauffeur_chauffeur_id_idx" ON "evaluation_chauffeur"("chauffeur_id");

-- CreateIndex
CREATE INDEX "evaluation_client_course_id_idx" ON "evaluation_client"("course_id");

-- CreateIndex
CREATE INDEX "evaluation_client_chauffeur_id_idx" ON "evaluation_client"("chauffeur_id");

-- CreateIndex
CREATE INDEX "evaluation_client_client_id_idx" ON "evaluation_client"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "administrateur_utilisateur_id_key" ON "administrateur"("utilisateur_id");

-- CreateIndex
CREATE INDEX "journal_audit_utilisateur_id_idx" ON "journal_audit"("utilisateur_id");

-- CreateIndex
CREATE INDEX "journal_audit_date_action_idx" ON "journal_audit"("date_action");

-- CreateIndex
CREATE INDEX "tarification_type_vehicule_id_idx" ON "tarification"("type_vehicule_id");

-- AddForeignKey
ALTER TABLE "utilisateur_role" ADD CONSTRAINT "utilisateur_role_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "utilisateur_role" ADD CONSTRAINT "utilisateur_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_urgence" ADD CONSTRAINT "contact_urgence_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "client"("utilisateur_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "localisation" ADD CONSTRAINT "localisation_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chauffeur" ADD CONSTRAINT "chauffeur_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicule" ADD CONSTRAINT "vehicule_chauffeur_id_fkey" FOREIGN KEY ("chauffeur_id") REFERENCES "chauffeur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicule" ADD CONSTRAINT "vehicule_type_vehicule_id_fkey" FOREIGN KEY ("type_vehicule_id") REFERENCES "type_vehicule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_chauffeur" ADD CONSTRAINT "document_chauffeur_chauffeur_id_fkey" FOREIGN KEY ("chauffeur_id") REFERENCES "chauffeur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_vehicule" ADD CONSTRAINT "document_vehicule_vehicule_id_fkey" FOREIGN KEY ("vehicule_id") REFERENCES "vehicule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_chauffeur_id_fkey" FOREIGN KEY ("chauffeur_id") REFERENCES "chauffeur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_vehicule_id_fkey" FOREIGN KEY ("vehicule_id") REFERENCES "vehicule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proposition_prix" ADD CONSTRAINT "proposition_prix_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proposition_prix" ADD CONSTRAINT "proposition_prix_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proposition_prix" ADD CONSTRAINT "proposition_prix_chauffeur_id_fkey" FOREIGN KEY ("chauffeur_id") REFERENCES "chauffeur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "demande_partage_course" ADD CONSTRAINT "demande_partage_course_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "demande_partage_course" ADD CONSTRAINT "demande_partage_course_client_demandeur_id_fkey" FOREIGN KEY ("client_demandeur_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participant_course" ADD CONSTRAINT "participant_course_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participant_course" ADD CONSTRAINT "participant_course_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paiement" ADD CONSTRAINT "paiement_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paiement" ADD CONSTRAINT "paiement_participant_course_id_fkey" FOREIGN KEY ("participant_course_id") REFERENCES "participant_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position_chauffeur" ADD CONSTRAINT "position_chauffeur_chauffeur_id_fkey" FOREIGN KEY ("chauffeur_id") REFERENCES "chauffeur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mode_securite" ADD CONSTRAINT "mode_securite_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enregistrement_audio" ADD CONSTRAINT "enregistrement_audio_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transcription_audio" ADD CONSTRAINT "transcription_audio_enregistrement_id_fkey" FOREIGN KEY ("enregistrement_id") REFERENCES "enregistrement_audio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "analyse_securite" ADD CONSTRAINT "analyse_securite_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerte_securite" ADD CONSTRAINT "alerte_securite_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerte_securite" ADD CONSTRAINT "alerte_securite_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluation_chauffeur" ADD CONSTRAINT "evaluation_chauffeur_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluation_chauffeur" ADD CONSTRAINT "evaluation_chauffeur_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluation_chauffeur" ADD CONSTRAINT "evaluation_chauffeur_chauffeur_id_fkey" FOREIGN KEY ("chauffeur_id") REFERENCES "chauffeur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluation_client" ADD CONSTRAINT "evaluation_client_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluation_client" ADD CONSTRAINT "evaluation_client_chauffeur_id_fkey" FOREIGN KEY ("chauffeur_id") REFERENCES "chauffeur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluation_client" ADD CONSTRAINT "evaluation_client_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "administrateur" ADD CONSTRAINT "administrateur_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_audit" ADD CONSTRAINT "journal_audit_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tarification" ADD CONSTRAINT "tarification_type_vehicule_id_fkey" FOREIGN KEY ("type_vehicule_id") REFERENCES "type_vehicule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
