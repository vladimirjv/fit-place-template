import { type User } from "@clerk/remix/api.server";
import { sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "../shared";


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
export type WODWithAuthor = WODSelect & { author: User };
export type WODInsert = typeof wods.$inferInsert;
