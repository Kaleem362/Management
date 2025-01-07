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
import MensClothing from "./Components/MensClothing";
import WomensClothing from "./Components/WomensClothing";
import ElectronicsProducts from "./Components/ElectronicProducts";
import JewelleryProducts from "./Components/JewelleryProducts";
import CreateAccount from "./authentication/CreateAccount";

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
              <Footer />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <Navbar />
              <ProductDetails />
              <Footer />
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
        <Route
          path="/mensClothing"
          element={
            <>
              <Navbar />
              <MensClothing />
              <TopSellingPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/WomensClothing"
          element={
            <>
              <Navbar />
              <WomensClothing />
              <TopSellingPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/ElectronicProducts"
          element={
            <>
              <Navbar />
              <ElectronicsProducts />
              <TopSellingPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/JewelleryProducts"
          element={
            <>
              <Navbar />
              <JewelleryProducts />
              <TopSellingPage />
              <Footer />
            </>
          }
        />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </div>
  );
};

export default App;
