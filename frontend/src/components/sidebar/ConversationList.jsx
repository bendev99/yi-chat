import Conversation from "./Conversation";

const ConversationList = () => {
  return (
    <div className="py-2 flex flex-col overflow-hidden">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default ConversationList;
