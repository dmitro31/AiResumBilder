/*
  Warnings:

  - Changed the type of `skills` on the `Resume` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `experience` on the `Resume` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Resume" DROP COLUMN "skills",
ADD COLUMN     "skills" JSONB NOT NULL,
DROP COLUMN "experience",
ADD COLUMN     "experience" JSONB NOT NULL;
