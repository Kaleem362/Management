import React, { useContext } from "react";
import { Store } from "../store/Context";
import Loader from "./Loader";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const WholeProducts = () => {
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
    <>
      <h1 className="px-20 pt-8 text-4xl font-bold font-Manrope bg-slate-50">
        Choose Your Favourites
      </h1>
      <div className="flex flex-wrap justify-center w-full p-8 py-10 gap-7 bg-slate-50">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="flex-shrink-0 w-[220px] h-[320px] bg-slate-50 rounded-lg"
            >
              <div>
                <div className="flex items-center justify-center w-full h-[180px] bg-white rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt="Product"
                    className="shadow-xl rounded-lg border-slate-300 border object-contain w-[90%] py-4 h-[150px]"
                  />
                </div>
                <p className="text-start pt-2 px-2 font-bold font-Poppins text-[15px] justify-between w-full">
                  {product.title.slice(0, 25)}
                </p>
                <div className="flex items-center px-2 my-1 text-yellow-400">
                  {renderStars(product.rating.rate)}
                  <span className="ml-2 text-[10px] font-Manrope text-gray-500">
                    {product.rating.count} Reviews
                  </span>
                </div>
                <span className="p-1 px-2 mt-2 rounded-full bg-slate-400 text-[10px] mx-2 text-white">
                  {product.category}
                </span>
                <p className="p-2 pl-4 font-Poppins text-[18px]">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default WholeProducts;
