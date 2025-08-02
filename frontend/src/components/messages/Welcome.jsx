import React from "react";
import { TiMessages } from "react-icons/ti";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="px-4 text-center items-center text-4xl text-gray-200 font-semibold flex flex-col gap-2">
        <p>Bienvenu John Doe 👋</p>
        <TiMessages className="w-25 h-25" />
      </div>
    </div>
  );
};

export default Welcome;
