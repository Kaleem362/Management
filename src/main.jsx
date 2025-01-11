import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StoreProvider } from "./store/Context.jsx";
import { BrowserRouter } from "react-router";
import ScrollToTop from "./Components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/login">
    <StoreProvider>
      <ScrollToTop />
      <App />
    </StoreProvider>
  </BrowserRouter>
);
