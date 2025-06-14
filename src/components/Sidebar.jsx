import {
  EllipsisVertical,
  MessageSquarePlus,
  Search,
  SettingsIcon,
} from "lucide-react";
import { ListDiscussion } from "../data/ListDiscussion";

const Sidebar = () => {
  return (
    <div className="hidden md:flex">
      <div
        className="flex flex-col justify-between min-h-screen bg-blue-200 fixed left-0 top-0 bottom-0
          md:w-72 xl:w-[22%] p-4 transition-all duration-100"
      >
        <div>
          {/* Section titre */}
          <div className="flex w-full justify-between rounded-lg p-2 mb-2">
            <h1 className="text-2xl font-bold">Koragna</h1>

            <div className="flex items-center gap-2">
              <button className="cursor-pointer">
                <MessageSquarePlus />
              </button>

              <button className="cursor-pointer">
                <EllipsisVertical />
              </button>
            </div>
          </div>

          {/* Barre de recherche */}
          <div className="relative mb-2">
            <Search className="absolute left-2 inset-y-0 my-auto text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher..."
              className={`w-full py-2 pl-8 pr-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200 text-md transition-all duration-300}`}
            />
          </div>

          {/* Section discussion */}
          <div className="">
            <ul className="space-y-2 flex-1 h-96 overflow-auto scrollbar-invisible">
              <li className="flex flex-col gap-2">
                {ListDiscussion.map((discussion) => (
                  <div
                    key={discussion.id}
                    className={`flex items-center gap-2 rounded-md p-1 hover:bg-gray-100 transition-colors cursor-pointer text-md`}
                  >
                    <img
                      src={discussion.avatar}
                      alt="user profile"
                      className={`w-10 h-10 rounded-full`}
                    />
                    <div>
                      <h1 className={`font-semibold text-md`}>
                        {discussion.sender}
                      </h1>
                      <p
                        className={`text-xs text-gray-600 truncate max-w-[180px]`}
                      >
                        {discussion.msg.length > 25
                          ? `${discussion.msg.slice(0, 25)}...`
                          : discussion.msg}
                      </p>
                    </div>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Section paramètre */}
        <div className="flex mx-auto items-center text-center w-full sticky bottom-0 justify-between px-5">
          <img
            src="/me.jpg"
            alt="Profile"
            className={`rounded-full w-10 h-10 cursor-pointer`}
          />
          <button className="flex justify-center cursor-pointer p-2 bg-blue-500 gap-1 text-white text-center rounded-full hover:bg-blue-600 transition-colors">
            <SettingsIcon /> Paramètres
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
