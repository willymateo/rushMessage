"use client";

import { Icon } from "@iconify-icon/react";
import { useState } from "react";

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => setMessage(e?.target?.value ?? "");

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
