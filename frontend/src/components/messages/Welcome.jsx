import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const Welcome = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="px-4 text-center items-center text-4xl text-primary-content font-semibold flex flex-col gap-2">
        <p className="text-base-content/50">Bienvenu {authUser.name} 👋</p>
        <TiMessages className="w-25 h-25 text-base-content/50" />
      </div>
    </div>
  );
};

export default Welcome;
