import 'reflect-metadata';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers as generatedResolvers } from '@generated/type-graphql';
import { BuildSchemaOptions, buildSchemaSync, createResolversMap } from 'type-graphql';
import { printSchema } from 'graphql';

function buildTypeDefsAndResolversSync(options: BuildSchemaOptions) {
    const schema = buildSchemaSync(options);
    const typeDefs = printSchema(schema);
    const resolvers = createResolversMap(schema);
    return { typeDefs, resolvers };
}

export const { resolvers, typeDefs } = buildTypeDefsAndResolversSync({
    resolvers: [...generatedResolvers],
    // scalarsMap: [{ type: Date, scalar: DateTimeResolver }],
    validate: false,
});

export default makeExecutableSchema({
    typeDefs,
    resolvers,
});
