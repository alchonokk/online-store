import React from "react";
import Modal from "./Modal";
import ShowModal from "./showModal";
import { useState } from "react";
import "./style.scss";
import OrdersWasMade from "../OrdersWasMade";

function ModalWindow() {
  const { isShowing, toggle } = ShowModal();
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} setIsSubmit={setIsSubmit} />
      <button
        data-testid="modal-window"
        className="modal-button"
        onClick={toggle}
      >
        Buy now
      </button>
      {isSubmit && <OrdersWasMade />}
    </>
  );
}

export default ModalWindow;
