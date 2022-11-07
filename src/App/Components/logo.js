/** @format */

import React from "react";
import { Loader } from "./Loader";
import { useSelector } from "react-redux";
import "./nestedMenu.css";

const Logo = () => {
  const { displayLoader } = useSelector((state) => state.commonReducer);

  const { currentUser } = useSelector((state) => state.appReducer);

  return (
    <>
      {displayLoader && <Loader />}

      <div class='flex justify-between max-w-screen-xl my-0 mx-auto px-10 '>
        <div>
          <div>
            <div id='header' className='text-3xl tracking-widest text-gray-500'>
              Featherglobe
            </div>
            <div className='logoFont'>{"{DECODED FROM NATURE}"}</div>
          </div>
        </div>
        <div></div>
        <div>
          <div className='logoFont'>
            Welcome
            <div className='welcomeUser'>{currentUser}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
