import React from "react";
import { FaWindowClose } from "react-icons/fa";

const DiscountLabel = () => {
  return (
    <div className="flex justify-center h-8 pt-1 align-middle bg-black">
      <p className="flex text-center text-white">
        Sign up and get 20% OFF to you first order{" "}
        <a
          href="#"
          className="mx-2 font-bold text-white underline font-Manrope"
        >
          Sign Up Now
        </a>
      </p>
      <FaWindowClose
        className="absolute text-white cursor-pointer top-2 right-20"
        onClick={() => {
          alert("the cross button has clicked");
        }}
      />
    </div>
  );
};

export default DiscountLabel;
