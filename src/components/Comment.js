import React from "react";
import { USER_ICON_URL } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm rounded-lg bg-gray-100 m-2">
      <img className="my-2 w-12 h-12" alt="user" src={USER_ICON_URL} />
      <div className="p-2 mx-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
