const NavBar = ({ onContactClick, onConnexionClick }) => {
  return (
    <div className="navbar bg-base-100 text-base-content fixed top-0 w-full z-30 shadow-md px-10">
      <div className="flex-1">
        <a className="text-xl font-bold uppercase">Koragna</a>
      </div>
      <div className="flex gap-5">
        <button className="cursor-pointer" onClick={onContactClick}>
          Contact
        </button>
        <button className="btn btn-primary" onClick={onConnexionClick}>
          Connexion
        </button>
      </div>
    </div>
  );
};

export default NavBar;
