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

      <div class='flex justify-between px-10'>
        <div>
          <div>
            <div id='header' className='text-3xl tracking-widest text-white'>
              Featherglobe
            </div>
            <div className='logoFont'>{"{DECODED FROM NATURE}"}</div>
          </div>
        </div>
        <div></div>
        <div>
          <div className=' text-white'> {currentUser}</div>
        </div>
      </div>
    </>
  );
};

export default Logo;
