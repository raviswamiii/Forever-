import React, { useContext } from "react";
import { ProductItem } from "../homeComponents/ProductItem";

export const AllCollection = ({ finalProduct, setSort }) => {

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 h-6">
          <h1 className="text-[7vw] sm:text-2xl text-gray-600">ALL</h1>
          <h1 className="text-[7vw] sm:text-2xl text-gray-900">COLLECTION</h1>
          <p className="h-[2px] sm:h-[2.2px] w-10 sm:w-12 bg-gray-800 border-none"></p>
        </div>
        <select onChange={(e)=>setSort(e.target.value)} className="p-3 border-2 border-gray-400 text-sm outline-none ">
          <option value="relavent" >Sort by: Relavent</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-4 gap-4 gap-y-6 mt-4">
        {finalProduct.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};
