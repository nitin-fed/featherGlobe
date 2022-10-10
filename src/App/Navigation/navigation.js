/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ChildNav } from "../Demo/ChildNav";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [toggleMenuContainer, setMenuContainer] = useState(false);
  const history = useNavigate();

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
  const { menus, isAuthenticated } = appReducer;

  const handleLogout = async () => {
    await signOut(auth);
    history("/");
  };

  const linkStyles =
    "mx-1 md:rounded-lg md:border md:border-lime-800 px-3 py-2 hover:bg-lime-700 hover:rounded-lg transition ease-in-out duration-300";
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

        {isAuthenticated && (
          <button
            className='float-right p-2.5 rounded-lg bg-red-500 text-white hover:bg-red-800 hover:text-white'
            onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </>
  );
};
export default Navigation;
