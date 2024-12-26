import React, { useContext } from "react";
import { Store } from "../store/Context";

const BrowsebyDressStyle = () => {
  const { dressImages } = useContext(Store);
  // console.log("Dress Images:", dressImages);
  return (
    <div className="flex items-center justify-center w-full pb-10 bg-white px-auto">
      <div className="choose-category-container w-[1000px] rounded-lg shadow-cardShadow px-12 bg-slate-50 pb-12">
        <h1 className="p-4 text-3xl font-extrabold text-center text-black font-Manrope">
          Browse by Style
        </h1>
        {/* First row */}
        <div className="bg-slate-50 flex gap-1 mb-2.5">
          {/* First div - 200px */}
          <div className="w-[300px] h-[200px] text-center bg-white flex justify-end gap-4 items-end p-2 flex-col rounded-lg hover:bg-slate-300 cursor-pointer relative">
            <h3 className="flex items-center mx-auto pt-[12px] text-3xl font-bold justify-center font-Manrope absolute top-0 left-2">
              Jewellery
            </h3>
            <img
              src={dressImages.casual}
              alt="placeholder"
              className="w-[250px] h-[300px] object-cover mt-8"
            />
          </div>

          {/* Second div - 400px */}
          <div className="w-[600px] h-[200px] bg-white mx-2 flex justify-center items-center object-cover  rounded-lg overflow-hidden hover:bg-slate-300 cursor-pointer">
            <h3 className="ml-8 text-3xl font-bold font-Manrope">
              Electronics
            </h3>
            <img
              src={dressImages.formal}
              alt="placeholder"
              className="w-[500px] object-contain h-[300px]"
            />
          </div>
        </div>

        {/* Second row */}
        <div className="flex gap-2.5">
          {/* Third div - 400px */}
          <div className="cursor-pointer w-[600px] relative h-[200px] bg-white flex justify-end overflow-hidden items-center p-2 rounded-lg hover:bg-slate-300">
            <h3 className="absolute flex justify-start px-4 text-3xl font-bold top-4 left-2 font-Manrope">
              Mens Clothing
            </h3>
            <img
              src={dressImages.party}
              alt="placeholder"
              className="w-[380px] ml-56 h-[350px] object-contain"
            />
          </div>

          {/* Fourth div - 200px */}
          <div className="cursor-pointer w-[300px] h-[200px] overflow-hidden bg-white relative rounded-lg flex justify-end items-end hover:bg-slate-300">
            <h3 className="absolute text-3xl font-bold font-Manrope left-3">
              Womens' Clothings
            </h3>
            <img
              src={dressImages.WomensClothing}
              alt="placeholder"
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsebyDressStyle;
