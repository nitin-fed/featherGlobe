/** @format */

import React, { useState } from "react";
import { Loader } from "./Loader";
import { useSelector } from "react-redux";
import "./nestedMenu.css";
import { NestedMenu } from "./NestedMenu";
import { LoginWidget } from "../../Utils";
// import { setCookie, getCookie } from "../Utils/Cookie";
// import { loadUser } from "../Services/fetchUser";

const Logo = () => {
  // const { userData } = useSelector(state => state.userReduder);
  const { displayLoader } = useSelector((state) => state.commonReducer);
  const [show, setShow] = useState(false);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   setCookie();
  //   dispatch(loadUser());
  // }, [dispatch]);

  return (
    <>
      {displayLoader && <Loader />}
      <div className='px-10 '>
        <div id='header' className='text-3xl tracking-widest'>
          Featherglobe
        </div>
        <div className='logoFont'>{"{DECODED FROM NATURE}"}</div>
      </div>

      {/* <div className="nestedMenu">
        <NestedMenu />
      </div> */}
    </>
  );
};

export default Logo;
