import { PrismaClient } from '@prisma/client';

import { tools } from '../lib/tools';
const prisma = new PrismaClient();
async function main() {
    for (const tool of tools) {
        await prisma.tool.upsert({
            where: {
                name: tool.name,
            },
            create: tool,
            update: tool,
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
