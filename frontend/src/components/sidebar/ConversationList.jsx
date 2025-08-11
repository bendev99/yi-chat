import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const ConversationList = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="flex flex-col -space-y-5 overflow-auto h-[70%] shadow-sm shadow-base-300 mr-5">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default ConversationList;
