const Message = () => {
  return (
    <div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full mx-auto my-auto">
            <img src="/assets/images/me.jpg" alt="" />
          </div>
        </div>

        <div className={`chat-bubble text-white bg-sky-700`}>
          Salut ! Comment ça va ?
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          10:20
        </div>
      </div>
    </div>
  );
};

export default Message;
