-- AlterTable
ALTER TABLE "course" ADD COLUMN     "adresse_arrivee" VARCHAR(500),
ADD COLUMN     "adresse_depart" VARCHAR(500),
ADD COLUMN     "duree_estimee" DECIMAL(10,2),
ADD COLUMN     "latitude_arrivee" DOUBLE PRECISION,
ADD COLUMN     "latitude_depart" DOUBLE PRECISION,
ADD COLUMN     "longitude_arrivee" DOUBLE PRECISION,
ADD COLUMN     "longitude_depart" DOUBLE PRECISION,
ADD COLUMN     "prix_negocie" DECIMAL(12,2);

-- CreateTable
CREATE TABLE "validation_partage_course" (
    "id" BIGSERIAL NOT NULL,
    "demande_partage_id" BIGINT NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "type_validateur" VARCHAR(50) NOT NULL,
    "decision" VARCHAR(50) NOT NULL,
    "commentaire" VARCHAR(500),
    "date_validation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "courseId" BIGINT,

    CONSTRAINT "validation_partage_course_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "validation_partage_course_demande_partage_id_idx" ON "validation_partage_course"("demande_partage_id");

-- CreateIndex
CREATE INDEX "validation_partage_course_utilisateur_id_idx" ON "validation_partage_course"("utilisateur_id");

-- CreateIndex
CREATE INDEX "validation_partage_course_type_validateur_idx" ON "validation_partage_course"("type_validateur");

-- CreateIndex
CREATE INDEX "validation_partage_course_decision_idx" ON "validation_partage_course"("decision");

-- AddForeignKey
ALTER TABLE "validation_partage_course" ADD CONSTRAINT "validation_partage_course_demande_partage_id_fkey" FOREIGN KEY ("demande_partage_id") REFERENCES "demande_partage_course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "validation_partage_course" ADD CONSTRAINT "validation_partage_course_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
