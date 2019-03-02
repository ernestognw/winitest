import app from "./app";
import Debug from "debug";
import { port, mongoUrl } from "./config/index";
import mongoose from "mongoose";

const debug = new Debug("winitest-server:root");

// Remove warning message from promise of mongoose
mongoose.Promise = global.Promise;

async function start() {
  debug(`🔥  Connecting with database: ${mongoUrl}`);
  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
  });

  app.listen(port);
  debug(`🚀  Server running at port: ${port}`);

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
}

start();
