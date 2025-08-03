import { useSocketContext } from "../../context/SocketContext";
import useGetMessages from "../../hooks/useGetMessages";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { messages } = useGetMessages();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <div className="flex flex-col -space-y-5">
      <div
        className={`flex gap-3 items-center hover:bg-slate-800 rounded-md px-2 py-5 cursor-pointer ${
          isSelected ? "bg-slate-800" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
          <div className="w-10 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <h3>{conversation.name}</h3>
          <p className="text-sm text-slate-400">{messages.message}</p>
        </div>
      </div>

      {!lastIdx && <div className="divider w-full mx-auto opacity-20"></div>}
    </div>
  );
};

export default Conversation;
