import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { Store } from "../store/Context";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import Loader from "./Loader";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const { products } = useContext(Store);
  const [addFavourite, setAddFavourite] = useState(false);

  // Find the selected product
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Loader />;
  }

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
    <div className="flex w-full productDetailsContainer">
      {/* Product Details Section */}
      <div className="px-20 py-10 bg-slate-50 w-[70%] ">
        <h1 className="mb-8 text-5xl font-bold">{product.title}</h1>
        <div className="flex gap-10">
          <img
            src={product.image}
            alt={product.title}
            className="w-[250px] h-[250px] object-contain  rounded-lg"
          />
          <div>
            <p className="mb-4 text-justify w-96">{product.description}</p>
            <p className="text-sm text-gray-600">
              Category: {product.category}
            </p>
            <p className="flex items-center my-4 text-yellow-400">
              Rating: {renderStars(product.rating.rate)} ({product.rating.count}{" "}
              reviews)
            </p>
            <p className="my-4 mb-2 text-xl font-bold font-Manrope">
              Price: ${product.price}
            </p>
            <div className="flex items-center justify-start w-full button">
              <button className="px-6 py-2 text-white border rounded-full w-42 text-md hover:bg-white hover:text-slate-500 hover:border-slate-500 hover:border bg-slate-600 font-Manrope">
                Add to Cart
              </button>
              <button className="flex items-center w-auto px-6 py-2 mx-2 border rounded-full bg-slate-200">
                <p className="hidden group-hover:w-32 group-hover:flex group-hover:visible">
                  Add to favourites
                </p>
                {addFavourite ? (
                  <AiFillHeart
                    className="text-red-500 group"
                    size={24}
                    onClick={() => {
                      setAddFavourite(false);
                    }}
                  />
                ) : (
                  <AiOutlineHeart
                    className="text-red-500 group"
                    size={24}
                    onClick={() => {
                      setAddFavourite(true);
                    }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="ProductDetailsSidebar bg-white ml-4 w-[30%]">
        <div className="p-4 header-categories">
          <h4 className="mb-2 text-2xl font-bold  text-start font-Manrope">
            Suggested More Products
          </h4>
          {products.slice(0, 10).map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between w-full p-2 mb-2 rounded-lg hover:bg-gray-100 bg-slate-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-16 h-16 border rounded-lg"
              />
              <div className="flex flex-col flex-grow ml-4">
                <h2 className="text-sm font-bold text-gray-800 truncate">
                  {product.title.slice(0, 30)}
                </h2>
                <p className="text-sm font-semibold text-gray-500">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
