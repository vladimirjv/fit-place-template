import dayjs from "dayjs";

export const timeStringToNumber = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return dayjs().set('hour', hours).set('minute', minutes).set('second', 0).set('millisecond', 0)
}