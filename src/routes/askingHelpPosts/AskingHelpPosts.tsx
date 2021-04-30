import React from "react";
import "../../css/styles.css";
import fakeDataPosts from "./fakeDataPosts";

const AskingHelpPosts = (): JSX.Element => {
  console.log(fakeDataPosts);

  return (
    <>
      <h1>HELLO </h1>
      <div className="container">
        <p className="test">Hello</p>
      </div>
    </>
  );
};

export default AskingHelpPosts;
