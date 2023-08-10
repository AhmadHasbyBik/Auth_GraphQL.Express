import "reflect-metadata";
import "dotenv/config"
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql"; 
import { UserResolver } from "./UserResolver";
import { createConnection } from "typeorm";
import cors from "cors";
import cookieParser from "cookie-parser";

(async () => {
  const app = express();
  app.use(cors());
  app.use(cookieParser());
  app.get("/", (_req, res) => res.send("hello"));

  await createConnection();
  
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const apolloServer = new ApolloServer({
    schema, // Use the schema you built
    context: ({req, res}) => ({req, res}),
    
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Running at port 4000");
  });
})();