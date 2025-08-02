import { BsSend } from "react-icons/bs";

const InputMsgSection = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-[80%] relative mx-auto">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-b-gray-600 text-white"
          placeholder="Envoi un message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default InputMsgSection;
