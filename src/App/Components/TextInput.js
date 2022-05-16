/** @format */

import React, { useContext, useEffect } from "react";
import { FormCtx } from "./Form";

const TextInput = (props) => {
  const { id, kind } = props;
  const {
    setFields,
    addField,
    fields,
    validateField,
    errors,
    validatePassword,
  } = useContext(FormCtx);

  const field = fields[id] || {};
  const {
    name,
    rows,
    value,
    validate,
    placeholder,
    label = "",
    type = "text",
    events = {},
    classes = {},
  } = field;
  const fieldError = errors[id];

  const { onChange, onBlur, ...restEvents } = events;
  const { contClass, errorClass } = classes;

  const handleBlur = (event) => {
    if (event.target.id === "confirmPassword") {
      validateField(event.target.id, true);
    } else {
      validateField(event.target.id);
    }
  };

  const handleChange = (event) => {
    try {
      setFields(event, field);
    } catch (error) {
      throw error;
    }

    if (typeof onChange === "function") {
      onChange({
        ...field,
        value: event.target.value,
      });
    }
    validateField(event.target.id);
  };

  useEffect(() => {
    addField({
      field: props,
      value,
    });
  }, []);

  const fieldProps = {
    ...restEvents,
    id,
    name,
    type,
    value,
    validate,
    placeholder,
    onChange: handleChange,
    onBlur: handleBlur,
  };

  if (type === "textarea") {
    delete fieldProps.type;
    delete fieldProps.value;

    fieldProps.defaultValue = value;
    fieldProps.rows = rows || 2;
  }

  const inputStyle =
    "placeholder:italic placeholder:text-slate-500 rounded-lg bg-transparent border border-lime-600 p-3 ";

  return field && field.value !== undefined ? (
    <>
      {label}
      {type === "textarea" ? (
        <textarea {...fieldProps} className={inputStyle} />
      ) : (
        <input
          type={type}
          className={`rounded-lg bg-transparent border border-lime-600 p-3 ${inputStyle} `}
          {...fieldProps}
        />
      )}
      <p className={`text-red-400 ${errorClass}`}>{fieldError}</p>
    </>
  ) : (
    ""
  );
};

export default TextInput;
