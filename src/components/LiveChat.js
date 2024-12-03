import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatSlice";
import { generateRandomName, makeMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addmessage({
          name: generateRandomName(),
          message: makeMessage(20) + "❤️",
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((chatMessage, index) => (
            <ChatMessage
              key={index}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          if (liveMessage) {
            dispatch(
              addmessage({
                name: "Dev Kumar",
                message: liveMessage,
              })
            );
          }
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 rounded-lg border border-gray-400 px-2 mx-2 p-1"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 p-1 mx-2 bg-green-300 rounded-lg font-bold shadow-sm hover:bg-green-500"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
