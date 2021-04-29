/* eslint-disable @typescript-eslint/no-shadow */
import React, { useMemo, useState } from "react";
import { createEditor, BaseEditor, Descendant, Editor } from "slate";
import { Slate, Editable, withReact, ReactEditor, useSlate } from "slate-react";
import { Button, Icon } from "../../components/wysiwyg/SlateComponents";

type CustomText = { text: string };
type CustomElement = { type: "paragraph"; children: CustomText[] };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

type MarkButtonProps = {
  format: string;
  icon: string;
};

const Wysiwyg: React.FC = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Descendant[]>([
    { type: "paragraph", children: [{ text: "" }] },
  ]);

  const isMarkActive = (editor: Editor, format) => {
    const marks = Editor.marks(editor);

    return marks ? marks[format] === true : false;
  };

  const MarkButton = ({ format, icon }: MarkButtonProps) => {
    const slateEditor = useSlate();
    return (
      <Button
        active={isMarkActive(slateEditor, format)}
        onMouseDown={(event: MouseEvent) => {
          event.preventDefault();
          toggleMark(slateEditor, format);
        }}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  return (
    <>
      <MarkButton format="bold" icon="format_bold" />
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable
          onKeyDown={(event) => {
            if (event.key === "&") {
              event.preventDefault();
              editor.insertText("and");
            }
          }}
        />
      </Slate>
      <p>toto</p>
    </>
  );
};

export default Wysiwyg;
