import React, { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

const SortOptions = () => {
  const { updateFilters } = useContext(ItemContext);

  const handleSortChange = (e) => {
    updateFilters({ sortBy: e.target.value });
  };

  return (
    <div className="flex items-center gap-1 ">
      <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
        Sort By
      </label>
      <select
        id="sortBy"
        onChange={handleSortChange}
        className="p-1 border rounded-md bg-gray-100 focus:outline-none "
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
