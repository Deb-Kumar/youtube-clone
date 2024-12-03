import React from "react";
import { COMMENT_DATA } from "../utils/constants";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className="p-5 pl-28">
      <h1 className="text-2xl font-bold py-2 m-2">Comments: </h1>
      <CommentList comments={COMMENT_DATA} />
    </div>
  );
};

export default CommentsContainer;
