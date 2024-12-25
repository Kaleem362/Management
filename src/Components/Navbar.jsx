import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center w-full px-10 py-3 bg-white ">
      <h1 className="h-full mr-3 text-3xl font-bold text-black font-Lilita">
        SHOP.CO
      </h1>
      <ul className="flex justify-around w-[350px] gap-5 ml-10 align-middle">
        <li className="flex items-center justify-center gap-1 align-middle cursor-pointer font-Manrope">
          Shop
          <IoIosArrowDown />
        </li>
        <li className="flex items-center cursor-pointer font-Manrope">
          On Sale
        </li>
        <li className="flex items-center cursor-pointer font-Manrope">
          New Arrivals
        </li>
        <li className="flex items-center cursor-pointer font-Manrope">
          Brands
        </li>
      </ul>
      <div className="relative w-[550px] ml-10">
        <FaSearch className="absolute text-gray-500 transform -translate-y-1/2 left-4 top-1/2" />
        <input
          type="text"
          className="w-full py-3 pl-12 pr-4 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Search Products"
        />
      </div>
      <div className="flex flex-row-reverse justify-between gap-8 px-16 User-account-icons">
        <FaRegCircleUser className="cursor-pointer size-6" />
        <FiShoppingCart className="cursor-pointer size-6" />
      </div>
    </div>
  );
};

export default Navbar;
