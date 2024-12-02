import React from "react";
import { assets } from "../../assets/assets";

export const Footer = () => {
  return (
    <div className="mt-36">
      <div className="sm:flex text-sm text-gray-600 justify-between gap-10">
        <div className="w-full sm:w-1/3 mb-10 ">
          <img className="h-9 mb-4" src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, quam.
            Quasi doloremque ipsa quia repudiandae.
          </p>
        </div>
        <div className="mb-10">
          <h1 className="text-xl text-black font-medium mb-4">COMPANY</h1>
          <p>Home</p>
          <p>About Us</p>
          <p>Delivery</p>
          <p>Privacy Policy</p>
        </div>
        <div className="mb-10">
          <h1 className="text-xl text-black font-medium mb-4">GET IN TOUCH</h1>
          <p>+1-212-456-7890</p>
          <p>contact@gmail.com</p>
        </div>
      </div>
      <div className="border-t py-5">
        <p className="text-sm text-gray-900 text-center font-medium">Copyright 2024@ forever.com - All Right Reserved</p>
      </div>
    </div>
  );
};
