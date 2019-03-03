import dotenv from "dotenv";

dotenv.config();

const env = {
  development: process.env.NODE_ENV === "development",
  test: process.env.NODE_ENV === "test",
  production: process.env.NODE_ENV === "production"
};

const appUrl = process.env.REACT_APP_URL;
const secret = process.env.SECRET;
const mongoUrl = process.env.MONGODB_URI;
const port = process.env.API_PORT;

export {
  secret,
  mongoUrl,
  port,
  env,
  appUrl
};
