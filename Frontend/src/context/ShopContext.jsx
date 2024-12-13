import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = "$";
  const [filterProducts, setFilterProducts] = useState([]);
  const [search, setSearch] = useState("");

  const value = {
    currency,
    products,
    filterProducts,
    setFilterProducts,
    search, setSearch
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
