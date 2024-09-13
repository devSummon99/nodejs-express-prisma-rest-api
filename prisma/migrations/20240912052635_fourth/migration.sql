-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
