import { type MySql2Database, drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { env } from "@/env";

export const connection: { con: mysql.Connection | null } = { con: null };

try {
  connection.con = await mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    database: env.DB_DATABASE,
  });
} catch (e) {
  console.error(e);
}

export const db = async (): Promise<MySql2Database<
  Record<string, never>
> | null> => {
  if (!connection.con) {
    console.warn("Database connection is not established");
    return null;
  }

  try {
    const db = drizzle(connection.con);
    return db;
  } catch (e) {
    console.error(e);
    return null;
  }
};
