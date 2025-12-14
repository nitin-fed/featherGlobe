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

  const linkStyles = "mx-1 px-3 py-2 ";
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={toggleMenu}
        style={{ zIndex: -5 }}
        className={` ${
          toggleMenuContainer ? "" : "hidden "
        }  h-screen bg-black w-full xm:block sm:block md:hidden absolute left bg-white/90 top-0 left-0 `}
      />

      <div
        onClick={toggleMenu}
        className={`${
          toggleMenuContainer ? "" : "hidden"
        } absolute top-0 left-0 w-full`}
      ></div>

      <div className='sm:hidden relative z-1'>
        <button onClick={toggleMenu} className='text-5xl'>
          &#9776;
        </button>
      </div>

      <div
        onClick={toggleMenu}
        className={` ${
          toggleMenuContainer ? "" : "hidden "
        } sm:block p-2 z-1 text-center sm:absolute sm:w-full xs:absolute xs:w-full sm:left-0 xs:left-0 sm:h-screen  xs:h-screen  md:h-auto ${blurBackground}  `}
      >
        {menus.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div
                className='md:inline-block xs:text-left sm:text-left sm:border-b xs:border-b md:border-none  '
                key={index}
              >
                {index > 0 ? "|" : null}
                <NavLink
                  onClick={(e) => updateChildMenu(e)}
                  activeclassname='active'
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
            className='xs:float-left sm:float-left md:float-right lg:float-right p-2.5 rounded-lg text-red-500 hover:text-red-800'
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
