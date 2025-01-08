import React from "react";

const Loader = () => {
  return (
    <div className="p-20 text-center">
      <div className="w-16 h-16 mx-auto mb-8 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>

      <p className="text-3xl text-black font-Manrope">Loading</p>
    </div>
  );
};

export default Loader;
