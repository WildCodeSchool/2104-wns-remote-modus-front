import React, { useMemo, useState } from "react";
import { createEditor, BaseEditor, Descendant } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

type CustomText = { text: string };
type CustomElement = { type: "paragraph"; children: CustomText[] };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const Wysiwyg: React.FC = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Descendant[]>([
    { type: "paragraph", children: [{ text: "" }] },
  ]);

  return (
    <div className="bg-red-500 h-40">
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
    </div>
  );
};

export default Wysiwyg;
