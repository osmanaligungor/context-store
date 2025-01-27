// * Bir bileşenden context yapısından value olarak tanımlanan verilere erişme.
// 1) useContext ismindeki react hook'u kullanılmalı
// 2) parametre olarak abone olunacak context yapısı verilmeli
// 3) useContext belirlediğimiz context yapısına abone olur ve her güncellemeyi anlık olarak getirir.

import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Card from "../components/Card";

const Home = () => {
  const { products, selectedCategory } = useContext(ProductContext);
  return (
    <div className="mt-4 container">
      <h1>{products?.length} Ürün bulundu</h1>
      <h2 className="text-secondary">
        {selectedCategory !== "all" && selectedCategory + " için sonuçlar"}
      </h2>

      <div className="wrapper">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
