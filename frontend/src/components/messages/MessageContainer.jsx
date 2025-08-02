import InputMsgSection from "./InputMsgSection";
import Messages from "./Messages";
import Welcome from "./Welcome";

const MessageContainer = () => {
  const noChatSelect = true;

  return (
    <div className="flex flex-col w-full mx-5">
      {noChatSelect ? (
        <Welcome />
      ) : (
        <>
          {/* HEADER SECTION */}
          <div className="bg-slate-700 px-4 py-2 mb-2 w-full">
            <span className="label-text">To : </span>
            <span className="text-gray-900 font-bold">John Doe</span>
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
