import React, { useRef, useState } from "react";
import Input from "./Input";
import Classes from "../../../srtylesheet/MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const inputData = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("che");
    const enteredAmount = inputData.current.value;
    const enteredNumberAmount = +enteredAmount;

    if (
      enteredNumberAmount.length == 0 ||
      enteredNumberAmount < 1 ||
      enteredNumberAmount > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredNumberAmount);
  };
  console.log(inputData, "24");
  return (
    <form className={Classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputData}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={Classes.button}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
