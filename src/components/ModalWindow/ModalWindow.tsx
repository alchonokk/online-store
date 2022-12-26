import React from "react";
import Modal from "./Modal";
import showModal from "./showModal";
import "./style.css";

function ModalWindow() {
  const { isShowing, toggle } = showModal();

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} />
      <button onClick={toggle}>Buy now</button>
    </>
  );
}

export default ModalWindow;
