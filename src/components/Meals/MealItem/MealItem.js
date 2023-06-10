import React, { useContext } from "react";
import CreateContext from "../../Store/CreateContext";
import MealItems from "../MealItem/MealItem";
import Classes from "../../../srtylesheet/MealItem.module.css";
import MealItemForm from "../MealItem/MealItemForm";
const MealItem = (props) => {
  const cartctx = useContext(CreateContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCart = (amount) => {
    console.log("....");
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={Classes.meal}>
      <div>
        <h1>{props.name}</h1>
        <div className={Classes.description}>{props.description}</div>
        <div className={Classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
