import React, { useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

export default function Wysiwyg(): JSX.Element {
  const [userInput, setUserInput] = useState("");

  return (
    <ReactQuill
      value={userInput}
      placeholder="Please insert your text here..."
      onChange={setUserInput}
    />
  );
}
