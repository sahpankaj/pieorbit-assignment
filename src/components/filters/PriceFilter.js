import React, { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import '../../styles/Filters.css'

const PriceFilter = () => {
  const { updateFilters } = useContext(ItemContext);

  const handlePriceRangeChange = (e) => {
    const [min, max] = e.target.value.split("-").map(Number);
    updateFilters({ priceRange: [min, max] });
  };

  return (
    <div>
      <select
        id="priceFilter"
        onChange={handlePriceRangeChange}
        className="select-filter"
      >
        <option value="0-1000">All Prices</option>
        <option value="0-50">Under $50</option>
        <option value="50-100">$50 to $100</option>
        <option value="100-1000">Above $100</option>
      </select>
    </div>
  );
};

export default PriceFilter;
