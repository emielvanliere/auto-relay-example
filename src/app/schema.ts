import { ApolloServer, Config } from "apollo-server-express";
import * as TypeGraphQL from "type-graphql";
import { RecipeResolver } from "../resolvers/RecipeResolver";
import { UserResolver } from "../resolvers/UserResolver";

export const buildApolloServer = async () => {
  const schema = await TypeGraphQL.buildSchema({
    resolvers: [UserResolver, RecipeResolver],
  });

  const config: Config = {
    schema,
  };

  return new ApolloServer(config);
};
