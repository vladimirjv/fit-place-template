import { ActionFunctionArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import WODCard from "~/components/organisms/feed-wod-card";
import Welcome from "~/components/sections/welcome";
import { SessionsSelect, getSessions } from "~/db/Sessions/handler";
import { getWODs } from "~/db/WOD/handler";
import { WODWithAuthor } from "~/db/WOD/schema";
import DefaultLayout from "~/layout/default-auth";
import { clerkClient } from "~/lib/clerk";

export const loader: LoaderFunction = async () => {
  let wods = await getWODs()
  const sessions = await getSessions();
  const clerk = await clerkClient();
  const clients = await clerk.users.getUserList({ 
    userId: wods.map(wod => wod.created_by).filter((v, i, a) => a.indexOf(v) === i) as string[],
    limit: 10
  })

  wods = wods.map(wod => {
    return {
      ...wod,
      author: clients.find(client => client.id === wod.created_by)
    }
  })
  return json({ wods, sessions })
}

export default function Index() {
  const { wods, sessions } = useLoaderData<{ wods: WODWithAuthor[], sessions: SessionsSelect[] }>();
  return (
    <DefaultLayout>
      <section className="col-span-full">
        <Welcome />
      </section>
      <section id="feed" className="col-span-full flex flex-col justify-center gap-4">
        <WODCard wod={{
          id: 0,
          created_at: new Date().toISOString(),
          created_by: "0",
          // @ts-expect-error no value
          author: null,
          content: 'Welcome to the feed!',
          updated_at: new Date().toISOString()
        }} sessions={sessions} index={0} />
        <div className="text-3xl text-center font-bold text-primary">Feed</div>
        {wods.map((wod, idx) => {
          return (
            <WODCard
              key={wod.id} 
              wod={wod as WODWithAuthor} 
              sessions={sessions}
              index={idx} 
            />
          )
        })}

      </section>
    </DefaultLayout>
  );
}

export async function action(args: ActionFunctionArgs) {
  const formData = await args.request.formData();
  console.log("🚀 ~ action ~ formData", Object.fromEntries(formData.entries()))
  return json({ message: "ok" });
}
