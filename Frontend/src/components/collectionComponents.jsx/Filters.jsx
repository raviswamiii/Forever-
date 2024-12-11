import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext.jsx";
import { AllCollection } from "./AllCollection.jsx";
import { SearchBar } from "./SearchBar.jsx";

export const Filters = () => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [finalProduct, setFinalProduct] = useState([]);
  const { products, search, setSearch, showSearch } = useContext(ShopContext);
  const [sort, setSort] = useState("relavent");

  const toggleCategory = (e) => {
    if (!category.includes(e.target.value)) {
      setCategory((prev) => [...prev, e.target.value]);
    } else {
      setCategory(category.filter((item) => item !== e.target.value));
    }
    console.log(category);
  };

  // const toggleCategory = (e) => {
  //   if (!category.includes(e.target.value)) {
  //     const newCategory = [...category, e.target.value];
  //     setCategory(newCategory);
  //     console.log(newCategory); // Logs the new state
  //   } else {
  //     const newCategory = category.filter((item) => item !== e.target.value);
  //     setCategory(newCategory);
  //     console.log(newCategory); // Logs the new state
  //   }
  // };

  const toggleSubCategory = (e) => {
    if (!subCategory.includes(e.target.value)) {
      setSubCategory((prev) => [...prev, e.target.value]);
    } else {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    }
    console.log(subCategory);
  };

  // const toggleSubCategory = (e) => {
  //   if (!subCategory.includes(e.target.value)) {
  //     const newSubCategory = [...subCategory, e.target.value];
  //     setSubCategory(newSubCategory);
  //     console.log(newSubCategory); // Logs the new state
  //   } else {
  //     const newSubCategory = subCategory.filter(
  //       (item) => item !== e.target.value
  //     );
  //     setSubCategory(newSubCategory);
  //     console.log(newSubCategory); // Logs the new state
  //   }
  // };

  const applyFilter = () => {
    let filteredProducts = products;

    if (search) {
      filteredProducts = products.filter((item) => {
         return item.name.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (category.length > 0) {
      filteredProducts = products.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      filteredProducts = products.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFinalProduct(filteredProducts);
  };

  const sortFunction = () => {
    let sortProduct = finalProduct.slice();

    switch (sort) {
      case "low-high":
        setFinalProduct(sortProduct.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFinalProduct(sortProduct.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search]);

  useEffect(() => {
    sortFunction();
  }, [sort]);

  return (
    <div>
      <div className=" flex gap-10 pt-10">
        <div className="pt-3">
          <p className=" text-xl ">FILTERS</p>
          <div className="text-sm font-light border border-gray-300 px-5 py-3 text-gray-700 w-[18vw] mt-6 flex flex-col gap-2">
            <p className="text-sm text-black font-medium">CATEGORIES</p>
            <p className="flex gap-2">
              {" "}
              <input
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              {" "}
              <input
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              {" "}
              <input
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>

          <div className="text-sm font-light border border-gray-300 px-5 py-3 text-gray-700 w-[18vw] mt-6 flex flex-col gap-2">
            <p className="text-sm text-black font-medium">TYPE</p>
            <p className="flex gap-2">
              {" "}
              <input
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              {" "}
              <input
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              {" "}
              <input
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
        <AllCollection finalProduct={finalProduct} setSort={setSort} />
      </div>
    </div>
  );
};
