import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import WODCard from "~/components/organisms/feed-wod-card";
import Welcome from "~/components/sections/welcome";
import { ClassesSelect, getClasses } from "~/db/Classes/handler";
import { getWODs } from "~/db/WOD/handler";
import { WODWithAuthor } from "~/db/WOD/schema";
import DefaultLayout from "~/layout/default-auth";
import { clerkClient } from "~/lib/clerk";

export const loader: LoaderFunction = async () => {
  let wods = await getWODs()
  const classes = await getClasses();
  // console.log("🚀 ~ constloader:LoaderFunction= ~ classes:", classes)

  // const auth = await getAuth(args);
  // if (!auth.userId) {
  //   return redirect("/sign-in?redirect_url=" + args.request.url);
  // }
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
  return json({ wods, classes })
}

export default function Index() {
  const { wods, classes } = useLoaderData<{ wods: WODWithAuthor[], classes: ClassesSelect[] }>();
  return (
    <DefaultLayout>
      <section className="col-span-full">
        <Welcome />
      </section>
      <section id="feed" className="col-span-full flex flex-col justify-center gap-4">
        {wods.map((wod, idx) => {
          return (
            <WODCard
              key={wod.id} 
              wod={wod as WODWithAuthor} 
              classes={classes}
              index={idx} 
            />
          )
        })}

      </section>
    </DefaultLayout>
  );
}
