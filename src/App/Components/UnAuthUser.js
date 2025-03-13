

import React from "react";
import { NavLink } from "react-router-dom";
export const UnAuthUser = () => {
  return (
    <>
      <div className='login sm:p-0 md:p-10 sm:w-full lg:w-3/4 m-auto'>
        <h1 className='text-3xl'>You are not authorized to view this page</h1>
        <br />
        <NavLink to='/login' className='links px-2 text-sm'>
          Login here
        </NavLink>{" "}
        if you are registed user. <br />
        <NavLink to='/registerUser' className='links px-2 text-sm'>
          Sign up
        </NavLink>
        to get an access.
      </div>
    </>
  );
};
