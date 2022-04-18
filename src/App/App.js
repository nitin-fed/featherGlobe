/** @format */

import React, { Component, useEffect } from "react";
import Navigation from "./Navigation/navigation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/createStore";
import Logo from "./Components/Logo";
import ErrorBoundary from "./ErrorBoundary";
import { Body } from "./Body";

const App = () => {
  useEffect(() => {
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

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <div className='max-w-screen-xl my-0 mx-auto '>
            <header className='py-4'>
              <img
                src='./images/a.jpg'
                className='absolute top-0 left-0 -z-10 w-full'
              />
              <Logo />
            </header>
            <nav
              className='bg-black/90  h-16 text-white text-sm px-5'
              id='myHeader'>
              <Navigation />
            </nav>
            <div className='p-10 bg-black/80'>
              <Body />
            </div>

            <footer className='px-4 leading-8 footer fixed bottom-0  text-white w-full '>
              <div className='footerImg fixed left-0 bottom-0 w-full h-8'></div>
              www.featherglobe.com
            </footer>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
