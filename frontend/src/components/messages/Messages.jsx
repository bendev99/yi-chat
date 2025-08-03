import useGetMessages from "../../hooks/useGetMessages";
import { TiMessageTyping } from "react-icons/ti";
import Message from "./Message";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMsgRef = useRef();
  useListenMessages();

  useEffect(() => {
    lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto mx-8">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        messages.length === 0 && (
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-gray-500">Aucun message trouvé.</p>
            <TiMessageTyping className="w-10 h-10" />
          </div>
        )
      )}

      {/* {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)} */}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
            <Message message={message} />
          </div>
        ))}

      {}
    </div>
  );
};

export default Messages;
