import { type MetaFunction } from "@remix-run/node";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import Welcome from "~/components/welcome";
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
    <DefaultLayout>
      <section className="col-span-full">
        <Welcome />
      </section>
      <section id="feed" className="col-span-full flex flex-col justify-center">
        <div
          className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
        >
          <Accordion
            type="single"
            // defaultValue={openToday && isToday(routine.createdAt) && index === 0 ? `item-${index}` : ""}
            collapsible
          >
            {/* value={`item-${index}`} */}
            <AccordionItem value="test" className="border-b-0">
              <AccordionTrigger className="flex scroll-m-20 flex-row justify-between py-0 text-lg font-extrabold tracking-tight text-primary hover:no-underline data-[state=open]:pb-2 ">
                <div className="flex flex-1 justify-start">
                  {/* Routine {dayjs(routine.createdAt).format("DD/MM/YYYY") ?? ""} */}
                  Routine
                </div>
                <div className="mr-2 hidden flex-row gap-x-2 md:flex">
                  Scores:
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col">
                <div
                  className="routine-item"
                // dangerouslySetInnerHTML={{ __html: routine.content }}
                ></div>
                {/* <div className="flex justify-end gap-x-2 items-center">
                  <span className="text-sm text-muted-foreground italic pointer-events-none cursor-default">Created by {"  "}
                    {routine.createdBy?.name ?? "Unknown"}
                  </span>
                  {routine.createdBy &&
                    (<Image
                      src={routine.createdBy.profileImageURL}
                      className="rounded-full"
                      alt="Profile user image"
                      width={24}
                      height={24}
                    />)}
                </div> */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* <div className="flex flex-col">
            <div className="mt-4 flex flex-row gap-x-2">
              {routine.results.length > 0 && <Button
                variant="outline"
                asChild
              >
                <Link href="/register-result/[id_routine]" as={`/register-result/${routine.id}`} className="flex gap-2">
                  <FilePlusIcon className="block md:hidden" />
                  <span className="hidden md:block">Register your score</span>
                  <span className="block md:hidden">SCORE</span>
                </Link>
              </Button>}
              <Button
                variant="ghost"
                asChild
              >
                <Link href="/results/[id_routine" as={`/results/${routine.id}`} className="flex gap-2">
                  <EyeOpenIcon className="block md:hidden" />
                  <span className="hidden md:block">See results</span>
                  <span className="block md:hidden">RESULTS</span>
                </Link>
              </Button>
              <div className="flex-1 flex justify-end">
                {isToday(routine.createdAt) && <Button className="hidden md:block">
                  Register your attendance
                </Button>}
                {isToday(routine.createdAt) && <Button className="block md:hidden">
                  <CheckCircledIcon />
                </Button>}
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* <section id="" className="col-span-full">Hello 2</section>
      <h1 className="text-3xl font-bold underline text-purple-400 col-span-full">
        Hello world!
      </h1> */}
    </DefaultLayout>
  );
}
