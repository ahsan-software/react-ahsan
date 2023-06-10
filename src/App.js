import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import Header from "./components/Layout/Header";
import { Fragment } from "react";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import MealItem from "./components/Meals/MealItem/MealItem";
import ContextProvider from "./components/Store/ContextProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showModal = () => {
    setCartIsShown(true);
  };
  const HideModal = () => {
    setCartIsShown(false);
  };
  return (
    <ContextProvider>
      {cartIsShown && <Cart onClose={HideModal} />}
      <Header onClick={showModal} />
      <main>
        <h1>check</h1>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </ContextProvider>
  );
}

export default App;
