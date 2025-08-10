import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import { TiPhone, TiVideo } from "react-icons/ti";

const RightSide = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  return (
    <div
      className={`hidden border-l border-primary/30 w-[40%] mx-auto items-center justify-between text-center ${
        selectedConversation ? "md:flex flex-col" : "hidden"
      }`}
    >
      {/* Section profile */}
      <div className="mx-auto flex flex-col items-center gap-3">
        <div className="chat-image avatar w-20 h-20 mx-auto rounded-full">
          <img
            src={selectedConversation?.profilePic}
            alt=""
            className="rounded-full"
          />
        </div>
        <p>{selectedConversation?.name}</p>

        <div className="flex gap-5 shadow shadow-primary/50 w-auto p-2">
          <TiPhone className="w-6 h-6 rotate-180 cursor-pointer" />
          <TiVideo className="w-6 h-6 cursor-pointer" />
        </div>
        <div className="divider w-1/2 mx-auto opacity-50"></div>

        {/* Section infos */}
        <div className="flex flex-col gap-3 shadow shadow-primary/50 p-5 rounded-md">
          <div className="flex gap-1">
            <p className="text-sm">Email :</p>
            <p className="text-sm">{selectedConversation?.email}</p>
          </div>

          <div className="flex gap-1">
            <p className="text-sm">Téléphone :</p>
            <p className="text-sm capitalize">{selectedConversation?.phone}</p>
          </div>

          <div className="flex gap-1">
            <p className="text-sm">Sexe :</p>
            <p className="text-sm capitalize">{selectedConversation?.gender}</p>
          </div>
          <div className="flex gap-1">
            <p className="text-sm">Statut :</p>
            <p className="text-sm capitalize">
              {onlineUsers.includes(selectedConversation?._id)
                ? "En ligne"
                : "Hors ligne"}
            </p>
          </div>
        </div>
      </div>

      {/* Section footer
      <div className="flex flex-col items-center w-full mb-0">
        <div className="divider w-1/2 mx-auto opacity-50"></div>
        <button className="btn btn-neutral bottom-5">BLOCK</button>
      </div> */}
    </div>
  );
};

export default RightSide;
