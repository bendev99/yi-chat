import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import InputMsgSection from "./InputMsgSection";
import Messages from "./Messages";
import Welcome from "./Welcome";
import { TiAttachment, TiPhone, TiVideo } from "react-icons/ti";
import ThemeToggle from "../ThemeToggle";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => setSelectedConversation(null), [setSelectedConversation]);

  return (
    <div className="flex flex-col w-full mx-5">
      {!selectedConversation ? (
        <Welcome />
      ) : (
        <>
          {/* HEADER SECTION */}
          <div className="flex items-center justify-between px-5 py-2 mb-2 w-full shadow-xs shadow-base-300 rounded-md bg-primary text-primary-content">
            <div>
              <span className="label-text uppercase">à : </span>
              <span className="font-bold">{selectedConversation.name}</span>
            </div>
            <ThemeToggle />
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
