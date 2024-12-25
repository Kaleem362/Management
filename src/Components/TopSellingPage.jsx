import React, { useContext } from "react";
import { Store } from "../store/Context";
import Loader from "./Loader";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const TopSellingPage = () => {
  const { products } = useContext(Store);
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate); // Full stars
    const emptyStars = 5 - fullStars; // Remaining stars
    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <AiFillStar key={`full-${index}`} className="text-yellow-400" />
          ))}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <AiOutlineStar key={`empty-${index}`} className="text-gray-300" />
          ))}
      </>
    );
  };
  return (
    <div className="w-full h-[100vh] bg-white flex flex-col ">
      <h1 className="text-5xl font-extrabold tracking-tighter text-center text-black font-Manrope pb-7">
        Top Selling
      </h1>
      <div className="flex justify-center w-full p-4 overflow-x-hidden gap-7 bg-slate-50">
        {products.length > 0 ? (
          products.slice(5, 10).map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[220px] h-[320px]  bg-slate-50 rounded-lg "
            >
              <div className="flex items-center justify-center w-full h-[180px] bg-white rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt="Product"
                  className="object-contain w-[90%] py-4 h-[150px]"
                />
              </div>
              <p className="text-start pt-2 px-2 font-bold font-Poppins text-[15px] justify-between w-full">
                {product.title.slice(0, 25)}
              </p>
              <div className="flex items-center px-2 my-1 text-yellow-400">
                {renderStars(product.rating.rate)} {/* Render star ratings */}
                <span className="ml-2 text-[10px] font-Manrope text-gray-500">
                  {product.rating.count} Reviews
                </span>
              </div>
              <span className="p-1 px-2 mt-2 rounded-full bg-slate-400 text-[10px] mx-2 text-white">
                {product.category}
              </span>
              <p className="p-2 pl-4 font-Poppins text-[18px]">
                ${product.price}
                {/* <span className="mark text-slate-400">$100</span> */}
              </p>
            </div>
          ))
        ) : (
          <Loader /> // Show loading if no products are available
        )}
      </div>
      <div className="flex items-center justify-center w-full button">
        <button
          onClick={() => navigate("/WholeProducts")} // Navigate to the products page
          className="px-12 py-3 mt-5 font-bold text-black transition-all border rounded-full  border-slate-500 font-Manrope transition-4 bg-aliceblue hover:bg-slate-200 w-[200px]"
        >
          View All
        </button>
      </div>
      <hr className="w-full h-[2px] mx-auto mt-10 bg-slate-300" />
    </div>
  );
};

export default TopSellingPage;
