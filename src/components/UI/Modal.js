import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Classes from "../../srtylesheet/Modal.module.css";

const Backdrop = (props) => {
  return <div className={Classes.backdrop} onClick={props.onClose}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className={Classes.modal}>
      <div className={Classes.content}>{props.children}</div>
    </div>
  );
};

const domElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, domElement)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        domElement
      )}
    </Fragment>
  );
};

export default Modal;
