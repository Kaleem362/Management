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
  const [cart, setCart] = useState([]); // Cart state
  const [FavItems, setFavItems] = useState([]); // Favorite items state
  const [addFavourite, setAddFavourite] = useState(false);
  const [totalCartPrice, setTotalCartPrice] = useState(null);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setCustomers(Customers); // Set customer data
  }, []);

  // Add to Cart function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Add to Favourite function
  const addFav = (product) => {
    setFavItems((prevFavitems) => {
      // Check if product already exists in favourites
      const existingItem = prevFavitems.find((item) => item.id === product.id);
      if (!existingItem) {
        setAddFavourite(true);
        return [...prevFavitems, product];
      }
      return prevFavitems; // Do nothing if product is already in favs
    });
  };

  // Remove from Cart function
  const remfromCart = (product) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== product.id);
    });
  };

  // Remove from Favourites function
  const remFav = (product) => {
    alert("Item removed successfully!!");
    setFavItems((prevFavItems) => {
      // Remove the product from the favourite items list
      return prevFavItems.filter((item) => item.id !== product.id);
    });
    setAddFavourite(false); // Reset the addFavourite state after removal
  };

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalCartPrice(totalPrice.toFixed(2)); // Set total price as a string with 2 decimal places
  }, [cart]);

  const contextValue = {
    products,
    cart,
    addToCart,
    remfromCart,
    addFav,
    FavItems,
    remFav,
    totalCartPrice,
  };

  return <Store.Provider value={contextValue}>{children}</Store.Provider>;
};
