/** @format */

import React, { Component, useRef, useState } from "react";
import Form from "../../Components/Form";
import TextInput from "../../Components/TextInput";
import { useLocation } from "react-router-dom";

const RegisterUser = () => {
  const { state } = useLocation();
  return (
    <div className='p-10 w-3/4 m-auto '>
      <h1 className='text-3xl'>Register User</h1>

      <Form
        kind='submit'
        isEditTrue={state}
        id={state && state.id}
        value={state && state.value}>
        <TextInput
          label='First Name'
          id='firstName'
          placeholder='First Name'
          validate='required'
          value={(state && state.value["firstName"].value) || ""}
        />

        <br />

        <TextInput
          label='Last Name'
          id='lastName'
          placeholder='Last Name'
          validate='required'
          value={(state && state.value["lastName"].value) || ""}
        />
        <br />

        <TextInput
          label='Phone'
          id='phone'
          placeholder='Phone'
          validate='numeric|min|max'
          value={(state && state.value["phone"].value) || ""}
        />
        <br />
        <TextInput
          label='User Name'
          id='userName'
          placeholder='User Name'
          validate='min|max'
          value={state && state.value["userName"].value}
        />
        <br />
        <TextInput
          label='Email'
          id='email'
          placeholder='Email'
          validate='email'
          value={state && state.value["email"].value}
        />
        <br />
        {!state && (
          <>
            <TextInput
              type='password'
              label='Password'
              id='password'
              placeholder='User Name'

              //  validate='numeric'
            />
            <br />
            <TextInput
              type='password'
              label='Confirm Password'
              id='confirmPassword'
              placeholder='User Name'
              // validate='numeric'
            />
          </>
        )}

        <br />
        <br />
      </Form>
    </div>
  );
};

export default RegisterUser;
