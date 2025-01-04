import React, { useContext } from "react";
import { Store } from "../store/Context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router";

const JewelleryProducts = () => {
  const { products } = useContext(Store);
  const jewelleryProducts = products.filter(
    (product) => product.category === "jewelery"
  );
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
  if (!products || products.length === 0) {
    return <div>No Jewellery Products Found.... </div>;
  }
  return (
    <div className="flex flex-col items-start justify-start w-full h-screen gap-10 p-10 mb-4 bg-slate-50">
      <h1 className="text-4xl font-extrabold text-black font-manrope text-start">
        Electronics
      </h1>
      <div className="flex items-start justify-start gap-4 womensClothingContainer">
        {jewelleryProducts.map((product) => {
          return (
            <Link to={`/product/${product.id}`}>
              <div
                className="w-48 h-auto p-4 rounded-lg items-cart bg-slate-700"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full h-auto rounded"
                />
                <h3 className="p-1 text-sm font-bold text-white font-manrope">
                  {product.title}
                </h3>
                <p>{product.desc}</p>
                <div className="flex items-center px-2 my-1 text-yellow-400">
                  {renderStars(product.rating.rate)}
                  <span className="ml-2 text-[8px] font-Manrope text-gray-300">
                    {product.rating.count} Reviews
                  </span>
                </div>
                <span className="p-1 px-2 mt-2 rounded-full bg-slate-400 text-[10px] mx-2 text-white">
                  {product.category}
                </span>
                <p className="p-2 pl-4 flex justify-end items-center text-white font-manrope  font-Poppins text-[18px]">
                  ${product.price}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default JewelleryProducts;
