import SearchSection from "./SearchSection";
import ConversationList from "./ConversationList";
import FooterSection from "./FooterSection";

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 w-[30%]">
      <SearchSection />
      <div className="divider w-1/2 mx-auto"></div>
      <ConversationList />
      <div className="divider w-1/2 mx-auto"></div>
      <FooterSection />
    </div>
  );
};

export default SideBar;
