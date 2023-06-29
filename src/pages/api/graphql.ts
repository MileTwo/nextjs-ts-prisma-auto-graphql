import 'reflect-metadata';

import { NextApiRequest, NextApiResponse } from 'next';
import { createYoga } from 'graphql-yoga';

import { GraphQLContext } from 'src/server/graphql/context';
import prisma from 'src/services/prisma';
import { buildSchema } from 'type-graphql';
import { resolvers } from '@generated/type-graphql';

export const config = {
    api: {
        bodyParser: false,
        responseLimit: '20mb',
    },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const schema = await buildSchema({
        resolvers: [...resolvers],
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
