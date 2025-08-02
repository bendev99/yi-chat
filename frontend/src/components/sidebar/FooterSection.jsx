import { MdOutlineLogout, MdPerson, MdSettings } from "react-icons/md";
import useLogout from "../../context/useLogout";

const FooterSection = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="flex sticky bottom-0 mx-15">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <MdOutlineLogout
          className="w-8 h-8 rotate-180 cursor-pointer"
          onClick={logout}
        />
      )}
      <div className="flex gap-5 justify-end w-full">
        <MdSettings className="w-8 h-8" />
        <MdPerson className="w-8 h-8" />
      </div>
    </div>
  );
};

export default FooterSection;
