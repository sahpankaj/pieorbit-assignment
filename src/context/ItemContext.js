import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    keyword: '',
    sortBy: 'nameAsc',
  });

  const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <ItemContext.Provider value={{ items, setItems, filters, updateFilters }}>
      {children}
    </ItemContext.Provider>
  );
};
