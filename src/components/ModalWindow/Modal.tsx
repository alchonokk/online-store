import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

export type IValueToModal = {
  isShowing: boolean;
  hide: () => void;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ isShowing, hide, setIsSubmit }: IValueToModal) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal" onClick={hide}>
            <div
              className="modal__content"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div data-testid="modal-form">
                <Form hide={hide} setIsSubmit={setIsSubmit} />
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
