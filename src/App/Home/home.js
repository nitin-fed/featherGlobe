/** @format */

import React, { Component } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const appReducer = useSelector((state) => state.appReducer);
  const { menus } = appReducer;

  return (
    <>
      <div className='grid gap-10 sm:grid-col-1  md:grid-cols-3'>
        {menus.map((item, i) => {
          return (
            <a href={item["url"]} key={i}>
              <div className='tile text-xl p-2 relative bg-black/75  h-40'>
                {item["displayName"]}
                <img
                  className='h-1/2 absolute bottom-0 right-0'
                  src={`../images/${item["imgPath"]}`}
                />
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Home;
