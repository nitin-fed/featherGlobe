/** @format */

import React, { useCallback, useEffect, useRef, useState } from "react";
import Navigation from "./Navigation/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { EATransfers } from "./EATransfers/EATransfers";

const MainLayout = ({
  messageBoxRef,
  name,
  messageBoxOkHandler,
  messageBoxCancelHandler,
}) => (
  <>
    <header className={`pt-3 sticky top-0 z-40 w-full ${blurBackground}`}>
      <Logo myRef={messageBoxRef} />
      <hr className="w-full absolute left-0" />
      <nav className="text-sm px-5 md:h-12" id="myHeader">
        <Navigation />
      </nav>
      <div className="w-full absolute left-0 h-px bg-gradient-to-r from-transparent via-round-accent/40 to-transparent" />
    </header>
    <div className="max-w-screen-xl my-0 mx-auto px-10  ">
      <div className="my-8">
        {name}
        <Body />
      </div>

      <footer className={`leading-8 footer fixed bottom-0  w-full left-0 `}>
        <div
          className={`fixed left-0 bottom-0 w-full h-8 px-12 ${blurBackground}`}
        >
          www.featherglobe.com
        </div>
      </footer>
    </div>
    <MessageBox
      ref={messageBoxRef}
      title="Edit User Info"
      message="Are you sure, you want to edit user info?"
      okHandler={messageBoxOkHandler}
      cancelHandler={messageBoxCancelHandler}
    />
  </>
);

const App = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    // messageBoxRef.current.showMessageBox();
    window.onscroll = function () {
      // myFunction();
    };

    const header = document.getElementById("myHeader");
    if (!header) return;

    const sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    // run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Routes>
            <Route path="/eat" element={<EATransfers />} />
            <Route
              path="/*"
              element={
                <MainLayout
                  messageBoxRef={messageBoxRef}
                  name={name}
                  messageBoxOkHandler={messageBoxOkHandler}
                  messageBoxCancelHandler={messageBoxCancelHandler}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
