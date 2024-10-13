"use client";
import { Icon } from "@iconify-icon/react";
import { useState } from "react";

import { addMessageToChatRoomById } from "@/app/services/chatRooms";
import { MESSAGES_CONTAINER_ID } from "./constants";

const Footer = ({ sessionUser = {} }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => setMessage(e?.target?.value ?? "");

  const handleKeyDown = (e) => {
    if (e?.key === "Enter") {
      sendMessage();
      setMessage("");

      setTimeout(scrollMessagesContainerToBottom, 100);
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

  const scrollMessagesContainerToBottom = () => {
    const messagesContainerElement = document.getElementById(
      MESSAGES_CONTAINER_ID
    );

    if (messagesContainerElement) {
      messagesContainerElement.scroll({
        behavior: "smooth",
        top: messagesContainerElement.offsetHeight,
      });
    }
  };

  return (
    <footer className="flex flex-row gap-5 items-center px-5 py-4 bg-white">
      <Icon
        icon="pepicons-pencil:plus-circle"
        className="cursor-pointer"
        height={25}
        width={25}
      />

      <input
        className="flex-1 p-2 bg-slate-100 rounded-full"
        placeholder="Type a message here..."
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={message}
        type="text"
      />

      <Icon
        icon="pepicons-pencil:microphone-circle"
        className="cursor-pointer"
        height={25}
        width={25}
      />
    </footer>
  );
};

export { Footer };
