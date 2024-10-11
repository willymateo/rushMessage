import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Chat = () => (
  <main className="flex flex-col shadow-2xl rounded-3xl max-w-[700px] w-full overflow-hidden text-slate-600">
    <Header title="DevFest organizers" />

    <Content />

    <Footer />
  </main>
);

export { Chat };
