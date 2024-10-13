"use client";

import { useEffect, useState } from "react";

import { listenMessagesByChatRoomId } from "@/app/services/chatRooms";
import { MESSAGES_CONTAINER_ID } from "../constants";
import { Outcomming } from "./Messages/Outcomming";
import { Incomming } from "./Messages/Incomming";

const Content = ({ sessionUser = {} }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const onUpdate = (querySnapshot) => {
      const newMessages = [];

      querySnapshot?.docs?.forEach((doc) => {
        const messageData = doc.data();

        newMessages.push({
          id: doc.id,
          ...messageData,
        });
      });

      setMessages(newMessages);
    };

    const unSubMessages = listenMessagesByChatRoomId({
      chatRoomId: sessionUser?.selectedChatRoomId,
      onUpdate,
    });

    return () => unSubMessages();
  }, []);

  return (
    <section
      className="flex flex-col gap-5 flex-grow p-5 overflow-y-auto basis-1 bg-[url('/images/chat-background.svg')]"
      id={MESSAGES_CONTAINER_ID}
    >
      {messages?.map(({ id, content = "", senderUserId = null } = {}) => {
        if (sessionUser?.id === senderUserId) {
          return <Outcomming key={id} content={content} />;
        }

        return <Incomming key={id} content={content} />;
      })}
    </section>
  );
};

export { Content };
