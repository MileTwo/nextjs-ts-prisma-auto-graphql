import { PrismaClient } from '../services/prisma';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            DATABASE_URL: string;
        }

        interface Global {
            prisma: PrismaClient;
        }
    }
}

export {};
