/*
  Warnings:

  - Added the required column `userID` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "post" ADD COLUMN     "userID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_userID_fkey" FOREIGN KEY ("userID") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
