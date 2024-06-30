import { type MySql2Database, drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { env } from "@/env";

export const db = async (): Promise<MySql2Database<
  Record<string, never>
> | null> => {
  try {
    const connection = await mysql.createConnection({
      host: env.DB_HOST,
      user: env.DB_USER,
      database: env.DB_DATABASE,
    });

    const db = drizzle(connection);
    return db;
  } catch (e) {
    console.error(e);
    return null;
  }
};
