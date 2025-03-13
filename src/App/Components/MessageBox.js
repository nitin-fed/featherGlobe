

import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

import {
  primaryButtonStyle,
  warningButtonStyle,
  deleteButton,
} from "../Utils/constants";

export const MessageBox = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState({});

  const { title, message } = props;

  useImperativeHandle(ref, () => ({
    showMessageBox(cb, id) {
      setShow(true);
      var obj = new Object();
      obj.call_back = cb;
      obj.id = id;
      setArr(obj);
    },
    hideMessageBox() {
      setShow(false);
    },
  }));

  const okHandler = () => {
    arr.call_back(arr.id);
    setShow(false);
  };

  const cancelHandler = () => {
    setShow(false);
  };

  return (
    <>
      {show ? (
        <div className='w-full h-full modalBackground absolute top-0 left-0  z-10'>
          <div className=' tile  relative bg-black/75 max-w-screen-sm mt-48 m-auto'>
            <header className='tile p-2'>
              {title}
              <button
                onClick={() => setShow(false)}
                className={`${deleteButton} text-align-right`}>
                X
              </button>
            </header>
            <div className='p-2'>{message}</div>
            <footer className='p-2'>
              <div className='text-right'>
                <button onClick={okHandler} className={primaryButtonStyle}>
                  Ok
                </button>
                <button
                  onClick={() => cancelHandler()}
                  className={warningButtonStyle}>
                  Cancel
                </button>
              </div>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
});
