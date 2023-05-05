/*
  Warnings:

  - You are about to drop the column `sort` on the `Notes` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "autor" TEXT NOT NULL
);
INSERT INTO "new_Notes" ("autor", "id", "text") SELECT "autor", "id", "text" FROM "Notes";
DROP TABLE "Notes";
ALTER TABLE "new_Notes" RENAME TO "Notes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
