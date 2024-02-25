import { integer, text } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "../shared";
import { sql } from "drizzle-orm";

//drizzle schema for crossfit classes, fields: id, created_at, updated_at, start_time, end_time
export const classes = sqliteTable('classes', {
  id: integer('id', { mode: "number" }).primaryKey({ autoIncrement: true }),
  created_at: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
  updated_at: text('updated_at').notNull().default(sql`CURRENT_TIMESTAMP`),
  start_time: text('start_time'),
  end_time: text('end_time'),
});