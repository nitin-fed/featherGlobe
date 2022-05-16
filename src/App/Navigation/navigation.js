/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { ChildNav } from "../Demo/ChildNav";

const Navigation = () => {
  const [toggleMenuContainer, setMenuContainer] = useState(false);

  useEffect(() => {
    window.location.pathname.indexOf("demo") > 0 && updateDemoChildMenu(true);
  });
  const toggleMenu = () => {
    setMenuContainer(!toggleMenuContainer);
  };
  const [demoChildMenu, updateDemoChildMenu] = useState(false);

  const updateChildMenu = (evt) => {
    if (evt.currentTarget.innerText === "Practice") {
      updateDemoChildMenu(true);
    } else {
      updateDemoChildMenu(false);
    }
  };

  const appReducer = useSelector((state) => state.appReducer);
  const { menus } = appReducer;

  const linkStyles =
    "mx-1 md:rounded-lg md:border md:border-lime-800 px-3 py-2 hover:bg-lime-700 hover:rounded-lg";
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={toggleMenu}
        className={`${
          toggleMenuContainer ? "" : "hidden"
        } absolute top-0 left-0 w-full h-full bg-gray-800 opacity-80 `}></div>

      <div className='sm:hidden relative z-1'>
        <button onClick={toggleMenu} className='bg-gray-800 text-5xl'>
          &#9776;
        </button>
      </div>

      <div
        className={`sticky top-0 ${
          toggleMenuContainer ? "" : "hidden"
        } sm:block p-3 relative z-10 `}>
        {menus.map((item, index) => {
          return (
            <>
              <div className='inline-block' key={index}>
                <NavLink
                  onClick={(e) => updateChildMenu(e)}
                  activeclassname='active'
                  key={index}
                  className={`${
                    toggleMenuContainer ? "block" : "inline-block"
                  } sm:inline-block ${linkStyles}`}
                  to={`${item["url"]}`}>
                  {item["displayName"]}
                </NavLink>
                {item["displayName"] === "Practice" && demoChildMenu ? (
                  <ChildNav />
                ) : null}
              </div>
            </>
          );
        })}
      </div>

      {/* <div className='inline-block'>
        <NavLink exact to='/'>
          Home
        </NavLink>
        <NavLink to='/profile'>Profile</NavLink>

        <NavLink to='/photography'>Photography</NavLink>

        <NavLink to='/demo'>Demo</NavLink>
        <NavLink to='/demo/Posts'>Posts</NavLink>

        <NavLink to='/demo/Counters'>Counters/Calc</NavLink>

        <NavLink to='/demo/Gallery'>Gallery</NavLink>

        <NavLink to='/demo/RegisgerUser'>Register User</NavLink>

        <NavLink to='/demo/Article'>Article</NavLink>

        <NavLink to='/demo/Support'>Support</NavLink>

        <NavLink to='/guessWord'>Guess Word</NavLink>
        <NavLink to='/jotto'>Jotto</NavLink>

        <NavLink to='/contact'>Contact</NavLink>
      </div> */}
    </>
  );
};
export default Navigation;
