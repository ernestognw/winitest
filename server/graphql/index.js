import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";
import { importSchema } from "graphql-import";
import path from "path";

const typeDefs = importSchema(path.join(__dirname, "./typedefs/index.graphql"));

// Other stuff

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const playgroundSettings = {
  settings: {
    "editor.theme": "dark"
  }
};

const server = new ApolloServer({
  schema,
  context: ({ req }) => req.user,
  playground: playgroundSettings
});

export default server;
