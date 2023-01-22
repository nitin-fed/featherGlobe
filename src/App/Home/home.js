/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Home = () => {
  const appReducer = useSelector((state) => state.appReducer);
  const { menus } = appReducer;
  useEffect(() => {
    document.cookie = "username=John Doe";
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(document.cookie);
  //   }, 2000);
  // });

  return (
    <>
      <div className='grid gap-10 sm:grid-col-1  md:grid-cols-3'>
        <NavLink to='/secHome'>Secure Home</NavLink>
        {menus.map((item, i) => {
          return (
            <NavLink to={item["url"]} key={i}>
              <div className='tile text-xl p-2 relative bg-black/75  h-40'>
                {item["displayName"]}
                <img
                  className='h-1/2 absolute bottom-0 right-0'
                  src={`../images/${item["imgPath"]}`}
                />
              </div>
            </NavLink>

            // <a href={item["url"]} key={i}>
            //   <div className='tile text-xl p-2 relative bg-black/75  h-40'>
            //     {item["displayName"]}
            //     <img
            //       className='h-1/2 absolute bottom-0 right-0'
            //       src={`../images/${item["imgPath"]}`}
            //     />
            //   </div>
            // </a>
          );
        })}
      </div>
      <br />
    </>
  );
};

export default Home;
