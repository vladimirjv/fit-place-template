import { classes } from './schema';
import { db } from "../config.server"
import dayjs from "dayjs"
import { timeStringToNumber } from '~/lib/time';

// function that gets and array an split into two arrays, for morning and afternoon classes
export const splitClasses = (classes: ClassesSelect[]) => {
  const morningClasses = classes.filter(c => timeStringToNumber(c.start_time as string).hour() < 12)
  const afternoonClasses = classes.filter(c => timeStringToNumber(c.start_time as string).hour() >= 12)
  return { morningClasses, afternoonClasses };
  // return classes
}

export type ClassesSelect = typeof classes.$inferSelect

export const getClasses = async () => {
  const classes = await db.query.classes.findMany().execute();
  return classes.sort((a, b) => {
    return dayjs(b.start_time, 'H:mm').unix() - dayjs(a.start_time, 'H:mm').unix()
  })
}
