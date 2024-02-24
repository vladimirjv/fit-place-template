import type { Config } from "drizzle-kit";
// import 'dotenv/config';
// console.log(process.env.DATABASE_URL);

export default {
  schema: "./app/db/**/schema.ts",
  out: "./drizzle",
  driver: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    authToken: process.env.DATABASE_AUTH_TOKEN || "",
  }
} satisfies Config;