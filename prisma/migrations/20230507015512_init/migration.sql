-- CreateTable
CREATE TABLE "users" (
    "id" CHAR(27) NOT NULL DEFAULT ksuid_pgcrypto_micros(),
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMPTZ(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id"),
    
    CHECK ("users"."updatedAt" >= "users"."createdAt" and "users"."expiresAt" >= "users"."createdAt")
);
