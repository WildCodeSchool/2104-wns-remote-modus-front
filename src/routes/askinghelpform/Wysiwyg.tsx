import React from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

interface WysiwygProps {
  userInput: string;
  setUserInput: (s: string) => void;
  dataTestid: string;
}

export default function Wysiwyg({
  userInput,
  setUserInput,
  dataTestid,
}: WysiwygProps): JSX.Element {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: 1 }, { header: 2 }],
      ["bold", "italic", "underline", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link"],
      ["clean"],
      ["code-block"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <ReactQuill
      value={userInput}
      placeholder="Please insert your text here... "
      onChange={setUserInput}
      modules={modules}
      data-testId={dataTestid}
    />
  );
}
