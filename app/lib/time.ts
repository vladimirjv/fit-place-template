import dayjs from "dayjs";

export const timeStringToNumber = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return dayjs().set('hour', hours).set('minute', minutes).set('second', 0).set('millisecond', 0)
}

// function that returns the date as formatted string for human readability
export const formatDate = (date: Date) => {
  return dayjs(date).format("dddd D");
}
export function getNextAvailableDays(numDays: number) {
  const today = new Date();
  const availableDays = [];

  // Include today's date
  availableDays.push(today);

  let daysCount = 1;
  while (availableDays.length < numDays) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + daysCount);
    if (nextDay.getDay() !== 0) { // Avoid Sundays
      availableDays.push(nextDay);
      daysCount++;
    }
  }

  return availableDays;
}