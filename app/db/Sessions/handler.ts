import { sessions } from './schema';
import { db } from "../config.server"
import dayjs from "dayjs"
import { timeStringToNumber } from '~/lib/time';

// function that gets and array an split into two arrays, for morning and afternoon classes
export const splitClasses = (classes: SessionsSelect[]) => {
  const morningClasses = classes.filter(c => timeStringToNumber(c.start_time as string).hour() < 12)
  const afternoonClasses = classes.filter(c => timeStringToNumber(c.start_time as string).hour() >= 12)
  return { morningClasses, afternoonClasses };
  // return classes
}

export type SessionsSelect = typeof sessions.$inferSelect

export const getSessions = async () => {
  const classes = await db.query.sessions.findMany().execute();
  return classes.sort((a, b) => {
    return dayjs(b.start_time, 'H:mm').unix() - dayjs(a.start_time, 'H:mm').unix()
  })
}
