import React, { Fragment, useContext } from "react";
// import CreateContext from "../Store/CreateContext";
import Mealsrc from "../../assets/meals.jpg";
import Classes from "../../srtylesheet/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import CreateContext from "../Store/CreateContext";

const Header = (props) => {

  return (
    <Fragment>
      <header className={Classes.header}>
        <h1>FoodMeal</h1>
        <HeaderCartButton onChange={props.onClick} />
      </header>
      <div className={Classes["main-image"]}>
        <img src={Mealsrc} />
      </div>
    </Fragment>
  );
};

export default Header;
