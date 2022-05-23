/*
  Warnings:

  - You are about to drop the `Explorer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Explorer";

-- CreateTable
CREATE TABLE "explorer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "mission" VARCHAR(255) NOT NULL,
    "azureCertification" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "explorer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "explorer_name_key" ON "explorer"("name");
