import React, { useContext } from "react";
import { Link } from "react-router";
import { Store } from "../store/Context";
import { AiFillDelete, AiFillRedEnvelope } from "react-icons/ai";

const Cart = () => {
  const { cart, FavItems, totalCartPrice, remfromCart, remFav } =
    useContext(Store); // Store provides the cart and fav items state

  return (
    <div className="flex items-center justify-between w-full gap-10 px-20">
      <div className="py-10 w-[70%]">
        <h1 className="text-4xl font-bold font-Manrope">Products Cart</h1>
        <p className="text-slate-500">
          Explore Items to buy .....{" "}
          <Link
            to={"/WholeProducts"}
            className="transition-all duration-100 ease-in-out text-blue-950 hover:font-bold"
          >
            See Products
          </Link>
        </p>
        <h3 className="px-6 py-2 my-2 text-xl font-bold text-white bg-black rounded-full font-Manrope w-fit ">
          Total Price: ${!totalCartPrice ? "0" : totalCartPrice}
        </h3>
        <div className="mt-8">
          {cart && cart.length > 0 ? (
            <ul className="space-y-4 ">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-4 border rounded-lg shadow-cardShadow "
                >
                  <div>
                    <h2 className="text-lg font-bold font-manrope">
                      {item.title.slice(0, 30)}
                    </h2>
                    <p className="text-sm text-gray-500 font-Manrope">
                      Price: ${item.price}
                    </p>
                    <p className="text-sm text-gray-500 font-Manrope">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="text-lg font-bold font-Manrope">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <span
                    className="p-2 rounded-full bg-slate-300 hover:bg-red-900 group"
                    onClick={() => remfromCart(item)} // Removing item from cart
                  >
                    <AiFillDelete
                      className="text-red-600 transition-all duration-300 group-hover:text-white"
                      title="Delete item"
                      size={24}
                    />
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <h1 className="text-5xl font-bold text-center font-Manrope mt-7 text-slate-300">
              cart is empty! No items added yet.
            </h1>
          )}
        </div>
      </div>

      {/* Favourite Items Section */}
      <div className="border rounded-lg favourites-items w-[30%] pb-2">
        <h1 className="px-4 py-2 text-2xl font-extrabold font-Manrope text-start">
          Favourite items
        </h1>

        {/* Checking if there are any favourite items */}
        {FavItems.length > 0 ? (
          FavItems.map((item) => (
            <ul
              key={item.id} // Ensure each item has a unique key for proper rendering
              className="flex items-center justify-start w-full gap-6 px-2 py-2 font-Manrope bg-slate-300"
            >
              <img src={item.image} alt={item.title} className="w-10 h-10" />
              <li>
                {item.title.length > 20 ? item.title.slice(0, 20) : item.title}{" "}
                ${item.price.toFixed(2)}
              </li>
              <span
                className="p-1 transition-all duration-200 bg-white rounded-full hover:bg-black"
                onClick={() => remFav(item)} // Pass the correct item to remFav function
              >
                <AiFillDelete className="text-red-600" />
              </span>
            </ul>
          ))
        ) : (
          <h2 className="text-xl text-center text-gray-200">
            No favorite items added
          </h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
