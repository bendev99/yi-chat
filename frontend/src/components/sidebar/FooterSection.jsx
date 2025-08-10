import { MdOutlineLogout, MdSettings } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";
import ThemeToggle from "../ThemeToggle";

const FooterSection = () => {
  const { loading, logout } = useLogout();
  const { authUser } = useAuthContext();

  return (
    <div className="flex bottom-0 mb-5 items-center justify-between mx-6">
      <div>
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <div className="w-full rotate-180 cursor-pointer" onClick={logout}>
            <MdOutlineLogout className="w-6 h-6" />
          </div>
        )}
      </div>

      <div className="flex gap-5 justify-end w-full">
        <ThemeToggle />
        <div className="avatar w-6 rounded-full">
          <img src={authUser?.profilePic} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
