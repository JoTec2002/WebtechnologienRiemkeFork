/*
  Warnings:

  - Added the required column `sort` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "sort" INTEGER NOT NULL
);
INSERT INTO "new_Notes" ("autor", "id", "text") SELECT "autor", "id", "text" FROM "Notes";
DROP TABLE "Notes";
ALTER TABLE "new_Notes" RENAME TO "Notes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
