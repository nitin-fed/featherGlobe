import React, { Component } from "react";
import Navigation from "./Navigation/navigation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/createStore";
import Logo from "./Components/Logo";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  //
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <div className="mainWrapper">
            <Logo />
            <Navigation />
            <footer className="footer">www.featherglobe.com</footer>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
