-- CreateTable
CREATE TABLE "League" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "telegramChatId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "League_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" INTEGER NOT NULL,
    "playerName" TEXT NOT NULL,
    "teamName" TEXT NOT NULL,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeagueMember" (
    "leagueId" INTEGER NOT NULL,
    "managerId" INTEGER NOT NULL,

    CONSTRAINT "LeagueMember_pkey" PRIMARY KEY ("leagueId","managerId")
);

-- CreateTable
CREATE TABLE "Gameweek" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "deadlineTime" TIMESTAMP(3) NOT NULL,
    "finished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Gameweek_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManagerGameweek" (
    "managerId" INTEGER NOT NULL,
    "gameweekId" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "totalPoints" INTEGER NOT NULL,
    "transferCost" INTEGER NOT NULL,
    "benchPoints" INTEGER NOT NULL,

    CONSTRAINT "ManagerGameweek_pkey" PRIMARY KEY ("managerId","gameweekId")
);

-- CreateIndex
CREATE UNIQUE INDEX "League_telegramChatId_key" ON "League"("telegramChatId");

-- AddForeignKey
ALTER TABLE "LeagueMember" ADD CONSTRAINT "LeagueMember_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeagueMember" ADD CONSTRAINT "LeagueMember_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagerGameweek" ADD CONSTRAINT "ManagerGameweek_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagerGameweek" ADD CONSTRAINT "ManagerGameweek_gameweekId_fkey" FOREIGN KEY ("gameweekId") REFERENCES "Gameweek"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
