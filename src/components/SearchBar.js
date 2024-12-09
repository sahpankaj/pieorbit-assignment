import React, { useContext, useState } from "react";
import { debounce } from "../utils/debounce";
import { ItemContext } from "../context/ItemContext";
import { FaSearch } from "react-icons/fa";
import '../styles/SearchBar.css'

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
    <div className="search-bar">
      <span className="search-icon">
        <FaSearch />
      </span>
      <input
        type="text"
        value={searchInput}
        placeholder="Search product..."
        onChange={onChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
