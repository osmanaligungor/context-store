import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Card = ({ product }) => {
  const { addToBasket } = useContext(BasketContext);
  return (
    <div className="card py-2">
      <div className="d-flex justify-content-center">
        <img src={product.image} height={120} className="object-fit-contain" />
      </div>
      <div className="card-body">
        <h4 className="text-truncate">{product.title}</h4>
        <div className="d-grid">
          <h4 className="text-secondary">{product.category}</h4>
          <h5 className="text-warning text-end px-4">{product.price}$</h5>
        </div>
        <button
          className="w-100 rounded btn btn-dark"
          onClick={() => addToBasket(product)}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
