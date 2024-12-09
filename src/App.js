import React, {useEffect, useContext} from 'react';
import {ItemContext } from './context/ItemContext';
import { filterItems } from './utils/filterUtils';
import { sortItems } from './utils/sortUtils';
import { data as initialData } from './constants/data';
import SearchBar from './components/SearchBar';
import SortOptions from './components/SortOptions';
import Items from './components/Items';
import Filters from './components/filters/Filters';
import './App.css'


function App() {
  const { items, setItems, filters } = useContext(ItemContext);

  useEffect(() => {
    setItems(initialData);
  }, []);

  const filteredAndSortedItems = sortItems(
    filterItems(items, filters),
    filters.sortBy
  );

  return (
    <div className="app-container">
      <div className="app-content">
        <SearchBar />
        <div className="filters-sort-container">
          <Filters />
          <SortOptions />
        </div>
        <Items items={filteredAndSortedItems} />
      </div>
    </div>

  );
}

export default App;
