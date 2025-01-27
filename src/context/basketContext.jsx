import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    // setBasket([...basket, product]); aşağıdaki yöntemle(concat) birebir aynıdır.

    // sepete eklenmeye çalışılan ürünü sepette ara
    const found = basket.find((i) => i.id === product.id);
    // ürün sepette yoksa sepete ekle
    if (!found) {
      setBasket(basket.concat({ ...product, amount: 1 }));
      toast.success("Ürün sepete eklendi", {
        autoClose: 2000,
      });
    } else {
      // ürün sepette varsa sepetteki elemanın miktarını arttır.
      const updated = { ...found, amount: found.amount + 1 };
      // diziyi güncelle
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));
      // state'i güncelle
      setBasket(newBasket);

      toast.success(`Ürün sepete eklendi (${updated.amount})`, {
        autoClose: 2000,
      });
    }
  };

  const removeFromBasket = (delete_id) => {
    const filtered = basket.filter((i) => i.id !== delete_id);

    setBasket(filtered);
    toast.error(`Ürün sepetten kaldırıldı!`);
  };

  const decreaseAmount = (delete_id) => {
    // miktarı azaltılacak elemanı bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      // elemanın miktarı 1'den fazlaysa azalt
      const updated = { ...found, amount: found.amount - 1 };
      // diziyi güncelledik
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      // state'i güncelle
      setBasket(newBasket);
      toast.info(`Ürünün miktarı azaltıldı ${updated.amount}`);
    } else {
      // elemanın miktarı 1 e eşit ise kaldır
      removeFromBasket(delete_id);

      toast.error(`Ürün sepetten kaldırıldı!`);
    }
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
};
