import Modal from "../UI/Modal";
import React, { useContext } from "react";
import Classes from "../../srtylesheet/Cart.module.css";
import CreateContext from "../Store/CreateContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const ctxx = useContext(CreateContext);
  const TotalAmount = ctxx.totalAmount.toFixed(2);
  const cartItemRemoveHandler = (id) => {
    ctxx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    console.log("verify");
    ctxx.addItem(item);
  };
  const Carts = (
    <ul className={Classes["cart-items"]}>
      {ctxx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const hasItem = ctxx.items.length > 0;
  return (
    <Modal onClose={props.onClose}>
      {Carts}
      <div className={Classes.total}>
        <span>Total</span>
        <span>{TotalAmount}</span>
      </div>
      <div className={Classes.actions}>
        <button className={Classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
        {hasItem && <button className={Classes.button}>order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
