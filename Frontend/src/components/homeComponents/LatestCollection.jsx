import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { ProductItem } from "./ProductItem";

export const LatestCollection = () => {
  const {products} = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-[7vw] sm:text-3xl text-gray-600">LATEST</h1>
          <h1 className="text-[7vw] sm:text-3xl text-gray-900">COLLECTION</h1>
          <p className="h-[2px] sm:h-[2.2px] w-10 sm:w-12 bg-gray-800 border-none"></p>
        </div>
        <p className="text-gray-600 font-medium text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
          accusamus!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-10">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

    </div>
  );
};

