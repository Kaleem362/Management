import React, { createContext, useState, useEffect } from "react";
import HeroImage from "../assets/images/HeroFashionImage.png";
import HeroImageTwo from "../assets/images/HeroFashionImagetwo.jpg";
import Gucci from "../brand-logos/Guccibrandlogo.png";
import versace from "../brand-logos/versaceLogo.png";
import Prada from "../brand-logos/Pradabrandlogo.png";
import Zara from "../brand-logos/Zarabrandlogo.png";
import casual from "../assets/images/DressStyle-Casual.jpg";
import formal from "../assets/images/DressStyle-Formal.jpg";
import party from "../assets/images/DressStyle-Party.jpg";
import WomensClothing from "../assets/images/WomensClothing.png";
import { Customers } from "../Components/testimonialData";
import Ck from "../brand-logos/calvinkleinbrandlogo.png";
import { auth } from "../Firebase/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router";

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
  // Email and password states for create account state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [profileView, setProfileView] = useState(false);
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

  // authentication functions started here...........
  // create account function
  // user will be created with email and password
  const createacc = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Created user account successfully:", userCredential.user);
      await setUser(userCredential, name);
      //navigate to home screen after the successful data of the user is set
      navigate("/home");
    } catch (error) {
      console.error("Error creating account:", error.code, error.message);
      // Optional: Provide user-friendly error messages
      if (error.code === "auth/email-already-in-use") {
        console.error(
          "The email address is already in use by another account."
        );
      } else if (error.code === "auth/weak-password") {
        console.error("The password is too weak.");
      } else {
        console.error("An unexpected error occurred.");
      }
    }
    setEmail("");
    setPassword("");
    setName("");
  };
  // sign in with google account instantly
  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("Logged in with google account successfully");
      navigate("/home");
    } catch (error) {
      console.log(error.code);
    }
  };

  //log out function for user
  const Logout = async () => {
    try {
      await signOut(auth);
      // Remove the alert as it might interrupt navigation
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
      alert(error.message);
    }
  };

  // const setUser = async (userCredential, name) => {
  //   try {
  //     if (!userCredential?.user?.uid || !userCredential?.user?.email || !name) {
  //       throw new Error("Missing required user data");
  //     }
  //     await setDoc(doc(db, "users", userCredential.user.uid), {
  //       userid: userCredential.user.uid,
  //       email: userCredential.user.email,
  //       name: name,
  //       createdAt: new Date().toISOString(),
  //     });
  //     console.log("user data stored successfully");
  //   } catch (error) {
  //     console.log("Error setting user:", error.code);
  //     throw error;
  //   }
  // };
  const contextValue = {
    brandlogos: {
      HeroImage,
      HeroImageTwo,
      Gucci,
      versace,
      Prada,
      Zara,
      Ck,
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
    email,
    setEmail,
    password,
    setPassword,
    createacc,
    name,
    setName,
    profileView,
    setProfileView,
    Logout,
    googleSignIn,
  };

  return <Store.Provider value={contextValue}>{children}</Store.Provider>;
};

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
