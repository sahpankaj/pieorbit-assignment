export const sortItems = (items, sortBy) => {
    switch (sortBy) {
      case 'nameAsc':
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
      case 'nameDesc':
        return [...items].sort((a, b) => b.name.localeCompare(a.name));
      case 'priceAsc':
        return [...items].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...items].sort((a, b) => b.price - a.price);
      default:
        return items;
    }
  };
  