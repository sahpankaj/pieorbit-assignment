import React from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import '../../styles/Filters.css'

const Filters = () => {
  return (
    <div className=" filters-container">
      <p className="filters-title">Filters</p>
      <CategoryFilter />
      <PriceFilter />
    </div>
  );
};

export default Filters;
