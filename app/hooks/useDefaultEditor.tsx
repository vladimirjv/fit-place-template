import { useEditor } from "@tiptap/react";
import { extensionsEditor } from "~/lib/config";

export const useDefaultEditor = () => {
  const editor = useEditor({
    extensions: extensionsEditor,
    content: "",
    editorProps: {
      attributes: {
        spellcheck: "false",
        class:
          "p-4 focus:outline-none rounded-lg border bg-card text-card-foreground shadow-sm h-72 overflow-y-scroll",
      },
    },
  });

  return { editor };
}