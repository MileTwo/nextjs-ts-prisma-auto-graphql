import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { PrismaClient } from '@prisma/client';
import { buildSchema } from 'type-graphql';
import { resolvers } from '@generated/type-graphql';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../services/prisma';

export interface GraphQLContext {
    prisma: PrismaClient;
    req: NextApiRequest;
    res: NextApiResponse;
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const schema = await buildSchema({
        resolvers: [...resolvers],
        validate: false,
    });
    const apolloServer = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
        context: (): GraphQLContext => ({ prisma: prisma(), req, res }),
    });

    await apolloServer.start();

    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res);
}
