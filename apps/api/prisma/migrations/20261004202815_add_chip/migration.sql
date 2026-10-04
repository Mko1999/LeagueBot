/*
  Warnings:

  - You are about to drop the column `chip` on the `Gameweek` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Gameweek" DROP COLUMN "chip";

-- AlterTable
ALTER TABLE "ManagerGameweek" ADD COLUMN     "chip" TEXT;
