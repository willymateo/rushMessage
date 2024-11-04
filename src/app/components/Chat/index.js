import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

const sessionUser = {
  selectedChatRoomId: "jwXxVEdLUslqoJdE6Zsc",
  id: 1,
};

const Chat = () => (
  <main className="flex flex-col shadow-2xl rounded-3xl max-w-[700px] w-full overflow-hidden text-slate-600">
    <Header title="John Doe" />

    <Content sessionUser={sessionUser} />

    <Footer sessionUser={sessionUser} />
  </main>
);

export { Chat };
