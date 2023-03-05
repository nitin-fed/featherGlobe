/** @format */

import React from "react";
import { Loader } from "./Loader";
import { useSelector } from "react-redux";
import "./nestedMenu.css";

export const Logo = () => {
  const { displayLoader } = useSelector((state) => state.commonReducer);

  const { currentUser } = useSelector((state) => state.appReducer);

  return (
    <>
      {displayLoader && <Loader />}

      <div className='md:flex justify-between max-w-screen-xl my-0 mx-auto px-10 '>
        <div>
          <div>
            <div
              id='header'
              className='text-3xl tracking-widest text-gray-500 xs:text-center sm:text-center md:text-left'
            >
              Featherglobe
            </div>
            <div className='logoFont xs:text-center sm:text-center'>
              {"{DECODED FROM NATURE}"}
            </div>
          </div>
        </div>

        <div>
          <div className='logoFont'>
            <div className=' xs:text-center sm:text-center'>Welcome</div>
            <div className='welcomeUser xs:text-center sm:text-center '>
              {currentUser}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
