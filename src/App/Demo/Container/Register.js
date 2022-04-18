/** @format */

import React, { Component, useRef, useState } from "react";
import { applyMiddleware } from "redux";
import Form from "../../Components/Form";
import Input from "../../Components/Input_DUMMY";
import { TextInput } from "../../Components/TextInput";

const RegisterUser = () => {
  const primaryButtonStyle =
    " ml-3 rounded-lg py-2 px-5 bg-lime-500 text-black  hover:bg-lime-800  hover:text-white";

  const warningButtonStyle =
    "rounded-lg py-2 px-5 bg-red-500 text-black hover:bg-red-800 hover:text-white";

  const nameRef = useRef(null);

  const handleCancel = (e) => {
    e.preventDefault();
    handleReset();
  };

  const handleReset = () => {
    console.log("Reset");
  };

  return (
    <div className='p-10 w-3/4 m-auto '>
      <h1 className='text-3xl'>Register User</h1>

      <Form>
        <Input id='email' validate='weirdRule' />
        <Input id='userName' validate='numeric' />
      </Form>

      
      <form>
        <TextInput label='First Name' max='40' min='2' required ref={nameRef} />
        <TextInput label='Last Name' max='40' min='2' />
        <TextInput label='Email' required />
        <TextInput label='Phone' min='10' max='12' />
        <div className='float-right'>
          <button
            onClick={(e) => handleCancel(e)}
            className={warningButtonStyle}>
            Cancel
          </button>
          <button
            onClick={(e) => handleReset(e)}
            className={primaryButtonStyle}>
            Reset
          </button>
          <button
            // onClick={(e) => handleSubmit(e)}
            className={primaryButtonStyle}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
