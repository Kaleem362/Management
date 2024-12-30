import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Store } from "../store/Context";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const { products } = useContext(Store);

  // Find the selected product
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <div className="p-8 bg-slate-50">
      <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
      <div className="flex gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-[300px] h-[300px] object-contain border rounded-lg"
        />
        <div>
          <p className="mb-2 text-xl">Price: ${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <p className="text-sm text-gray-600">Category: {product.category}</p>
          <p className="flex items-center text-yellow-400">
            Rating: {renderStars(product.rating.rate)} ({product.rating.count}{" "}
            reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
