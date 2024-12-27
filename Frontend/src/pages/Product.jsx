import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { RelatedProduct } from "../components/collectionComponents.jsx/RelatedProduct";

export const Product = () => {
  const { products, currency } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState();
  const [image, setImage] = useState();
  const [size, setSizes] = useState();

  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="mt-10">
      <div className=" flex gap-10">
        <div className="flex h-[76vh] gap-3">
          <div className="flex flex-col justify-between">
            {productData.image.map((item, index) => (
              <img
                className="cursor-pointer h-[8.2vw]"
                onClick={() => setImage(item)}
                key={index}
                src={item}
                alt=""
              />
            ))}
          </div>
          <div>
            <img className="h-full" src={image} alt="" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <p className="text-2xl font-medium">{productData.name}</p>
          <div className="flex gap-1 items-center">
            <img className="h-3" src={assets.star_icon} alt="" />
            <img className="h-3" src={assets.star_icon} alt="" />
            <img className="h-3" src={assets.star_icon} alt="" />
            <img className="h-3" src={assets.star_icon} alt="" />
            <img className="h-3" src={assets.star_dull_icon} alt="" />
            <p className="ml-2">(122)</p>
          </div>
          <p className="text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="text-gray-500">{productData.description}</p>
          <div>
            <p className="mb-5">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSizes(item)}
                  className={`border bg-gray-100 px-4 py-2 cursor-pointer ${
                    item === size ? "border-red-400" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white w-[11vw] text-sm p-3 text-center cursor-pointer my-3 active:bg-gray-700">
            ADD TO CART
          </button>
          <hr />
          <div>
            <p className="text-sm text-gray-500">100% Original product.</p>
            <p className="text-sm text-gray-500">
              Cash on delivery in available on this product.
            </p>
            <p className="text-sm text-gray-500">
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="flex">
          <p className="border px-5 py-3 text-sm font-medium">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews(122)</p>
        </div>
        <div className="border p-5 flex flex-col gap-5">
          <p className="text-sm text-gray-500">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className="text-sm text-gray-500">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <p>Product not found</p>
  );
};
