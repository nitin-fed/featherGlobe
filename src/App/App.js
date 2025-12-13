/** @format */

import React, { useCallback, useEffect, useRef, useState } from "react";
import Navigation from "./Navigation/navigation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/createStore";
import ErrorBoundary from "./ErrorBoundary";
import { Body } from "./Body";
import { MessageBox } from "./Components/MessageBox";
import { Logo } from "./Components/Logo";
import { blurBackground } from "./Utils/constants";
import NestedMenu from "./NestedMenu";
import { useToggle } from "./CustomHooks/useToggle";
import useHover from "./CustomHooks/useHover";
import SearchBar from "./SearchBar";
// import EATransfers from "./EATransfers/EATransfers";

const App = () => {
  const [name, setName, lastnme] = useState("Nitin");
  useEffect(() => {
    // messageBoxRef.current.showMessageBox();
    window.onscroll = function () {
      // myFunction();
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  });

  const messageBoxRef = useRef(null);

  const [toggle, toggleHandler] = useToggle();
  const [myRef, isHovering] = useHover();

  const messageBoxOkHandler = () => {
    console.log("Ok Hadler");
  };
  const messageBoxCancelHandler = () => {
    console.log("Cancel Handler");
  };

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          {/* {toggle} */}
          {/* <div ref={myRef}>{isHovering ? "hovered" : "not hovered"}</div> */}
          {/* <button id='nitin' onClick={() => toggleHandler("on")}>
            Set Toggle
          </button> */}
          {/* <SearchBar /> */}
          {/* <NestedMenu /> */}
          {/* <EATransfers /> */}
          <header className={`pt-3 sticky top-0 z-40 w-full ${blurBackground}`}>
            <Logo myRef={messageBoxRef} />
            <hr className='w-full absolute left-0' />
            <nav className='text-sm px-5 md:h-12' id='myHeader'>
              <Navigation />
            </nav>

            <hr className='w-full absolute left-0' />
          </header>
          <div className='max-w-screen-xl my-0 mx-auto px-10  '>
            <div className='my-8'>
              My LastName is {lastnme}
              <Body />
            </div>

            <footer
              className={`leading-8 footer fixed bottom-0  w-full left-0 `}
            >
              <div
                className={`fixed left-0 bottom-0 w-full h-8 px-12 ${blurBackground}`}
              >
                www.featherglobe.com
              </div>
            </footer>
          </div>
          <MessageBox
            ref={messageBoxRef}
            title='Edit User Info'
            message='Are you sure, you want to edit user info?'
            okHandler={messageBoxOkHandler}
            cancelHandler={messageBoxCancelHandler}
          />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
