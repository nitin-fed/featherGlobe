/** @format */
import React, {
  Component,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import validations from "./validations";

export const TextInputField = forwardRef((props, ref) => {
  const { label, validation = 0, kind, value = "", isRequired } = props;
  const inputStyle =
    "placeholder:italic placeholder:text-slate-500 rounded-lg bg-transparent border border-lime-600 p-3 ";

  const [fieldName, setName] = useState(value);
  const [errors, setErrors] = useState({});

  const changeHandler = (evt) => {
    evt.preventDefault();
    const { name, value } = evt.target;
    setName(evt.target.value);

    for (let i = 0; i < validation.length; i++) {
      const _rule = validations[validation[i]];

      const validated = _rule.rule().test(value);

      if (!validated) {
        setErrors({
          ...errors,
          [name]: _rule.formatter.apply(null, [label]),
        });
        evt.target.setCustomValidity(_rule.formatter.apply(null, [label]));
        return;
      } else {
        setErrors({
          ...errors,
          [name]: "",
        });
        evt.target.setCustomValidity("");
      }
    }
  };

  useImperativeHandle(ref, () => ({
    resetField() {
      setName("");
      setErrors("");
    },
    getValue() {
      return fieldName;
    },
  }));

  return (
    <>
      <div className='pt-3'>
        <label htmlFor={fieldName} className='text-sm'>
          {label}
          {isRequired && <span className='text-red-600 text-xl'>*</span>}
        </label>
        <input
          name='fieldName'
          className={`w-full rounded-lg bg-transparent border border-lime-700 p-3 ${inputStyle} `}
          type={kind}
          value={fieldName}
          onChange={(e) => changeHandler(e)}
          onBlur={(e) => changeHandler(e)}
          required={isRequired}
        />
        <span className={`text-red-400 text-sm`}>{errors["fieldName"]}</span>
      </div>
    </>
  );
});
