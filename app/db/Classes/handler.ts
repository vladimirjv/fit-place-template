import { db } from "../config.server"
import dayjs from "dayjs"

export const getClasses = async () => {
  const classes = await db.query.classes.findMany().execute();
  return classes.sort((a, b) => {
    return dayjs(b.start_time, 'H:mm').unix() - dayjs(a.start_time, 'H:mm').unix()
  })
}
