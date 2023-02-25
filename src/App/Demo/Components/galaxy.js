/** @format */

import React from "react";
//import { useHistory } from "react-router-dom";

const Galaxy = (props) => {
  //let history = useHistory();
  const goBack = () => {
    // history.goBack();
    // console.log(history);
  };
  return (
    <>
      <div className='absolute top-0 left-0 w-full h-full bg-black z-500'>
        <div id='container'>
          <div id='main'>
            <div className='star'> </div>
            <div className='star'></div>
            <div className='star rotate45'> </div>
            <div className='star rotate135'> </div>
          </div>
        </div>
        <div className='inputContainer'>
          Number of Stars: (Range: 1-1000){" "}
          <input value='100' id='starCount' type='number' min='1' max='1000' />
          <button onclick='start()'>Apply</button>
        </div>

        <div id='sun'></div>

        <div id='sunInner'></div>
      </div>
    </>
  );
};

export default Galaxy;
