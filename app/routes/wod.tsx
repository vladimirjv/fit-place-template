import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { useSubmit } from "@remix-run/react";
import Editor from "~/components/organisms/editor";
import { Button } from "~/components/ui/button";
import { useDefaultEditor } from "~/hooks/useDefaultEditor";
import { createWOD } from "~/db/WOD/handler";
import { WODInsert, WODSelect } from "~/db/WOD/schema";
import DefaultLayout from "~/layout/default-auth";
import { getAuth } from "@clerk/remix/ssr.server";

export default function Wod() {
  const submit = useSubmit();
  const { editor } = useDefaultEditor();
  if (!editor) return null;
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data: Pick<WODSelect, "content"> = {
      content: editor.getHTML()
    }
    submit(data, { method: "post" });
  }

  return (
    <DefaultLayout>
      <div className="col-span-full flex justify-center">
        <div className="flex-1 justify-center max-w-4xl space-y-3">
          <Editor editor={editor} />
          <div className="flex flex-row">
            <Button className="flex-1 small-desktop:flex-none min-w-14" onClick={handleSubmit}>Save</Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function action(args: ActionFunctionArgs) {
  const data = await args.request.formData();
  const jsonData: Pick<WODInsert, "content"> = Object.fromEntries(data.entries());
  console.log("🚀 ~ action ~ jsonData:", jsonData)
  if (!jsonData.content) return new Response("content is required", { status: 400 })

  // check auth and userId
  const { userId } = await getAuth(args)
  if (!userId) {
    return redirect("/sign-in?redirect_url=" + args.request.url);
  }
  
  // generate a new WOD, save it to the database
  await createWOD(userId, jsonData.content);
  // return new Response("ok");
  return redirect("/");
}
