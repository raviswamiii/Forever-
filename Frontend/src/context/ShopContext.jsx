import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = "$";
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  

  const value = {
    currency,
    products,
    showSearch,
    setShowSearch,
    search,
    setSearch,
    
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
