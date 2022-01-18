import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { config } from 'dotenv';
import { initDatabase } from "./database";
import { resolvers } from "./resolvers";
import express = require("express");
import TokenEntity from "./database/entity/token";
config();

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  console.debug("initialize database");
  await initDatabase();
  const schema = await buildSchema({
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    introspection: true,
    context: async ({ req }) => {
      console.log("context being created");
      const tokenCode = req.headers.authorization || '';

      const token = await TokenEntity.findOne({
        where: {
          token: tokenCode,
        },
        relations: ["user"],
      })
      console.log("token", token);

      return {
        token: token
      };
    },
  });
  await server.start()

  const app = express();
  app.get('/', (req, res) => {
    res.write("Renovo Portal API\n");
    res.end();
  })
  server.applyMiddleware({
    app,
    path: '/api/graphql'
  });

  const port = PORT;

  app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
}

bootstrap();