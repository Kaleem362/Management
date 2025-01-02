import React, { useContext } from "react";
import { Link } from "react-router";
import { Store } from "../store/Context";

const Cart = () => {
  const { cart } = useContext(Store); // Store provides the cart state

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
      <div className="mt-8">
        {cart && cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-4 border rounded shadow-md"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="text-lg font-bold">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="text-5xl font-bold text-center mt-7 text-slate-300">
            Your cart is empty!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
