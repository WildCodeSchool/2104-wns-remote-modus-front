import React from "react";
import "../../css/styles.css";

type PostContainerProps = {
  title: string;
  summary: string;
  techno: string;
};

const PostContainer = (props: PostContainerProps): JSX.Element => {
  const { title, techno, summary } = props;
  return (
    <div>
      <div>
        <img src="" alt="" />
        <p>{techno}</p>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
      <button type="button"> En savoir plus</button>
    </div>
  );
};

export default PostContainer;
