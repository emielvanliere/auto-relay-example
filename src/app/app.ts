import "reflect-metadata";
import * as express from "express";
import { buildApolloServer } from "./schema";
import { AutoRelayConfig } from "auto-relay";
import { TypeOrmConnection } from "@auto-relay/typeorm/lib/type-orm-connection";
import { createConnection } from "typeorm";
import { User } from "../entities/User";
import { Recipe } from "../entities/Recipe";

const bootstrap = async () => {
  await createConnection({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    dropSchema: true,
    entities: [User, Recipe],
  });

  const app = express();

  const apolloServer = await buildApolloServer();
  apolloServer.applyMiddleware({ app });

  new AutoRelayConfig({ orm: () => TypeOrmConnection });

  return app;
};

export default bootstrap;
