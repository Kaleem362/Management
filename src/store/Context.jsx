import React, { createContext, useState, useEffect, useContext } from "react";
import HeroImage from "../assets/images/HeroFashionImage.png";
import HeroImageTwo from "../assets/images/HeroFashionImagetwo.jpg";
import Gucci from "../assets/brand-logos/Guccibrandlogo.png";
import CalvinKlein from "../assets/brand-logos/CalvinKleinbrandlogo.png";
import versace from "../assets/brand-logos/versaceLogo.png";
import Prada from "../assets/brand-logos/Pradabrandlogo.png";
import Zara from "../assets/brand-logos/Zarabrandlogo.png";
import casual from "../assets/images/DressStyle-Casual.jpg";
import formal from "../assets/images/DressStyle-Formal.jpg";
import party from "../assets/images/DressStyle-Party.jpg";
import WomensClothing from "../assets/images/WomensClothing.jpg";
import { Customers } from "../Components/testimonialData";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [cart, setCart] = useState([]); // this is Cart State
  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
      // console.table(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // got products fetched using API
  useEffect(() => {
    // console.log(products);
  }, [products]);

  // set Customers testimonial data
  useEffect(() => {
    setCustomers(Customers);
  }, []);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // If the product already exists in the cart, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Otherwise, add it to the cart with a quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

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
      WomensClothing,
    },
    customers,
    cart,
    addToCart,
  };

  return <Store.Provider value={contextValue}>{children}</Store.Provider>;
};
