import React from "react";
import Backdrop from "./Backdrop";
import { Loader } from "./Loader";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setCookie, getCookie } from "../Utils/Cookie";
// import { loadUser } from "../Services/fetchUser";

const Logo = () => {
  // const { userData } = useSelector(state => state.userReduder);
  const { displayLoader } = useSelector(state => state.commonReducer);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   setCookie();
  //   dispatch(loadUser());
  // }, [dispatch]);

  return (
    <>
      {displayLoader && <Loader />}
      <div className="logo">
        <div id="header" className="appName">
          Featherglobe
        </div>
        <div className="tagline">{"{DECODED FROM NATURE}"}</div>
      </div>
    </>
  );
};

export default Logo;
