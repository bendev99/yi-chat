import SideBar from "../components/sidebar/SideBar";
import MessageContainer from "../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex p-10 h-screen bg-base-100 text-base-content overflow-hidden">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
