import React from "react";
import Modal from "./Modal";
import ShowModal from "./showModal";
import "./style.scss";

function ModalWindow() {
  const { isShowing, toggle } = ShowModal();

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} />
      <button onClick={toggle}>Buy now</button>
    </>
  );
}

export default ModalWindow;
