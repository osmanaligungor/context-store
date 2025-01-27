import { createContext, useEffect, useState } from "react";
import api from "../api";

// 1.Adım : context yapısının temelini oluştur.
export const ProductContext = createContext();

// 2.Adım : context yapısında tutulacak verileri/fonksiyonları ve bunları diğer bileşenlere aktaracak sağlayıcıyı tanımla.

export const ProductProvider = ({ children }) => {
  // sağlayıcı içerisinde tutulacak olan state'leri tanımlarız.
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? "/products"
        : `/products/category/${selectedCategory}`;

    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  // 3.Adım : Uygulamaya sağlanacak olan verileri belirle.
  return (
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};
