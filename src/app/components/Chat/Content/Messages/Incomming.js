const Incomming = ({ content = "" }) => (
  <div className="flex flex-row justify-start">
    <div className="shadow-md py-3 px-7 rounded-full bg-sky-100 max-w-[80%]">
      {content}
    </div>
  </div>
);

export { Incomming };
