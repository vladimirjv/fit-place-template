import {
  FontBoldIcon,
  FontItalicIcon,
  StrikethroughIcon,
} from "@radix-ui/react-icons";
import { EditorContent, type useEditor } from "@tiptap/react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

export type TiptapProps = React.HTMLAttributes<HTMLDivElement> & {
  editor: ReturnType<typeof useEditor>;
};

const MenuBar = ({ editor }: { editor: ReturnType<typeof useEditor> }) => {
  if (!editor) {
    return null;
  }

  const onSetTextType = (type: "h-1" | "h-2" | "h-3" | "p") => {
    switch (type) {
      case "h-1":
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        break;
      case "h-2":
        editor.chain().focus().toggleHeading({ level: 2 }).run();
        break;
      case "h-3":
        editor.chain().focus().toggleHeading({ level: 3 }).run();
        break;
      case "p":
        editor.chain().focus().setParagraph().run();
        break;
    }
  };
  const filterValueTextType = () => {
    if (editor.isActive("heading", { level: 1 })) {
      return "h-1";
    }
    if (editor.isActive("heading", { level: 2 })) {
      return "h-2";
    }
    if (editor.isActive("heading", { level: 3 })) {
      return "h-3";
    }
    if (editor.isActive("paragraph")) {
      return "p";
    }
  };

  const filterValueTextFormat = () => {
    const types: string[] = [];
    if (editor.isActive("bold")) {
      types.push("bold");
    }
    if (editor.isActive("italic")) {
      types.push("italic");
    }
    if (editor.isActive("strike")) {
      types.push("strike");
    }
    return types;
  };

  return (
    <div className="mt-4 flex flex-row justify-between">
      <ToggleGroup
        type="single"
        onValueChange={onSetTextType}
        value={filterValueTextType()}
      >
        <ToggleGroupItem
          value="h-1"
          aria-label="Toggle heading"
          // disabled={!editor.can().chain().focus().toggleHeading({ level: 1 }).run() }
        >
          H1
        </ToggleGroupItem>
        <ToggleGroupItem value="h-2" aria-label="Toggle heading">
          H2
        </ToggleGroupItem>
        <ToggleGroupItem value="h-3" aria-label="Toggle heading">
          H3
        </ToggleGroupItem>
        <ToggleGroupItem value="p" aria-label="Toggle paragraph">
          p
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="multiple" value={filterValueTextFormat()}>
        <ToggleGroupItem
          value="bold"
          aria-label="Toggle Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          // className={editor.isActive("bold") ? "is-active" : ""}
        >
          <FontBoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="italic"
          aria-label="Toggle Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          // className={editor.isActive("italic") ? "is-active" : ""}
        >
          <FontItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strike"
          aria-label="Toggle strike"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          // className={editor.isActive("strike") ? "is-active" : ""}
        >
          <StrikethroughIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Editor: React.FC<TiptapProps> = ({ editor }) => {

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent id="editor-rich-text" editor={editor} />
    </>
  );
};

export default Editor;
