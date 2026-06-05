import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { cleanEnv, num, str } from "envalid";
import cors from "cors";

import Router from "./routes";
import dbConfig from "./config/database";

const PORT = Number(process.env.PORT ?? 8002);

const env = cleanEnv(process.env, {
  POSTGRES_DB: str(),
  POSTGRES_HOST: str(),
  POSTGRES_PASSWORD: str(),
  POSTGRES_PORT: num({ default: 5432 }),
  POSTGRES_USER: str(),
});

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(cors());

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(Router);

console.log("PORT =", PORT);
console.log("POSTGRES_HOST =", env.POSTGRES_HOST);
console.log("POSTGRES_DB =", env.POSTGRES_DB);

const connectionOptions: PostgresConnectionOptions = {
  ...dbConfig,
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
};

createConnection(connectionOptions)
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to DB", err);
    process.exit(1);
  });
