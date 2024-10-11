import { Outcomming } from "./Messages/Outcomming";
import { Incomming } from "./Messages/Incomming";

const Content = () => {
  return (
    <section className="flex flex-col gap-5 flex-grow p-5 overflow-y-auto basis-1 bg-[url('/images/chat-background.svg')]">
      <Incomming content="Hello Willy Mateo" />
      <Outcomming content="Hello Sr." />
      <Incomming content="How are you?" />
      <Outcomming content="I'm fine. Thanks for asking" />
    </section>
  );
};

export { Content };
