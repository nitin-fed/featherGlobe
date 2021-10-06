import React from "react";

export const ModalHeader = ({ children, data }) => {
  return <div className="header">{children || data}</div>;
};
