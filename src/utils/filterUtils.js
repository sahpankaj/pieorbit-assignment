export const filterItems = (items, filters) => {
    const { category, priceRange, keyword } = filters;
  
    return items
      .filter(item => !category || item.category === category)
      .filter(item => item.price >= priceRange[0] && item.price <= priceRange[1])
      .filter(item => !keyword || item.name.toLowerCase().includes(keyword.toLowerCase()));
  };
  