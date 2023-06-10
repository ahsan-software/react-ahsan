import React, { useReducer } from "react";
import CreateContext from "./CreateContext";
const defaultState = {
  items: [],
  totalAmount: 0,
};

const reduceraction = (state, action) => {
  if (action.type === "ADD") {
    const UpdtaedTotal =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItem = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItemZone = state.items[existingItem];
    console.log(existingItemZone, "in");
    let updatedItems;

    if (existingItemZone) {
      console.log(existingItemZone, "in");
      const updatedItem = {
        ...existingItemZone,
        amount: existingItemZone.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItem] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: UpdtaedTotal,
    };
  }
  if (action.type === "Remove") {
    const existingItem = state.items.findIndex((item) => item.id === action.id);

    const existingItemZone = state.items[existingItem];
    const UpdtaedTotalAmount = state.totalAmount - existingItemZone - 1;
    let updatedItems;
    if (existingItemZone.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItemZone,
        amount: existingItemZone.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItem] = updatedItem;
    }
    return {
      item: updatedItems,
      totalAmount: UpdtaedTotalAmount,
    };
  }
  return defaultState;
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    reduceraction,
    defaultState
  );
  const AddItemHandler = (item) => {
    return dispatchCartState({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartState({ type: "Remove", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: AddItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CreateContext.Provider value={cartContext}>
      {props.children}
    </CreateContext.Provider>
  );
};

export default ContextProvider;
