import React, { useContext } from "react";
import { Link } from "react-router";
import { Store } from "../store/Context";

const Cart = () => {
  const { cart, FavItems } = useContext(Store); // Store provides the cart state

  return (
    <div className="flex items-center justify-between w-full px-20">
      <div className=" py-10 w-[70%]">
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
                    <p className="text-sm text-gray-500">
                      Price: ${item.price}
                    </p>
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
      <div className=" border favourites-items w-[30%]">
        <h1 className="text-2xl text-center">Favourite items</h1>
        {FavItems.map((item) => (
          <ul className="flex items-center justify-between w-full px-4 py-2 bg-slate-300">
            <img src={item.image} alt={item.title} className="w-10 h-10" />
            <li>
              {item.title.length > 20 ? item.title.slice(0, 20) : item.title}
            </li>
            <li>${item.price.toFixed(2)}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Cart;
