import React, { useContext } from "react";
import { Store } from "../store/Context";
import { Link } from "react-router";

const Hero = () => {
  // Access `brandlogos`, `filteredProducts`, and `searchQuery` from context
  const { brandlogos, filteredProducts, searchQuery } = useContext(Store);

  return (
    <>
      {searchQuery === "" ? (
        <>
          <div className="flex flex-1 w-full px-14 bg-slate-50">
            <div className="text-section w-[50%] flex-col flex">
              <h1 className="text-[75px] leading-[70px] font-[900] text-black uppercase break-words font-Manrope pt-12 tracking-tighter">
                Find Favorite items for your life style
              </h1>
              <p className="p-4 leading-tight text-justify font-Manrope text-slate-500">
                Browse Through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style
              </p>
              <Link to="/WholeProducts">
                <button className="w-48 py-3 my-3 text-white transition-all bg-black border border-black rounded-full hover:outline-none hover:border hover:border-white duration-400 font-Manrope hover:bg-white hover:text-black hover:shadow-buttonShadow">
                  Shop Now
                </button>
              </Link>
              <div className="flex justify-center flex-grow gap-4 px-4 py-3">
                <div className="flex-col flex-1 border-r-[1px] border-slate-400 h-16">
                  <h3 className="text-3xl font-bold font-Manrope">200+</h3>
                  <p className="text-start text-slate-500 font-Manrope">
                    International Brands
                  </p>
                </div>
                <div className="flex-col flex-1 border-r-[1px] border-slate-400 h-16">
                  <h3 className="text-3xl font-bold font-Manrope">2,000+</h3>
                  <p className="text-start text-slate-500 font-Manrope">
                    High Quality Products
                  </p>
                </div>
                <div className="flex-col flex-1 border-r-[1px] border-slate-400 h-16">
                  <h3 className="text-3xl font-bold font-Manrope">30,000+</h3>
                  <p className="text-start text-slate-500 font-Manrope">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
            <div className="image-section w-[50%] h-full flex justify-center items-center pt-12">
              <img
                src={brandlogos.HeroImage}
                alt="Hero"
                className="h-full w-[50%]"
              />
              <img
                src={brandlogos.HeroImageTwo}
                alt="Hero Two"
                className="h-full w-[50%]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between px-8 py-4 bg-black black-brand-band h-[120px]">
            <div className="flex items-center justify-center flex-1 h-28">
              <img
                src={brandlogos.versace}
                alt="Versace"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center justify-center flex-1 h-28">
              <img src={brandlogos.Gucci} alt="Gucci" className="h-full w-54" />
            </div>
            <div className="flex items-center justify-center flex-1 h-28">
              <img src={brandlogos.Zara} alt="Zara" className="h-full w-54" />
            </div>
            <div className="flex items-center justify-center flex-1 h-28">
              <img
                src={brandlogos.CalvinKlein}
                alt="Calvin Klein"
                className="h-full w-54"
              />
            </div>
            <div className="flex items-center justify-center flex-1 h-28">
              <img src={brandlogos.Prada} alt="Prada" className="h-full w-54" />
            </div>
          </div>
        </>
      ) : (
        <div
          className="flex flex-wrap items-start justify-start w-full h-screen gap-4 p-10 overflow-scroll filtered-products bg-slate-50"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="flex flex-col items-center justify-between h-auto p-2 rounded-lg w-44 bg-slate-400 product-item text-start"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-auto w-28"
                />
                <p className="flex justify-start w-full m-2 text-sm font-bold text-white text-start font-manrope">
                  {product.title}
                </p>
                <div className="flex items-center justify-start w-full">
                  <p className="text-[12px] text-start">{product.category}</p>
                </div>
                <div className="flex items-center justify-end w-full p-2 font-bold font-Manrope price">
                  <p>${product.price}</p>
                </div>
                {/* Render other product details here */}
              </Link>
            ))
          ) : (
            <p className="items-center text-5xl font-extrabold text-center text-slate-200">
              Searching....
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Hero;
