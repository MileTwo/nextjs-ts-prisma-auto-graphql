import 'reflect-metadata';

import { NextApiRequest, NextApiResponse } from 'next';
import { createYoga } from 'graphql-yoga';

import { GraphQLContext } from '@/server/graphql/context';
import { prisma } from '@/services/prisma';
import { resolvers } from '@generated/type-graphql';
import { buildSchema } from 'type-graphql';

export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const schema = buildSchema({
        resolvers,
        validate: false,
    });
    return createYoga<GraphQLContext>({
        schema,
        graphqlEndpoint: '/api/graphql',
        context: {
            prisma,
        },
    })(req, res);
};

export default handler;
