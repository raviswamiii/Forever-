import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex justify-between items-center py-4">
      <Link to="/">
        <img className="h-9 sm:h-11" src={assets.logo} alt="" />
      </Link>
      <div className="hidden sm:flex sm:gap-3 md:gap-4 text-sm font-medium text-gray-700 ">
        <NavLink className="flex flex-col items-center" to="/">
          <p>HOME</p>
          <hr className="w-1/2 h-[1px] bg-black border-none hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center" to="/collection">
          <p>COLLECTION</p>
          <hr className="w-1/2 h-[1px] bg-black border-none hidden" />
        </NavLink>

        <NavLink className="flex flex-col items-center" to="/about">
          <p>ABOUT</p>
          <hr className="w-1/2 h-[1px] bg-black border-none hidden" />
        </NavLink>

        <NavLink className="flex flex-col items-center" to="/contact">
          <p>CONTACT</p>
          <hr className="w-1/2 h-[1px] bg-black border-none hidden" />
        </NavLink>
      </div>
      <div className="flex gap-4 items-center">
        <img
          className="h-5 sm:h-6 cursor-pointer"
          src={assets.search_icon}
          alt=""
        />
        <div className="relative group">
          <img
            className="h-5 sm:h-6 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="absolute pt-2 right-0 hidden group-hover:block">
            <div className="bg-blue-300 text-gray-600 p-3 rounded w-[8.5vw]">
              <p className="hover:text-black cursor-pointer pb-1">My Profile</p>
              <p className="hover:text-black cursor-pointer pb-1">Orders</p>
              <p className="hover:text-black cursor-pointer pb-1">Logout</p>
            </div>
          </div>
        </div>
        <Link className="relative" to="/cart">
          <img className="h-5 sm:h-6" src={assets.cart_icon} alt="" />
          <p className="absolute top-[10px] sm:top-3 right-[-2px] bg-black text-white rounded-full text-[7px] h-1 w-1 sm:h-3 sm:w-3 p-[7px] sm:p-2 flex justify-center items-center">
            10
          </p>
        </Link>
        <div>
          <img
            onClick={() => setVisible(true)}
            className="h-4 sm:h-6 sm:hidden cursor-pointer"
            src={assets.menu_icon}
            alt=""
          />
          <div  className={`sm:hidden bg-white absolute right-0 left-0 top-0 bottom-0 ${visible ? "block" : "hidden"}`}>
            <div onClick={() => setVisible(false)} className="flex items-center gap-4 px-3 py-3 border-b-2 cursor-pointer">
              <img
              
                className="h-4 rotate-180"
                src={assets.dropdown_icon}
                alt=""
              />
              <p className="text-lg text-gray-700 font-semibold">Back</p>
            </div>
            <div className="">
              <Link to="/">
                <p onClick={() => setVisible(false)} className="font-semibold text-gray-700 px-5 py-3 border-b-2 hover:bg-black hover:text-white">
                  HOME
                </p>
              </Link>

              <Link to="/collection">
                <p onClick={() => setVisible(false)} className="font-semibold text-gray-700 px-5 py-3 border-b-2 hover:bg-black hover:text-white">
                  COLLECTION
                </p>
              </Link>
              <Link to="/about">
                <p onClick={() => setVisible(false)} className="font-semibold text-gray-700 px-5 py-3 border-b-2 hover:bg-black hover:text-white">
                  ABOUT
                </p>
              </Link>
              <Link to="/contact">
                <p onClick={() => setVisible(false)} className="font-semibold text-gray-700 px-5 py-3 border-b-2 hover:bg-black hover:text-white">
                  CONTACT
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
