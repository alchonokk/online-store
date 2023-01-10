import React from "react";
import Modal from "./Modal";
import ShowModal from "./showModal";
import "./style.scss";
export type Submit = {
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

function ModalWindow({ setIsSubmit }: Submit) {
  const { isShowing, toggle } = ShowModal();

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} setIsSubmit={setIsSubmit} />
      <button className="modal-button" onClick={toggle}>
        Buy now
      </button>
    </>
  );
}

export default ModalWindow;
