import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation/navigation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './Store/createStore';

class App extends Component {
   render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <div className="logo">
              <div id="header" className="appName">
                Featherglobe 
              </div>
              <div className="tagline">{"{DECODED FROM NATURE}"}</div>
            </div>
            <Navigation />
            <footer className="footer">www.featherglobe.com</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
