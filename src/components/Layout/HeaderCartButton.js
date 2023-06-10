import CreateContext from "../Store/CreateContext";
import React, { useContext, useReducer } from "react";
import CartIcon from "../Cart/CartIcon";
import Classes from "../../srtylesheet/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CreateContext);
  const numOfItem = ctx.items.reduce((curret, item) => {
    return curret + item.amount;
  }, 0);
  console.log(ctx);
  return (
    <button className={Classes.button} onClick={props.onChange}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>something</span>
      <span className={Classes.badge}>{numOfItem}</span>
    </button>
  );
};

export default HeaderCartButton;
