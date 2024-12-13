import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

export const SearchBar = () => {
    const {search, setSearch} = useContext(ShopContext)
  console.log(search)
  return (
    <div>
      <form action="">
        <input
          className="outline-none border"
          type="text"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
