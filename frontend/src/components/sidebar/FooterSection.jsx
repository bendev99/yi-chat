import { MdOutlineLogout, MdSettings } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";

const FooterSection = () => {
  const { loading, logout } = useLogout();
  const { authUser } = useAuthContext();

  return (
    <div className="flex fixed bottom-0 mb-5 space-x-25">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <div className="w-full rotate-180 cursor-pointer" onClick={logout}>
          <MdOutlineLogout className="w-8 h-8" />
        </div>
      )}
      <div className="flex gap-5 justify-end w-full">
        <MdSettings className="w-8 h-8" />
        <div className="avatar w-8 rounded-full">
          <img src={authUser?.profilePic} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
