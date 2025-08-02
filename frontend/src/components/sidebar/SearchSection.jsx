import { MdSearch } from "react-icons/md";

const SearchSection = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Recherche..."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-300 text-white">
        <MdSearch />
      </button>
    </form>
  );
};

export default SearchSection;
