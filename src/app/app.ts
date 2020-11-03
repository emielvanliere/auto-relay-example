import "reflect-metadata";
import * as express from "express";
import { buildApolloServer } from "./schema";
import { AutoRelayConfig } from "auto-relay";
import { TypeOrmConnection } from "@auto-relay/typeorm/lib/type-orm-connection";

const bootstrap = async () => {
  const app = express();

  const apolloServer = await buildApolloServer();
  apolloServer.applyMiddleware({ app });

  new AutoRelayConfig({ orm: () => TypeOrmConnection });

  return app;
};

export default bootstrap;
