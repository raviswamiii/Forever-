import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { ProductItem } from "../homeComponents/ProductItem";

export const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const RelatedProductFunction = () => {
    let filteredProduct = products.slice();

    filteredProduct = filteredProduct.filter(
      (item) => item.category === category
    );
    filteredProduct = filteredProduct.filter(
      (item) => item.subCategory === subCategory
    );
    setRelatedProduct(filteredProduct.slice(0, 5));
  };

  useEffect(() => {
    RelatedProductFunction();
  }, [category, subCategory]);
  return (
    <div className="mt-28 flex flex-col items-center">
      <div className="flex items-center gap-2 mb-5 ">
        <h1 className="text-[7vw] sm:text-3xl text-gray-600">RELATED</h1>
        <h1 className="text-[7vw] sm:text-3xl text-gray-900">PROUDUCTS</h1>
        <p className="h-[2px] sm:h-[2.2px] w-10 sm:w-12 bg-gray-800 border-none"></p>
      </div>
      <div className="flex gap-4">
        {relatedProduct.map((item, index) => (
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
