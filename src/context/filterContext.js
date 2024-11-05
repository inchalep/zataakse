import { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterValues, setFilterValues] = useState({
    categories: [],
    price: 10,
    brands: [],
    stocks: [],
    sortBy: "",
  });
  return (
    <FilterContext.Provider value={{ filterValues, setFilterValues }}>
      {children}
    </FilterContext.Provider>
  );
};
export default FilterProvider;
