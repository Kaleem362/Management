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
import { ProtectedRoute, PublicRoute } from "./authentication/ProtectedRoute";
import LoginAccount from "./authentication/LoginAccount";
import ForgotPassword from "./authentication/ForgotPassword";

const App = () => {
  const [discount, setDiscount] = useState(false);

  return (
    <div>
      {discount ? <DiscountLabel /> : ""}
      <Routes>
        <Route
          path="/createAccount"
          element={
            <PublicRoute>
              <CreateAccount />
            </PublicRoute>
          }
        />
        <Route path="*" element={"/"} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginAccount />
            </PublicRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/"
          element={
            <>
              <ProtectedRoute>
                <Navbar />
                <Hero />
                <HeroProduct />
                <TopSellingPage />
                <BrowsebyDressStyle />
                <Testimontial />
                <BlackLabel />
                <Footer />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/WholeProducts"
          element={
            <>
              <ProtectedRoute>
                <Navbar />
                <WholeProducts />
                <Footer />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <ProtectedRoute>
                <Navbar />
                <ProductDetails />
                <Footer />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/Cart"
          element={
            <>
              <ProtectedRoute>
                <Navbar />
                <Cart />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/mensClothing"
          element={
            <>
              <ProtectedRoute>
                <Navbar />
                <MensClothing />
                <TopSellingPage />
                <Footer />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/WomensClothing"
          element={
            <>
              <ProtectedRoute>
                <Navbar />
                <WomensClothing />
                <TopSellingPage />
                <Footer />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/ElectronicProducts"
          element={
            <>
              <ProtectedRoute>
                <Navbar />
                <ElectronicsProducts />
                <TopSellingPage />
                <Footer />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/JewelleryProducts"
          element={
            <>
              <ProtectedRoute>
                <Navbar />
                <JewelleryProducts />
                <TopSellingPage />
                <Footer />
              </ProtectedRoute>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
