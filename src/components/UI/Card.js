import React from "react";
import Classes from "../../srtylesheet/Card.module.css";

const Card = (props) => {
  return <div className={Classes.card}>{props.children}</div>;
};

export default Card;
