// Attendance Schema, fields: id, createdAt, updatedAt, userId, date, and relations: sessinonId

import { integer, text } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "../shared";
import { sql } from "drizzle-orm";
import { sessions } from "../Sessions/schema";

export const attendance = sqliteTable('attendance', {
  id: integer('id', { mode: "number" }).primaryKey({ autoIncrement: true }),
  createdAt: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').notNull().default(sql`CURRENT_TIMESTAMP`),
  userId: integer('user_id', { mode: "number" }).notNull(),
  date: text('date').notNull(),
  sessionId: integer('session_id', { mode: "number" }).notNull().references(() => sessions.id),
});