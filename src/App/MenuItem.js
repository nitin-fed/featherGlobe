

import React from "react";

import { primaryButtonStyle } from "./Utils/constants";

export default function MenuItem({ item , handleMenuItemClick}) {
  console.log(item);
  return (
    <li>
      <button onClick={handleMenuItemClick} className={primaryButtonStyle}> {item}</button>
    </li>
  );
}
