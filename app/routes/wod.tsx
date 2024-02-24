import Editor from "~/components/editor";
import { useDefaultEditor } from "~/components/useDefaultEditor";
import DefaultLayout from "~/layout/default-auth";


export default function Wod() {

  const { editor } = useDefaultEditor();
  
  return (
    <DefaultLayout>
      <h1 className="col-span-full">WODs</h1>
      <div className="col-span-full flex flex-col justify-center">
        <Editor editor={editor} />
      </div>
    </DefaultLayout>
  );
}