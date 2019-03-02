// Express stuff
import express from "express";

// Graphql stuff
import server from "./graphql";

const app = express();

// Middlewares
app.use(express.json());
server.applyMiddleware({ app });

export default app;
