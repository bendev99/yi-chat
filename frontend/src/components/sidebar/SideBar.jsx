import SearchSection from "./SearchSection";
import ConversationList from "./ConversationList";
import FooterSection from "./FooterSection";

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 w-[40%] mx-auto items-center">
      <h1 className="text-2xl font-bold text-white text-start px-5 -mt-8 -ml-5">
        YiChat
      </h1>

      <SearchSection />
      <div className="divider w-1/2 mx-auto"></div>
      <ConversationList />
      <div className="divider w-1/2 mx-auto"></div>
      <FooterSection />
    </div>
  );
};

export default SideBar;
