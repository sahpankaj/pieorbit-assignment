import React from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const Filters = () => {
  return (
    <div className=" flex gap-1 items-center">
      <p className="text-sm font-medium text-gray-700">Filters</p>
      <CategoryFilter />
      <PriceFilter />
    </div>
  );
};

export default Filters;
