import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { ProductItem } from "../homeComponents/ProductItem";

export const Filter = () => {
  const { products, filterProducts, setFilterProducts, search, setSearch } =
    useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavance");

  const categoryFunction = (e) => {
    if (!category.includes(e.target.value)) {
      setCategory((prev) => [...prev, e.target.value]);
    } else {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    }
  };

  const subCategoryFunction = (e) => {
    if (!subCategory.includes(e.target.value)) {
      setSubCategory((prev) => [...prev, e.target.value]);
    } else {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    }
  };

  const showProduct = () => {
    let productsCopy = products;

    productsCopy = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (category.length > 0) {
      productsCopy = products.filter((item) => {
        return category.includes(item.category);
      });
    }

    if (subCategory.length > 0) {
      productsCopy = products.filter((item) => {
        return subCategory.includes(item.subCategory);
      });
    }

    setFilterProducts(productsCopy);
  };

  const sortFunction = () => {
    let sortedProducts = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(sortedProducts.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(sortedProducts.sort((a, b) => b.price - a.price));
        break;

      default:
        showProduct();
        break;
    }
  };

  useEffect(() => {
    sortFunction();
  }, [sortType]);

  useEffect(() => {
    showProduct();
  }, [category, subCategory, search]);

  return (
    <div className="flex gap-10">
      <div className="mt-5">
        <p className="text-lg mb-5">FILTERS</p>
        <div>
          <div className="border border-gray-300 px-5 py-3 w-[18vw] mb-5">
            <p className="text-sm font-medium mb-2">CATEGORIES</p>
            <div className="text-sm font-light text-gray-600 flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={"Men"}
                  onChange={categoryFunction}
                />
                Men
              </p>
              <p className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={"Women"}
                  onChange={categoryFunction}
                />
                Women
              </p>
              <p className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={"Kids"}
                  onChange={categoryFunction}
                />
                Kids
              </p>
            </div>
          </div>

          <div className="border border-gray-300 px-5 py-3 w-[18vw] mb-5">
            <p className="text-sm font-medium mb-2">TYPE</p>
            <div className="text-sm font-light text-gray-600 flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={"Topwear"}
                  onChange={subCategoryFunction}
                />
                Topwear
              </p>
              <p className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={"Bottomwear"}
                  onChange={subCategoryFunction}
                />
                Bottomwear
              </p>
              <p className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={"Winterwear"}
                  onChange={subCategoryFunction}
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-[7vw] sm:text-2xl text-gray-600">ALL</h1>
            <h1 className="text-[7vw] sm:text-2xl text-gray-900">COLLECTION</h1>
            <p className="h-[2px] sm:h-[2.2px] w-10 sm:w-12 bg-gray-800 border-none"></p>
          </div>

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="outline-none border-2 border-gray-300 p-3 text-sm"
          >
            <option value="relavance">Sort by: Relavance</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-4 gap-y-6 mt-5">
          {filterProducts.map((item, index) => {
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
    </div>
  );
};
