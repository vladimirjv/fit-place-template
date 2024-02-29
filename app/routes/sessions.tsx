import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import dayjs from "dayjs";
import SessionCard from "~/components/organisms/session-card";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { SessionsSelect, getSessions } from "~/db/Sessions/handler";
import DefaultLayout from "~/layout/default-auth";
import { getNextAvailableDays } from "~/lib/time";

export const loader: LoaderFunction = async () => {
  const sessions = await getSessions();

  return json({ sessions })
}

export default function Sessions() {
  const { sessions } = useLoaderData<{ sessions: SessionsSelect[] }>();
  const daysAvailable = getNextAvailableDays(3);

  return (
    <DefaultLayout>
      <Tabs className="flex flex-col py-4" data-testid="tabs-days" defaultValue="0">
        <TabsList className="flex-1 gap-4 max-h-20 min-h-max bg-inherit" data-testid="tabs-list-days">
          {daysAvailable.map((day, index) => (
            <TabsTrigger key={index} value={String(index)} className="text-center basis-1/3 tablet:basis-1/4 rounded-lg p-2 border data-[state=active]:bg-muted">
              {/* <span>{dayjs(day).format('ddd')}</span>
                <span>{dayjs(day).format('D')}</span> */}
              <div key={index} className="flex flex-col text-wrap">
                <span className="">{dayjs(day).format('ddd')}</span>
                <span className="">{dayjs(day).format('DD')}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="0">
          <ScrollArea id="sessions-registers" className="h-[81.125vh]">
            <div className="flex flex-col items-start gap-3">
              {sessions.map((session, index) => (
                <SessionCard key={index} session={session} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="1">
          <ScrollArea id="sessions-registers" className="h-[81.125vh]">
            <div className="flex flex-col items-start gap-3">
              {sessions.map((session, index) => (
                <SessionCard key={index} session={session} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="2">
          <ScrollArea id="sessions-registers" className="h-[81.125vh]">
            <div className="flex flex-col items-start gap-3">
              {sessions.map((session, index) => (
                <SessionCard key={index} session={session} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
      {/* <div className="col-span-full flex flex-row justify-center gap-4 mt-8">
        {daysAvailable.map((day, index) => (
          <div key={index} className="flex flex-col basis-1/4 text-wrap rounded-lg p-2 border bg-card text-center text-card-foreground shadow-sm">
            <span className="">{dayjs(day).format('ddd')}</span>
            <span className="">{dayjs(day).format('D')}</span>
          </div>
        ))}
      </div>
       */}
    </DefaultLayout>
  )
}