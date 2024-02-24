import { type MetaFunction } from "@remix-run/node";
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

export default function Index() {
  return (
    //   <Button variant={"default"}>Click me</Button>
    <DefaultLayout>
      <section id="" className="col-span-full">Hello 2</section>
      <h1 className="text-3xl font-bold underline text-purple-400 col-span-full">
        Hello world!
      </h1>
    </DefaultLayout>
  );
}
