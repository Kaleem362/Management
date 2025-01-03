import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";
import { Store } from "../store/Context";

const Navbar = () => {
  const { cart, searchQuery, handleSearchQuery } = useContext(Store);
  const cartlength = cart.length;
  return (
    <div className="flex items-center w-full h-20 px-4 py-3 bg-white ">
      <Link to={"/"}>
        <h1 className="h-full mr-3 text-3xl font-bold text-black font-Lilita">
          SHOP.CO
        </h1>
      </Link>
      <ul className="flex justify-around mx-4 w-[450px] gap-5 ml-10 align-middle">
        <li className="relative flex items-center justify-center h-20 gap-1 font-bold align-middle cursor-pointer font-Manrope group">
          Shop
          <IoIosArrowDown className="transition-all group-hover:rotate-180" />
          <ul className="absolute flex-col w-[240px] hidden p-4 overflow-hidden transition-all group-hover:flex left-6 group-hover:bg-black top-16 group-hover:min-h-fit">
            <li className="p-2 text-lg text-center text-white min-w-fit font-Manrope hover:text-black hover:bg-white">
              Men's Clothing
            </li>
            <li className="w-full p-2 text-lg text-center text-white font-Manrope hover:text-black hover:bg-white">
              Women's Clothing
            </li>
            <li className="w-full p-2 text-lg text-center text-white hover:text-black hover:bg-white font-Manrope">
              Jewellery
            </li>
            <li className="w-full p-2 text-lg text-center text-white hover:text-black hover:bg-white font-Manrope">
              Electronics
            </li>
          </ul>
        </li>

        <li className="flex items-center font-bold cursor-pointer font-Manrope">
          Deals
        </li>
        <li className="flex items-center font-bold cursor-pointer font-Manrope min-w-fit">
          Brands
        </li>
        <li className="flex items-center font-bold cursor-pointer font-Manrope min-w-fit">
          Contact
        </li>
      </ul>
      <div className="relative w-[550px] ml-10">
        <FaSearch className="absolute text-gray-500 transform -translate-y-1/2 left-4 top-1/2" />
        <input
          type="text"
          className="w-full py-3 pl-12 pr-4 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Search Products"
          onChange={handleSearchQuery}
          value={searchQuery}
        />
      </div>
      <div className="flex flex-row-reverse justify-between gap-8 px-16 User-account-icons">
        <FaRegCircleUser className="cursor-pointer size-6" />
        <Link to="/Cart" className="relative">
          <FiShoppingCart className="relative cursor-pointer size-6" />
          {cartlength > 0 && (
            <span
              className="absolute flex items-center justify-center w-5 h-5 text-sm font-bold text-white bg-red-600 rounded-full -right-3 -top-2"
              aria-label={`Cart contains ${cartlength} items`}
            >
              {cartlength}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
