import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import { Order } from "../models";

const config: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "password",
  database: process.env.POSTGRES_DB || "order_db",
  entities: [Order],
  synchronize: true,
  //namingStrategy: new SnakeNamingStrategy(),
  migrations: ["build/migrations/*.js"],
  cli: {
    migrationsDir: "src/migrations",
  },
};

export default config;
