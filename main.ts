import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { config } from 'dotenv';
import { initDatabase } from "./database";
import { resolvers } from "./resolvers";
import express = require("express");
import TokenEntity from "./database/entity/token";
import { Api } from "./externalServices/vac/vac-sdk";
config();

const createVeamClient = (token: string) => new Api({
  baseUrl: "https://vac.renovodata.com/api/v3",
  baseApiParams: {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
});

async function hola() {
  const vac = createVeamClient(process.env.VAC_AT);
  const companiesRes = await vac.organizations.getCompanies()
  if (companiesRes.error) {
    throw new Error('failed to fetch companies');
  }
  console.log("companies", companiesRes.error, companiesRes.data);
}

hola().then(() => { });


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

bootstrap();