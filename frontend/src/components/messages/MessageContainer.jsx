import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import InputMsgSection from "./InputMsgSection";
import Messages from "./Messages";
import Welcome from "./Welcome";
import { BsArrowLeft } from "react-icons/bs";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => setSelectedConversation(null), [setSelectedConversation]);

  return (
    <div
      className={`md:flex md:flex-col w-full md:mx-5 overflow-auto ${
        !selectedConversation && "hidden md:flex"
      }`}
    >
      {!selectedConversation ? (
        <Welcome />
      ) : (
        <>
          {/* HEADER SECTION */}

          <div className="flex sticky top-0 z-50 w-full items-center gap-2 px-5 py-2 mb-3 shadow-xs shadow-base-300 rounded-md bg-primary text-primary-content">
            <button
              onClick={() => setSelectedConversation(null)}
              className="flex md:hidden p-2 bg-primary rounded-full"
            >
              <BsArrowLeft />
            </button>
            <span className="label-text uppercase">à : </span>
            <span className="font-bold">{selectedConversation.name}</span>
            {/* <ThemeToggle /> */}
          </div>

          {/* BODY */}
          <Messages />

          {/* INPUT SECTION */}
          <InputMsgSection />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
