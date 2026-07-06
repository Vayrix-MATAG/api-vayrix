/*
  Warnings:

  - You are about to drop the column `otpCode` on the `utilisateur` table. All the data in the column will be lost.
  - You are about to drop the column `otpExpiresAt` on the `utilisateur` table. All the data in the column will be lost.
  - You are about to drop the column `resetPasswordExpires` on the `utilisateur` table. All the data in the column will be lost.
  - You are about to drop the column `resetPasswordOtp` on the `utilisateur` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "utilisateur" DROP COLUMN "otpCode",
DROP COLUMN "otpExpiresAt",
DROP COLUMN "resetPasswordExpires",
DROP COLUMN "resetPasswordOtp";

-- CreateTable
CREATE TABLE "otp" (
    "id" BIGSERIAL NOT NULL,
    "utilisateur_id" BIGINT NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "canal" VARCHAR(20) NOT NULL,
    "type" VARCHAR(30) NOT NULL,
    "expire_at" TIMESTAMP(3) NOT NULL,
    "utilise" BOOLEAN NOT NULL DEFAULT false,
    "tentatives" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "otp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "otp_utilisateur_id_idx" ON "otp"("utilisateur_id");

-- CreateIndex
CREATE INDEX "otp_code_idx" ON "otp"("code");

-- CreateIndex
CREATE INDEX "otp_canal_idx" ON "otp"("canal");

-- CreateIndex
CREATE INDEX "otp_type_idx" ON "otp"("type");

-- AddForeignKey
ALTER TABLE "otp" ADD CONSTRAINT "otp_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;
