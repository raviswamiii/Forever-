import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { ShopContext } from "../../context/ShopContext";
import { useLocation } from "react-router";

export const SearchBar = () => {
  const { showSearch, setShowSearch,search, setSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation()

  useEffect(()=>{
    if (location.pathname.includes("collection")) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  },[location])


  return showSearch && visible ? (
    <div className="h-20 flex justify-center items-center border-t gap-5 bg-gray-50 border-b">
      <form
        className="flex items-center border border-gray-400 w-1/2 rounded-3xl overflow-hidden pr-4 "
        action=""
      >
        <input
          className="w-full outline-none px-5 py-[7px] bg-transparent text-sm"
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e)=> setSearch(e.target.value)}
        />
        {/* <img className="h-4" src={assets.search_icon} alt="" /> */}
        <img
        onClick={() => setShowSearch(false)}
        className="h-2 cursor-pointer"
        src={assets.cross_icon}
        alt=""
      />
      </form>
     
    </div>
  ) : null;
};
