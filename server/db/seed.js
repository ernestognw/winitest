import Debug from "debug";
import mongoose from "mongoose";
import targets from "./seeds/targets.json";
import problems from "./seeds/problems.json";
import categories from "./seeds/categories.json";
import technologies from "./seeds/technologies.json";
import advantages from "./seeds/advantages.json";
import { Target, Problem, Advantage, Technology, Category } from "./models";
import { mongoUrl } from "../config";

const debug = new Debug("bam-api:db");

const seed = async () => {
  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  debug("🌱  Seeding...");

  // Seed target
  await Target.insertMany(targets);

  // Seed problems
  await Problem.insertMany(problems);

  // Seed categories
  await Category.insertMany(categories);

  // Seed technologies
  await Technology.insertMany(technologies);

  // Seed advantages
  await Advantage.insertMany(advantages);

  mongoose.connection.close();
  debug("🤟  Database seeded!");
};

seed();
