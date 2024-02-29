import { LoaderFunction, json } from "@remix-run/node";
import dayjs from "dayjs";
import WorkoutFullStory from "~/components/sections/workout-full";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { getSessions } from "~/db/Sessions/handler";
import DefaultLayout from "~/layout/default-auth";
import { getNextAvailableDays } from "~/lib/time";

export const loader: LoaderFunction = async () => {
  const sessions = await getSessions();

  return json({ sessions })
}

export default function WodSessions() {
  const daysAvailable = getNextAvailableDays(3);

  return (
    <DefaultLayout>
      <Tabs className="flex flex-col py-4" data-testid="tabs-days" defaultValue="0">
        <TabsList className="flex-1 gap-4 max-h-20 min-h-max bg-inherit" data-testid="tabs-list-days">
          {daysAvailable.map((day, index) => (
            <TabsTrigger key={index} value={String(index)} className="text-center basis-1/3 tablet:basis-1/4 rounded-lg p-2 border data-[state=active]:bg-muted">
              <div key={index} className="flex flex-col text-wrap">
                <span className="">{dayjs(day).format('ddd')}</span>
                <span className="">{dayjs(day).format('DD')}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {daysAvailable.map((day, index) => (
          <TabsContent key={index} value={String(index)}>
            <WorkoutFullStory workout={null} date={day} />
          </TabsContent>
        ))}
      </Tabs>
    </DefaultLayout>
  )
}