import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

function createPrismaClient(): PrismaClient {
  // If DATABASE_URL is not configured (e.g. during build or static evaluation),
  // provide a fallback connection string to prevent PrismaClient initialization crash.
  const databaseUrl =
    process.env.DATABASE_URL?.trim() ||
    'mysql://placeholder_user:placeholder_pass@localhost:3306/placeholder_db';

  return new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });
}

export const prisma: PrismaClient =
  globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

/**
 * Helper to check if a valid MySQL connection is available
 */
export async function isDatabaseConnected(): Promise<boolean> {
  if (!process.env.DATABASE_URL?.trim()) {
    return false;
  }
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch {
    return false;
  }
}


