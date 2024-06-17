import { defineConfig } from "drizzle-kit";
import { env } from "./env";

export default defineConfig({
  dialect: "mysql",
  out: "./drizzle",
  schema: "./db/schema.ts",
  dbCredentials: {
    host: env.DB_HOST,
    user: env.DB_USER,
    database: env.DB_DATABASE,
  },
  verbose: true,
  strict: true,
});
