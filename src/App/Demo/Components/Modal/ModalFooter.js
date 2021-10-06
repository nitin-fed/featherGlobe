import React from "react";

export const ModalFooter = ({ children, data }) => {
  return <div className="modalFooter">{children || data}</div>;
};
