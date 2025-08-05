import SideBar from "../components/sidebar/SideBar";
import MessageContainer from "../components/messages/MessageContainer";
import RightSide from "../components/rightside/RightSide";

const Home = () => {
  return (
    <div className="flex px-5 py-10 h-screen bg-base-100 text-base-content overflow-hidden">
      <SideBar />
      <MessageContainer />
      <RightSide />
    </div>
  );
};

export default Home;
