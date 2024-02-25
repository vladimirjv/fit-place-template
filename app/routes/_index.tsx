import { LoaderFunction, json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import WODCard from "~/components/organisms/feed-wod-card";
import Welcome from "~/components/sections/welcome";
import { getWODs } from "~/db/WOD/handler";
import { WODSelect } from "~/db/WOD/schema";
import DefaultLayout from "~/layout/default-auth";

export const meta: MetaFunction = () => {
  return [
    { title: "Fit Place" },
    {
      property: "og:title",
      content: "Fit Place",
    },
    {
      name: "description",
      content: "The fitness app for everyone.",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const wods = await getWODs()
  return json({ wods })
}

export default function Index() {
  const { wods } = useLoaderData<{ wods: WODSelect[] }>();
  return (
    <DefaultLayout>
      <section className="col-span-full">
        <Welcome />
      </section>
      <section id="feed" className="col-span-full flex flex-col justify-center gap-4">
        {wods.map((wod, idx) => {
          return (
            <WODCard key={wod.id} wod={wod} index={idx} />
          )
        })}
        
      </section>
    </DefaultLayout>
  );
}
