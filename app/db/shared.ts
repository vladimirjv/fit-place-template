import { sqliteTableCreator } from "drizzle-orm/sqlite-core";

export const sqliteTable = sqliteTableCreator((name) => `public.${name}`);