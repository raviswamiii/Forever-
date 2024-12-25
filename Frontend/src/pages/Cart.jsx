import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";
import { assets } from "../assets/assets";

export const Cart = () => {
  const { cartItems, products, currency, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  return (
    <div className="mt-16">
      <div className="flex items-center gap-2 pb-5 border-b">
        <h1 className="text-[7vw] sm:text-2xl text-gray-600">YOUR</h1>
        <h1 className="text-[7vw] sm:text-2xl text-gray-900">CART</h1>
        <p className="h-[2px] sm:h-[2.2px] w-10 sm:w-12 bg-gray-800 border-none"></p>
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              className="border-b flex justify-between items-center"
              key={index}
            >
              <div className="flex gap-6  py-4">
                <img className="h-[7vw]" src={productData.image[0]} alt="" />
                <div>
                  <p className="text-lg font-medium text-gray-800 mb-3">
                    {productData.name}
                  </p>
                  <div className="flex items-center">
                    <p className="mr-5 font-light">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="border bg-gray-100 px-3 py-1 cursor-pointer">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  updateQuantity(item._id, item.size, Number(e.target.value))
                }
                defaultValue={item.quantity}
                className="border outline-none w-20 px-2 py-1"
                type="number"
                min={1}
              />
              <img
                className="h-5 mr-14 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
