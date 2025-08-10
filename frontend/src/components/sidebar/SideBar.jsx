import SearchSection from "./SearchSection";
import ConversationList from "./ConversationList";
import FooterSection from "./FooterSection";
import useConversation from "../../zustand/useConversation";

const SideBar = () => {
  const { selectedConversation } = useConversation();

  return (
    <div
      className={`md:border-r border-primary/50 md:pr-2 w-full  mx-auto items-center ${
        selectedConversation ? "hidden md:block md:w-[40%]" : "md:w-[30%]"
      }`}
    >
      <SearchSection />
      <div className="divider w-1/2 mx-auto"></div>
      <ConversationList />
      <div className="divider w-1/2 mx-auto"></div>
      <FooterSection />
    </div>
  );
};

export default SideBar;
