import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { GraphQLJSON } from 'graphql-type-json';
import { SlotMachine } from './SlotMachine.js';
const app = express();
const port = 4000;
const slotMachine = new SlotMachine(5000, 'USD');
const typeDefs = gql `
  scalar JSON
  type Query {
    hello: String
    spin: JSON!
  }
`;
const resolvers = {
    JSON: GraphQLJSON,
    Query: {
        hello: () => 'Hello, world!',
        spin: slotMachine.spin,
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
server.applyMiddleware({ app });
app.listen({ port }, () => console.log(`Server running at http://localhost:${port}${server.graphqlPath}`));
//# sourceMappingURL=index_graphql.js.map