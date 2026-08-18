/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChildNav } from "../Demo/ChildNav";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { blurBackground } from "../Utils/constants";
import { updateCurrentUser } from "../Store/Reducers/appSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const [toggleMenuContainer, setMenuContainer] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    window.location.pathname.indexOf("demo") > 0 && updateDemoChildMenu(true);
  }, []);
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
    dispatch(updateCurrentUser());
    history("/");
  };

  const linkStyles =
    "relative mx-1 px-3 py-2 text-round-navy/80 transition-colors duration-300 hover:text-round-accent aria-current:text-round-accent aria-current:font-semibold after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-round-accent after:to-round-accentDark after:transition-all after:duration-300 hover:after:w-4/5 aria-current:after:w-4/5";
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={toggleMenu}
        style={{ zIndex: -5 }}
        className={` ${
          toggleMenuContainer ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-300  h-screen bg-round-navy/30 backdrop-blur w-full xm:block sm:block md:hidden absolute top-0 left-0 `}
      />

      <div
        onClick={toggleMenu}
        className={`${
          toggleMenuContainer ? "" : "hidden"
        } absolute top-0 left-0 w-full`}
      ></div>

      <div className="sm:hidden relative z-1">
        <button
          onClick={toggleMenu}
          className="text-5xl transition-transform duration-300 hover:text-round-accent hover:scale-110"
        >
          &#9776;
        </button>
      </div>

      <div
        onClick={toggleMenu}
        className={` ${
          toggleMenuContainer ? "opacity-100 visible" : "opacity-0 invisible"
        } sm:opacity-100 sm:visible transition-opacity duration-300 p-2 z-1 text-center sm:absolute sm:w-full xs:absolute xs:w-full sm:left-0 xs:left-0 sm:h-screen  xs:h-screen  md:h-auto ${blurBackground}  `}
      >
        {menus.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div
                className=" md:inline-block xs:text-left sm:text-left sm:border-b xs:border-b md:border-none  "
                key={index}
              >
                {index > 0 ? "|" : null}
                <NavLink
                  onClick={(e) => updateChildMenu(e)}
                  key={index}
                  className={`${
                    toggleMenuContainer ? "block" : "inline-block"
                  } sm:inline-block ${linkStyles}`}
                  to={`${item["url"]}`}
                >
                  {item["displayName"]}
                </NavLink>
                {item["displayName"] === "Practice" && demoChildMenu ? (
                  <ChildNav />
                ) : null}
              </div>
            </React.Fragment>
          );
        })}

        {isAuthenticated && (
          <button
            className="xs:float-left sm:float-left md:float-right lg:float-right p-2.5 rounded-lg text-red-500 hover:text-red-800"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
};
export default Navigation;
