import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { FaTrashCan } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";

const BasketItem = ({ product }) => {
  const { addToBasket, removeFromBasket, decreaseAmount } =
    useContext(BasketContext);
  return (
    <div
      className="d-flex align-items-center gap-3 gap-md-4 shadow border p-3
    rounded p-md-4"
    >
      <div>
        <img
          src={product.image}
          height={60}
          width={60}
          className="object-fit-contain"
        />
      </div>
      <div className="w-100">
        <div>
          <h6 className="fw-bold text-truncate">{product.title}</h6>
          <div className="d-grid">
            <p className="text-secondary">{product.category}</p>
            <p className="text-warning">{product.price}$</p>
          </div>
        </div>

        <div className="d-flex justify-content-end align-items-center gap-4">
          <div className="rounded-2 overflow-hidden">
            <button onClick={() => decreaseAmount(product.id)}>
              <FaMinus />
            </button>
            <button onClick={() => addToBasket(product)}>
              <FaPlus />
            </button>
          </div>
          <h4>{product.amount}</h4>
          <button
            onClick={() => removeFromBasket(product.id)}
            className="rounded-2"
          >
            <FaTrashCan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
