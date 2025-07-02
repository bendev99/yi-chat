import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between p-2 items-center bg-blue-300 sticky top-0 w-full">
      <h1 className="font-bold">LOGO</h1>
      <div className="flex gap-10 items-center">
        <ul className="flex gap-2">
          <NavLink className="cursor-pointer">Contact</NavLink>
        </ul>
        <button className="bg-blue-600 p-2 rounded-full cursor-pointer text-white">
          <Link to="/login">Commencer</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
