import React, { useState } from "react";
import DiscountLabel from "./Components/DiscountLabel";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HeroProduct from "./Components/HeroProduct";
import TopSellingPage from "./Components/TopSellingPage";
import BrowsebyDressStyle from "./Components/BrowsebyDressStyle";

const App = () => {
  const [discount, setdiscount] = useState(true);
  return (
    <div>
      {discount ? <DiscountLabel /> : ""}
      <Navbar />
      <Hero />
      <HeroProduct />
      <TopSellingPage />
      <BrowsebyDressStyle />
    </div>
  );
};

export default App;
