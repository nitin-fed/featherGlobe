/** @format */

import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../firebase-config";
import { TextInputField } from "./Components/TextInputField";
import {
  primaryButtonStyle,
  warningButtonStyle,
  secondaryButtonStyle
} from "./Utils/constants";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUser } from "./Store/Reducers/appSlice";
import { init } from "./LoginCanvas";
import { initDancingLetter } from "./dancingLetter";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const history = useNavigate();
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

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

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const email = userNameRef.current.getValue();
    const password = passwordRef.current.getValue();
    setLoading(true);
    try {
      debugger;
      const user = await signInWithEmailAndPassword(
        auth,
        email.toString(),
        password
      );
      history("/");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    // evt.preventDefault();
    // const email = userNameRef.current.getValue();
    // const password = passwordRef.current.getValue();
    // console.log(isLoading);
    // try {
    //   setLoading(true);
    //   const user = await createUserWithEmailAndPassword(auth, email, password);
    //   dispatch(updateCurrentUser(user.user.email));
    // } catch (error) {
    //   setLoading(false);
    //   setError(error.message);
    // }
  };

  const handleLogin = async (evt) => {
    evt.preventDefault();
    const email = userNameRef.current.getValue();
    const password = passwordRef.current.getValue();
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      history("/");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(updateCurrentUser(user?.email));
    });
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
    <div className='login p-10 sm:w-full lg:w-3/4 m-auto'>
      <h1 className='text-3xl'>{isLogin ? " Login" : "Register User"}</h1>
      <div className='text-red-500 py-2'>{error && error}</div>
      <form onSubmit={(evt) => handleSubmit(evt)}>
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
        <div className='float-right'>
          <button
            onClick={(e) => handleCancel(e)}
            className={secondaryButtonStyle}
          >
            Cancel
          </button>
          <button
            onClick={(e) => handleReset(e)}
            className={secondaryButtonStyle}
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
