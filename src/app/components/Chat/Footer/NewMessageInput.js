"use client";

import { useState } from "react";

import { addMessageToChatRoomById } from "@/app/services/chatRooms";

const NewMessageInput = ({ sessionUser = {} }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => setMessage(e?.target?.value ?? "");

  const handleKeyDown = (e) => {
    if (e?.key === "Enter") {
      sendMessage();
      setMessage("");
    }
  };

  const sendMessage = () =>
    addMessageToChatRoomById({
      chatRoomId: sessionUser?.selectedChatRoomId,
      data: {
        senderUserId: sessionUser?.id,
        createdAt: new Date(),
        content: message,
      },
    });

  return (
    <input
      className="flex-1 p-2 bg-slate-100 rounded-full"
      placeholder="Type a message here..."
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      value={message}
      type="text"
    />
  );
};

export { NewMessageInput };
