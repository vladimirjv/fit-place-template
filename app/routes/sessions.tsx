import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { SessionsSelect, getSessions } from "~/db/Sessions/handler";
import DefaultLayout from "~/layout/default-auth";
import { formatDate, getNextAvailableDays } from "~/lib/time";

export const loader: LoaderFunction = async () => {
  const sessions = await getSessions();

  return json({ sessions })
}

export default function Sessions() {
  const { sessions } = useLoaderData<{ sessions: SessionsSelect[] }>();
  const daysAvailable = getNextAvailableDays(3);

  return (
    <DefaultLayout>
      <div className="col-span-full flex flex-row justify-center gap-4 mt-8">
        {daysAvailable.map((day, index) => (
          <div key={index} className="text-wrap max-w-28 rounded-lg p-2 border bg-card text-center text-card-foreground shadow-sm">{formatDate(day)}</div>
        ))}
      </div>
      <section id="sessions-registers" className="col-span-full mt-3">
        <div className="flex flex-col items-start gap-3">
          {sessions.map((session, index) => (
            // <div key={index} className="flex-1 flex flex-row justify-center gap-4 ">
            <div key={index} className="flex-1 w-full flex flex-col gap-2 text-wrap rounded-lg p-5 border bg-card text-card-foreground shadow-sm">
              <span className="text-sm">{session.start_time} - {session.end_time}</span>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-muted-foreground">Coach name</span>
                </div>
                <Button variant="outline">Register</Button>
              </div>
              <span className="text-muted-foreground text-lg">10 places available</span>
            </div>
            // </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  )
}