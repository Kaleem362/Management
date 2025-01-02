import React, { useState } from "react";
import DiscountLabel from "./Components/DiscountLabel";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HeroProduct from "./Components/HeroProduct";
import TopSellingPage from "./Components/TopSellingPage";
import BrowsebyDressStyle from "./Components/BrowsebyDressStyle";
import Testimontial from "./Components/Testimontial";
import { Route, Routes } from "react-router";
import WholeProducts from "./Components/WholeProducts";
import BlackLabel from "./Components/BlackLabel";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";

const App = () => {
  const [discount, setdiscount] = useState(false);
  return (
    <div>
      {discount ? <DiscountLabel /> : ""}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <HeroProduct />
              <TopSellingPage />
              <BrowsebyDressStyle />
              <Testimontial />
              <BlackLabel />
              <Footer />
            </>
          }
        />
        <Route
          path="/WholeProducts"
          element={
            <>
              <Navbar />
              <WholeProducts />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <Navbar />
              <ProductDetails />
            </>
          }
        />
        <Route
          path="/Cart"
          element={
            <>
              <Navbar />
              <Cart />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
