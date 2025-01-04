import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300); // Adjust the delay as needed // Scrolls to the top of the page
  }, [pathname]); // Trigger when the pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
