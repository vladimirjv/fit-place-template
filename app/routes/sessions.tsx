import DefaultLayout from "~/layout/default-auth";
import { formatDate, getNextAvailableDays } from "~/lib/time";

export default function Sessions() {
  const daysAvailable = getNextAvailableDays(3);

  return (
    <DefaultLayout>
      <div className="col-span-full flex flex-row justify-center gap-4 mt-8">
        {daysAvailable.map((day, index) => (
          <div key={index} className="text-wrap max-w-28 rounded-lg p-2 border bg-card text-center text-card-foreground shadow-sm">{formatDate(day)}</div>
        ))}
      </div>
      
    </DefaultLayout>
  )
}