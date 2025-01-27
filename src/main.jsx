import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ProductProvider } from "./context/productContext.jsx";
import { BasketProvider } from "./context/basketContext.jsx";
import { ToastContainer, toast } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <BasketProvider>
        <App />
        <ToastContainer autoClose={2000} />
      </BasketProvider>
    </ProductProvider>
  </StrictMode>
);
