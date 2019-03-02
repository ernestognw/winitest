import Debug from "debug";
import mongoose from "mongoose";
import { Profile, Industry, Problem, Advantage, Technology, Category } from "./models";
import { mongoUrl } from "../config";

const debug = new Debug("winitest-api:db");

const drop = async () => {
  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  debug("🗑  Cleaning Database...");

  // Drop profiles
  await Profile.deleteMany();
  
  // Drop industries
  await Industry.deleteMany();

  // Drop problems
  await Problem.deleteMany();

  // Drop advantages
  await Advantage.deleteMany();

  // Drop technologies
  await Technology.deleteMany();

  // Drop categories
  await Category.deleteMany();

  mongoose.connection.close();
  debug("✅  Database clean!");
};

drop();
