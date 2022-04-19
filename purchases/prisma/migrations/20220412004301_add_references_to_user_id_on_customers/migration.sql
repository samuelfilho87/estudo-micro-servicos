/*
  Warnings:

  - A unique constraint covering the columns `[authUserId]` on the table `Purchase` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "authUserId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_authUserId_key" ON "Purchase"("authUserId");
