import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

export type IValueToModal = {
  isShowing: boolean;
  hide: () => void;
};

const Modal = ({ isShowing, hide }: IValueToModal) =>
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
              <div>
                <Form />
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
