import React, {useEffect, useContext} from 'react';
import {ItemContext } from './context/ItemContext';
import { filterItems } from './utils/filterUtils';
import { sortItems } from './utils/sortUtils';
import { data as initialData } from './constants/data';
import SearchBar from './components/SearchBar';
import SortOptions from './components/SortOptions';
import Items from './components/Items';
import Filters from './components/filters/Filters';


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
    <div className=" container mx-auto px-4 py-6">
      <div className="flex flex-col space-y-4">
        <SearchBar />
        <div className="flex flex-col gap-3 md:flex-row md:gap-0 justify-between">
          <Filters />
          <SortOptions />
        </div>
        <Items items={filteredAndSortedItems} />
      </div>
    </div>

  );
}

export default App;
