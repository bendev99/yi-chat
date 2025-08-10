import { useState } from "react";
import { MdSearch } from "react-icons/md";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchSection = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;
    if (search.length < 3) {
      return toast.error("La recherche doit contenir au moins 3 caractères.");
    }

    const conversation = conversations.find((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("Aucune conversation trouvée.");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recherche..."
        className="border text-sm rounded-full block w-full p-2 bg-base-100 border-primary text-base-content"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-secondary text-white">
        <MdSearch />
      </button>
    </form>
  );
};

export default SearchSection;
