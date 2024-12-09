import React, { useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import '../styles/SortOptions.css'

const SortOptions = () => {
  const { updateFilters } = useContext(ItemContext);

  const handleSortChange = (e) => {
    updateFilters({ sortBy: e.target.value });
  };

  return (
    <div className="sort-options">
      <label htmlFor="sortBy" className="sort-label">
        Sort By
      </label>
      <select
        id="sortBy"
        onChange={handleSortChange}
        className="sort-select"
      >
        <option value="nameAsc">Asc: A-Z</option>
        <option value="nameDesc">Des: Z-A</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
