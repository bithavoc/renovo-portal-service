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
  // const vacStore = new VacStore();
  // await vacStore.load()
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
      let tokenCode: string = req.headers.authorization || '';
      const tokenParts = tokenCode.split(' ');
      if (tokenParts.length > 1) {
        tokenCode = tokenParts[1];
      }

      const token = await TokenEntity.findOne({
        where: {
          token: tokenCode,
        },
        relations: ["user"],
      })
      console.log("token", token);

      return {
        token,
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
    path: '/api/graphql',
    cors: {
      origin: "*",
      credentials: true,
    }
  });

  const port = PORT;

  const hserver = app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  );

  process.on('SIGINT', function () {
    console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
    server.stop()
    hserver.close();
    process.exit(0)
  })
}

bootstrap().then(() => console.log("entrypoint finished ok")).catch(e => {
  console.error("entrypoint failed", e);
  process.exit(1);
});
