import { useAuthContext } from "../../context/AuthContext";
import { timeZone } from "../../utils/timeZone";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isSender = message.senderId === authUser._id;
  const time = timeZone(message.createdAt);

  return (
    <div className={`chat ${isSender ? "chat-end" : "chat-start"} mb-2`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full mx-auto my-auto">
          <img
            src={
              isSender ? authUser.profilePic : selectedConversation.profilePic
            }
            alt="Photo de profile"
          />
        </div>
      </div>

      <div
        className={`chat-bubble  ${
          isSender
            ? "chat-bubble-primary text-primary-content"
            : "bg-base text-base-content"
        }`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {time}
      </div>
    </div>
  );
};

export default Message;
