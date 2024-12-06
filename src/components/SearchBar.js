import React, { useContext, useState } from "react";
import { debounce } from "../utils/debounce";
import { ItemContext } from "../context/ItemContext";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const { updateFilters } = useContext(ItemContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = debounce((value) => {
    updateFilters({ keyword: value });
  }, 300);

  const onChange = (e) => {
    setSearchInput(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="relative w-full md:w-[50%]">
      <span className="absolute inset-y-0 right-4 flex items-center pl-3 text-gray-400">
        <FaSearch />
      </span>
      <input
        type="text"
        value={searchInput}
        placeholder="Search product..."
        onChange={onChange}
        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
