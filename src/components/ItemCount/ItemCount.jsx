import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount() {
  const [quantity, setQuantity] = useState(1);
  const stock = 2;

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="d-flex my-3 align-items-center">
      <div className="border btn">
        <button className=" btn me-1 " onClick={decrement}>
          <span>-</span>
        </button>
        <input
          type="number"
          step="1"
          min="1"
          max={stock}
          value={quantity}
          readOnly={true}
          className="inputText"
        ></input>
        <button className="btn ms-1 " onClick={increment}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}
