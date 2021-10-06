import React from "react";

import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import "../../../../App/Components/Backdrop.css";
import "./modal.css";
import { showHideModal } from "../../../Store/Reducers/modalSlice";
import { useDispatch, useSelector } from "react-redux";

export const Modal = ({ show, children }) => {
  const dispatch = useDispatch();

  return (
    <>
      {show ? (
        <div
          className="Backdrop"
          onClick={() => dispatch(showHideModal(false))}
        >
          <div className="fg-modal">{children}</div>
        </div>
      ) : null}
    </>
  );
};
