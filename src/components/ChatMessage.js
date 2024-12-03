import React from "react";
import { USER_ICON_URL } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-lg p-2">
      <img className="h-8" alt="user-chat" src={USER_ICON_URL} />
      <span className="font-bold px-2">{name} :</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
