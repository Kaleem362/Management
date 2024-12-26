import React from "react";

const Loader = () => {
  return (
    <div class="text-center p-20">
      <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto mb-8"></div>
      {/* <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2> */}
      <p class="font-Manrope text-black text-3xl">
        Your items are on their way
      </p>
    </div>
  );
};

export default Loader;
