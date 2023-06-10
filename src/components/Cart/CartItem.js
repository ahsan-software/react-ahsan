import React, { useContext } from "react";
import Classes from "../../srtylesheet/Cart.module.css";

const CartItem = (props) => {
  const price = `$${props.price}`;
  return (
    <li className={Classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={Classes.summary}>
          <span className={Classes.price}>{price}</span>
          <span className={Classes.amount}>x{props.amount}</span>
        </div>
        <div className={Classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
