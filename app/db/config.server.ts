// ! Turso config for drizzle-orm
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { wods } from './WOD/schema';

const client = createClient({ url: process.env.DATABASE_URL || "", authToken: process.env.DATABASE_AUTH_TOKEN });

export const db = drizzle(client, {
  logger: process.env.NODE_ENV === 'development',
  schema: {
    wods
  }
});

// const result = await db.select().from(users).all()

// ! local config for drizzle-orm
// import { drizzle } from "drizzle-orm/better-sqlite3"
// import { migrate } from "drizzle-orm/better-sqlite3/migrator"
// import Database from "better-sqlite3"
// if (!process.env.DATABASE_PATH) {
//   throw new Error(
//     "Missing environment variable: DATABASE_PATH",
//   )
// }
// export const db = drizzle(
//   new Database(process.env.DATABASE_PATH),
// )
// // Automatically run migrations on startup
// void migrate(db, {
//   migrationsFolder: "app/drizzle/migrations",
// })