

import React from "react";
import "../../../assets/css/loader.css";

export const Loader = () => {
  return (
    <div className='lds-ripple z-10 fixed left inset-1/2'>
      <div></div>
      <div></div>
    </div>
  );
};
