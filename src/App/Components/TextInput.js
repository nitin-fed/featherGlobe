/** @format */

import React, { useState, useImperativeHandle } from "react";

export const TextInput = React.forwardRef((props, ref) => {
  const { max, min, label, required, classes } = props;
  const inputStyle = "rounded-lg bg-transparent border border-lime-600 p-3";

  const [val, setVal] = useState("");

  const validateInput = (evt, min, max, required, label) => {
    setVal(evt.target.value);
    const charLength = evt.target.value.length;
    const targetEle = evt.target;
    const emailValidationStr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phonvalidation = /^[0-9]+$/;

    if (required && charLength === 0) {
      showError(targetEle, "Field is required");
    } else if (charLength > 0 && charLength < min) {
      showError(targetEle, `Atleast ${min} charcter required`);
    } else if (charLength > max) {
      showError(targetEle, `Maximum ${max} charcters are allowed`);
    } else if (label === "Email" && !emailValidationStr.test(val)) {
      showError(targetEle, "Invalid email address");
    } else if (label === "Phone" && !phonvalidation.test(val)) {
      showError(targetEle, "Only numbers allowed");
    } else {
      hideError(targetEle);
    }
  };

  return (
    <>
      <div className='mb-5'>
        <p>
          {label} {required && <span className='text-lg text-red-500'> *</span>}
        </p>

        <input
          ref={ref}
          value={val}
          onChange={(e) => validateInput(e, min, max, required, label)}
          type='text'
          className={`${classes} ${inputStyle} `}
        />

        <p className='hidden text-red-400 text-sm'></p>
      </div>
    </>
  );
});

export const showError = (target, msg) => {
  target.nextElementSibling.classList.remove("hidden");
  target.nextElementSibling.innerHTML = msg;
};
export const hideError = (target) => {
  target.nextElementSibling.classList.add("hidden");
};
