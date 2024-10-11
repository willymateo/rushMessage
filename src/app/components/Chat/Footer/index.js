import { Icon } from "@iconify-icon/react";

import { NewMessageInput } from "./NewMessageInput";

const Footer = ({ sessionUser = {} }) => (
  <footer className="flex flex-row gap-5 items-center px-5 py-4 bg-white">
    <Icon
      icon="pepicons-pencil:plus-circle"
      className="cursor-pointer"
      height={25}
      width={25}
    />

    <NewMessageInput sessionUser={sessionUser} />

    <Icon
      icon="pepicons-pencil:microphone-circle"
      className="cursor-pointer"
      height={25}
      width={25}
    />
  </footer>
);

export { Footer };
