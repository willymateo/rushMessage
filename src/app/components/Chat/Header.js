import { Icon } from "@iconify-icon/react";

const Header = ({ title = "" }) => (
  <header className="flex flex-row items-center px-5 py-7 gap-5 bg-white">
    <Icon
      className="cursor-pointer text-sky-500"
      icon="pepicons-pencil:arrow-left"
      height={25}
      width={25}
    />

    <h1 className="flex-1 font-bold text-center">{title}</h1>

    <Icon
      className="cursor-pointer text-sky-500"
      icon="pepicons-pencil:dots-y"
      height={25}
      width={25}
    />
  </header>
);

export { Header };
