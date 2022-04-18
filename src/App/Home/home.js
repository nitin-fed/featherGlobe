/** @format */

import React, { Component } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const appReducer = useSelector((state) => state.appReducer);
  const { menus } = appReducer;

  return (
    <>
      <div className='grid gap-10 sm:grid-col-1  md:grid-cols-3'>
        {menus.map((item) => {
          return (
            <div className=''>
              {/* <img
                className='h-full w-ful'
                src={`/images/${item["imgPath"]}`}
              /> */}
              <div className='text-xl p-2 relative bg-black/75 bottom-10'>
                <a>{item["displayName"]}</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
