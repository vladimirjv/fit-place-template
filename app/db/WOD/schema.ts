import { sql } from "drizzle-orm";
import { text, sqliteTableCreator, integer } from "drizzle-orm/sqlite-core";

const sqliteTable = sqliteTableCreator((name) => `public.${name}`);

// WODs drizzle schema definition. Fields: id, created_at, updated_at, created_by, content
export const wods = sqliteTable('wods', {
  // id field int autoincrement primary key
  id: integer('id', { mode: "number" }).primaryKey({ autoIncrement: true }),
  created_at: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
  updated_at: text('updated_at').notNull().default(sql`CURRENT_TIMESTAMP`),
  created_by: text('created_by'),
  content: text('content'),
});

export type WODSelect = typeof wods.$inferSelect;
export type WODInsert = typeof wods.$inferInsert;
