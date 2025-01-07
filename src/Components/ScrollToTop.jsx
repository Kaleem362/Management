import { useEffect } from "react";
import { useLocation } from "react-router"; // Make sure to import from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0); // Scrolls to the top after 300ms delay
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup timeout
  }, [pathname]); // This effect runs whenever the pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
