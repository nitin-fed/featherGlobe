/** @format */

import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { TextInputField } from "./Components/TextInputField";
import {
  primaryButtonStyle,
  warningButtonStyle,
  secondaryButtonStyle,
} from "./Utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const history = useNavigate();

  const [isLogin, setIsLogin] = useState();
  const [error, setError] = useState(null);
  const [isLoading] = useState(false);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/registerUser") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [location.pathname]);

  // const login = () => {
  //   localStorage.setItem("user", "test");
  //   navigate("/dashboard");
  // };

  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const allRefs = [{ password: passwordRef }, { userName: userNameRef }];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setError(
      isLogin
        ? "Login is currently unavailable."
        : "Registration is currently unavailable."
    );
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        // event.preventDefault();
        handleSubmit(event);
        // callMyFunction();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  const handleReset = (e) => {
    e && e.preventDefault();
    setError();

    allRefs.forEach((item) => {
      Object.values(item).forEach((value) => {
        value.current && value.current.resetField();
      });
    });
  };

  const handleCancel = () => {
    history("/");
  };

  useEffect(() => {
    // init();
    //initDancingLetter();
  }, []);

  return (
    <div className='login sm:p-0 md:p-10 sm:w-full lg:w-3/4 m-auto'>
      <h1 className='text-3xl'>{isLogin ? " Login" : "Register User"}</h1>
      <div className='text-red-500 py-2'>{error && error}</div>
      <form className='loginForm' onSubmit={(evt) => handleSubmit(evt)}>
        <TextInputField
          label='User Name'
          kind='text'
          ref={userNameRef}
          value=''
          isRequired={true}
          validation={["required", "min", "max", "email"]}
        />

        <TextInputField
          label='Password'
          kind='password'
          ref={passwordRef}
          value=''
          isRequired={true}
          validation={["required", "min", "max"]}
        />

        {!isLogin && (
          <TextInputField
            label='Confirm Password'
            kind='confirmPassword'
            ref={passwordRef}
            value=''
            isRequired={true}
            validation={["required", "min", "max"]}
          />
        )}

        <br />
        <div className='md:float-right md:flex md:flex-row'>
          <button
            onClick={(e) => handleCancel(e)}
            className={`${secondaryButtonStyle} sm:w-full m-0`}
          >
            Cancel
          </button>
          <button
            onClick={(e) => handleReset(e)}
            className={`${secondaryButtonStyle} sm:w-full m-0`}
          >
            Reset
          </button>
          {isLogin ? (
            <button disabled={isLoading} className={primaryButtonStyle}>
              Login
            </button>
          ) : (
            <button
              disabled={isLoading}
              type={"submit"}
              className={primaryButtonStyle}
            >
              Sign up
            </button>
          )}
        </div>
      </form>
      <br />
      <br />
      {isLogin && (
        <div>
          Don't have account?
          <NavLink to='/registerUser' className='links px-2 text-sm'>
            Register now using email
          </NavLink>
          |
          <NavLink to='#' className='links px-2 text-sm'>
            Forgot Password
          </NavLink>
        </div>
      )}
      {/* <canvas id='myCanvas'></canvas> <canvas id='dancingLetter'></canvas> */}
    </div>
  );
};

export default Login;
