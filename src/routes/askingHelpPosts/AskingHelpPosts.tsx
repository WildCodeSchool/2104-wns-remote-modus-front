import React from "react";
import "../../css/styles.css";
import fakeDataPosts from "./fakeDataPosts";
import PostContainer from "./PostContainer";

const AskingHelpPosts = (): JSX.Element => {
  return (
    <>
      <h1>HELLO </h1>
      <div className="container">
        {fakeDataPosts.map((objet) => {
          const { title, techno, summary } = objet;
          return (
            <PostContainer title={title} techno={techno} summary={summary} />
          );
        })}
      </div>
    </>
  );
};

export default AskingHelpPosts;
