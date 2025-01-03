import React, { useContext, useMemo } from "react";
import { ItemContext } from "../../context/ItemContext";

const CategoryFilter = () => {
  const { updateFilters, items } = useContext(ItemContext);

  // Dynamically extract unique categories from items
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(items.map((item) => item.category))];
    return uniqueCategories;
  }, [items]);

  const handleCategoryChange = (e) => {
    updateFilters({ category: e.target.value });
  };

  return (
    <div>
      <select
        id="categoryFilter"
        onChange={handleCategoryChange}
        className="select-filter"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
