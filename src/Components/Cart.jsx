import React from "react";
import { Link } from "react-router";

const Cart = () => {
  return (
    <div className="px-20 py-10">
      <h1 className="text-4xl font-bold font-Manrope ">Products Cart</h1>
      <p className="text-slate-500">
        Explore Items to buy .....{" "}
        <Link
          to={"/WholeProducts"}
          className="transition-all duration-100 ease-in-out text-blue-950 hover:font-bold"
        >
          See Products
        </Link>
      </p>
    </div>
  );
};

export default Cart;
