import { PrismaClient } from '@prisma/client';
export * from '@prisma/client';

export default function prisma(): PrismaClient {
    //@ts-ignore
    globalThis.prisma = globalThis.prisma || new PrismaClient();
    //@ts-ignore
    return globalThis.prisma;
}
