import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import BlackLoader from "../BlackLoader/BlackLoader";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is not authenticated, redirect to login
        navigate("/login");
      }
      setLoading(false);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [auth, navigate]);

  if (loading) {
    return <BlackLoader />; // You can replace this with a loading spinner
  }

  return children;
};

// Public Route Component (for login/signup pages)
const PublicRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated, redirect to home
        navigate("/");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

export { ProtectedRoute, PublicRoute };
