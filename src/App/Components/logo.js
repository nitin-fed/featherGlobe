import React, { useState } from "react";
import { Loader } from "./Loader";
import { useSelector } from "react-redux";
import "./nestedMenu.css";
import { NestedMenu } from "./NestedMenu";
// import { setCookie, getCookie } from "../Utils/Cookie";
// import { loadUser } from "../Services/fetchUser";

const Logo = () => {
  // const { userData } = useSelector(state => state.userReduder);
  const { displayLoader } = useSelector(state => state.commonReducer);
  const [show, setShow] = useState(false);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   setCookie();
  //   dispatch(loadUser());
  // }, [dispatch]);

  const showNestedMenu = () => {
    "";
    setShow(show === true ? false : true);
  };

  return (
    <>
      {displayLoader && <Loader />}
      <div className="logo">
        <div id="header" className="appName" onClick={() => showNestedMenu()}>
          Featherglobe
        </div>
        <div className="tagline">{"{DECODED FROM NATURE}"}</div>
      </div>

      {/* <div className="nestedMenu">
        <NestedMenu />
      </div> */}
    </>
  );
};

export default Logo;
