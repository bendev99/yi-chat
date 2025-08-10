import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const InputMsgSection = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Envoi avec un champ vide
    await sendMessage(message);
    console.log("Message senvoyer :", message);

    setMessage(""); // Netoyer l'input après l'envoi du message
  };

  return (
    <form className="md:px-4" onSubmit={handleSubmit}>
      <div className="w-[80%] fixed bottom-2 md:bottom-0 mx-auto md:relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-base-100 border-primary text-base-content"
          placeholder="Envoi un message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default InputMsgSection;
