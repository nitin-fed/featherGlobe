import React, { Component } from "react";
import Navigation from "./Navigation/navigation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './Store/createStore';
import Logo from "./Components/Logo";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
   render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='mainWrapper'>
              <Logo />
              <Navigation />
            <footer className="footer">www.featherglobe.com</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;