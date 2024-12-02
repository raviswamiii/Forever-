import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = "$";

  const value = { currency, products };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
