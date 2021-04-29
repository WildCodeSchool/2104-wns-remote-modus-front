import React, { useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

export default function Wysiwyg(): JSX.Element {
  const [userInput, setUserInput] = useState("");

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
      placeholder="Please insert your text here..."
      onChange={setUserInput}
      modules={modules}
    />
  );
}
