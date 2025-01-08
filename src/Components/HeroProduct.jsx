import React, { useContext, useEffect } from "react";
import { Store } from "../store/Context";
import Loader from "./Loader";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Import star icons
import { useNavigate } from "react-router";

const HeroProduct = () => {
  const Navigate = useNavigate();
  const { products } = useContext(Store);

  useEffect(() => {
    // console.log(products); // Ensure the products are being logged correctly
  }, [products]);

  const renderStars = (rate) => {
    const fullStars = Math.floor(rate); // Full stars
    const emptyStars = 5 - fullStars; // Remaining stars
    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <AiFillStar key={`full-${index}`} Name="text-yellow-400" />
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
    <div className="flex flex-col items-center justify-between p-10 bg-white">
      <h1 className="text-5xl font-extrabold tracking-tight text-center text-black font-Manrope pb-7">
        New Arrivals
      </h1>
      <div className="flex justify-center w-full p-4 overflow-x-hidden gap-7 bg-slate-50">
        {products.length > 0 ? (
          products.slice(0, 5).map((product) => (
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
              <p className="p-2 pl-4  font-Poppins text-[18px]">
                ${product.price}{" "}
              </p>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
      <button
        onClick={() => Navigate("WholeProducts")} // Navigate to the products page
        className="px-12 py-3 mt-5 font-bold text-black transition-all border rounded-full border-slate-500 font-Manrope transition-4 bg-aliceblue hover:bg-slate-200"
      >
        View All
      </button>
      <hr className="w-full h-[2px] mx-auto my-10 bg-slate-300" />
    </div>
  );
};

export default HeroProduct;
