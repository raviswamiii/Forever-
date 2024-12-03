import React from "react";
import { assets } from "../../assets/assets";

export const Hero = () => {
  return (
    <div className="border border-gray-500 sm:flex">
      <div className="flex sm:w-1/2 h-[35vh] sm:h-[70vh] items-center justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <p className="w-11 h-[2px] bg-gray-800"></p>
            <p className="font-medium text-gray-800">OUR BESTSELLERS</p>
          </div>

          <h1 className="prata-regular text-[10vw] sm:text-[4vw] text-gray-800 flex">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-800">SHOP NOW</p>
            <p className="w-11 h-[2px] bg-gray-800"></p>
          </div>
        </div>
      </div>
      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
    </div>
  );
};
