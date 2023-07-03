import { PrismaClient } from '@prisma/client';
import { IncomingMessage } from 'http';
import { NextApiResponse } from 'next';

export interface GraphQLContext {
    prisma: PrismaClient;
    req: IncomingMessage;
    res: NextApiResponse;
}
