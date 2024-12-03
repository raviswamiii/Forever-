import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { ProductItem } from "./ProductItem";

export const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const bestSeller = products.filter((item) => item.bestseller);
    setBestProducts(bestSeller.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-[7vw] sm:text-3xl text-gray-600">BEST</h1>
          <h1 className="text-[7vw] sm:text-3xl text-gray-900">SELLER</h1>
          <p className="h-[2px] sm:h-[2.2px] w-10 sm:w-12 bg-gray-800 border-none"></p>
        </div>

        <p className="text-gray-600 font-medium text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-10">
        {bestProducts.map((item, index) => (
          <ProductItem
            key={index}
            image={item.image}
            id={item._id}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
