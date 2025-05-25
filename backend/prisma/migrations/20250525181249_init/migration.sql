-- CreateTable
CREATE TABLE "CommitHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diff" TEXT NOT NULL,
    "commit_message" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
