/*
  Warnings:

  - Added the required column `roleID` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roleID" INTEGER NOT NULL,
ADD COLUMN     "roles" "Role" NOT NULL DEFAULT 'USER';
