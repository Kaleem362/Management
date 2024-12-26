import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const BlackLabel = () => {
  return (
    <div className="flex items-center justify-center w-full bg-slate-50">
      <div className="flex items-center justify-around h-48 w-[80%] bg-black rounded-full black-label">
        <h1 className="w-[50%] font-extrabold text-5xl text-white font-Manrope">
          Stay Upto Date About Our Latest Offers{" "}
        </h1>
        <div className="flex flex-col bg-black rounded-full email-box">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="px-8 py-4 rounded-full w-72"
          />
          <AiOutlineMail size={22} className="absolute z-10 text-red-900" />

          <button className="px-8 py-4 my-2 bg-white rounded-full font-Manrope w-72">
            Subscribe to our newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlackLabel;
