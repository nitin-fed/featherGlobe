/** @format */

import React, { Component, useEffect, useRef } from "react";
import Navigation from "./Navigation/navigation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/createStore";
import Logo from "./Components/Logo";
import ErrorBoundary from "./ErrorBoundary";
import { Body } from "./Body";
import { MessageBox } from "./Components/MessageBox";

const App = () => {
  useEffect(() => {
    // messageBoxRef.current.showMessageBox();
    window.onscroll = function() {
      myFunction();
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
          <header className='pt-3 sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'>
            <Logo myRef={messageBoxRef} />
            <hr className='w-full absolute left-0' />
            <nav className='text-sm px-5' id='myHeader'>
              <Navigation />
            </nav>
            <hr className='w-full absolute left-0' />
          </header>
          <div className='max-w-screen-xl my-0 mx-auto px-10  '>
            <div className='my-8'>
              <Body />
            </div>

            <footer className='px-8 leading-8 footer fixed bottom-0  w-full backdrop-supports-backdrop-blur:bg-white/60 dark:bg-transparent backdrop-blur  '>
              <div className='footerImg fixed left-0 bottom-0 w-full h-8'></div>
              www.featherglobe.com
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
