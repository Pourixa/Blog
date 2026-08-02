-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_postID_fkey";

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_postID_fkey" FOREIGN KEY ("postID") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
