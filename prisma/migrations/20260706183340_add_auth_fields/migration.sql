-- AlterTable : champs auth sur utilisateur
ALTER TABLE "utilisateur" ADD COLUMN "mot_de_passe" VARCHAR(255);
ALTER TABLE "utilisateur" ADD COLUMN "otpCode" TEXT;
ALTER TABLE "utilisateur" ADD COLUMN "otpExpiresAt" TIMESTAMP(3);
ALTER TABLE "utilisateur" ADD COLUMN "refreshToken" TEXT;
ALTER TABLE "utilisateur" ADD COLUMN "resetPasswordExpires" TIMESTAMP(3);
ALTER TABLE "utilisateur" ADD COLUMN "resetPasswordOtp" TEXT;

-- Mot de passe par défaut pour les comptes seed existants : Password123!
UPDATE "utilisateur"
SET "mot_de_passe" = '$2b$12$M8lYtIiqrEMYWnf4phtdreOTZA2P4XQSNWOIBnRxIsYekeYFi0V4y'
WHERE "mot_de_passe" IS NULL;

ALTER TABLE "utilisateur" ALTER COLUMN "mot_de_passe" SET NOT NULL;
