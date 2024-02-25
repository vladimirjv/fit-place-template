import { db } from "../config.server"
import { wods } from "./schema"

export const createWOD = async (userId: string, content: string) => {
  return db.insert(wods)
    .values({
      created_by: userId,
      content
    })
    .onConflictDoNothing()
    .execute()
}

export const getWODs = () => {
  // return db.select().from(wods).run();
  return db.query.wods.findMany({
    orderBy: (fields, operators) => [operators.desc(fields.created_at)],
  }).execute()
}