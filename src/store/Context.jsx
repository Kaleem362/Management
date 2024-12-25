import React, { createContext, useState, useEffect } from "react";
import HeroImage from "../assets/images/HeroFashionImage.png";
import HeroImageTwo from "../assets/images/HeroFashionImagetwo.jpg";
import Gucci from "../assets/brand-logos/Guccibrandlogo.png";
import CalvinKlein from "../assets/brand-logos/CalvinKleinbrandlogo.png";
import versace from "../assets/brand-logos/versaceLogo.png";
import Prada from "../assets/brand-logos/Pradabrandlogo.png";
import Zara from "../assets/brand-logos/Zarabrandlogo.png";
import casual from "../assets/images/DressStyle-Casual.png";
import formal from "../assets/images/DressStyle-Formal.jpg";
import party from "../assets/images/DressStyle-Party.jpg";
import gym from "../assets/images/DressStyle-Gym.jpg";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
      console.table(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const contextValue = {
    brandlogos: {
      HeroImage,
      HeroImageTwo,
      Gucci,
      CalvinKlein,
      versace,
      Prada,
      Zara,
    },
    products,
    dressImages: {
      casual,
      formal,
      party,
      gym,
    },
  };

  return <Store.Provider value={contextValue}>{children}</Store.Provider>;
};
