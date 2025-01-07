import React, { createContext, useState, useEffect, useContext } from "react";
import HeroImage from "../assets/images/HeroFashionImage.png";
import HeroImageTwo from "../assets/images/HeroFashionImagetwo.jpg";
import Gucci from "../assets/brand-logos/Guccibrandlogo.png";
import calvinKlein from "../assets/brand-logos/calvinkleinbrandlogo.png";
import versace from "../assets/brand-logos/versaceLogo.png";
import Prada from "../assets/brand-logos/Pradabrandlogo.png";
import Zara from "../assets/brand-logos/Zarabrandlogo.png";
import casual from "../assets/images/DressStyle-Casual.jpg";
import formal from "../assets/images/DressStyle-Formal.jpg";
import party from "../assets/images/DressStyle-Party.jpg";
import WomensClothing from "../assets/images/WomensClothing.png";
import { Customers } from "../Components/testimonialData";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  //main state for the product where all the API fetched products will be place, [array]
  const [products, setProducts] = useState([]);
  // testimonial people, customers array
  const [customers, setCustomers] = useState([]);
  // state for the cart items, users are adding and deleting items into it....
  const [cart, setCart] = useState([]); // Cart state
  // state for the favourite items, user can keep his favourite items in this array list
  const [FavItems, setFavItems] = useState([]);
  // state for the conditional placement of filled and outlined red color heart for favouriting and unfavouriting an item.
  const [addFavourite, setAddFavourite] = useState(false);
  // above the cart. this shows the total price of the items added to the cart, the user can see he/she have to pay this  much amount, shown on the top of cart list.
  const [totalCartPrice, setTotalCartPrice] = useState(null);
  // This is for cart length and it helps in the indicator badge on the cart icon, if there is items in the cart, badge will be shown otherwise no badge.
  const [cartLength, setCartLength] = useState(0);
  // state for storing the search query
  const [searchQuery, setSearchQuery] = useState("");

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
    setFavItems((prevFavItems) => {
      // Remove the product from the favourite items list
      return prevFavItems.filter((item) => item.id !== product.id);
    });
    setAddFavourite(false); // Reset the addFavourite state after removal
    // alert("Item removed successfully!!");
  };

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalCartPrice(totalPrice.toFixed(2)); // Set total price as a string with 2 decimal places
  }, [cart]);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredProducts = products.filter((product) => {
    const title = product.title.toLowerCase();
    const query = searchQuery.toLowerCase();

    // Split the query into words for multi-word matching
    const queryWords = query.split(" ");

    // Check if any query word is a substring of the title
    return (
      title.includes(query.slice(0, -1)) ||
      title.includes(query) ||
      title.includes(query + "s") ||
      queryWords.some((word) => title.includes(word))
    );
  });

  const contextValue = {
    brandlogos: {
      HeroImage,
      HeroImageTwo,
      Gucci,
      calvinKlein,
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
    remfromCart,
    addFav,
    FavItems,
    addFavourite,
    setAddFavourite,
    remFav,
    totalCartPrice,
    cartLength,
    setCartLength,
    searchQuery,
    handleSearchQuery,
    filteredProducts,
  };

  return <Store.Provider value={contextValue}>{children}</Store.Provider>;
};
