import React, { Component } from "react";

import { Route, NavLink } from "react-router-dom";

import Home from "../Home/home";
import Profile from "../Profile/profile";
import Photography from "../Photography/photography";
import Demo from "../Demo/demoApp";
import "./navbar.css";
import Backdrop from "../Components/Backdrop";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      isModelOpen: false
    };
  }

  UNSAFE_componentWillMount() {
    if (window.innerWidth > 768) {
      this.setState({ ...this.state, isMenuOpen: true });
    }
  }

  hamburgerHandler = () => {
    this.setState({ ...this.state, isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    let attachedCSS = "appNav";
    if (this.state.isMenuOpen) {
      attachedCSS = "appNav show";
    } else {
      attachedCSS = "appNav hide";
    }

    return (
      <div>
        <ul className={attachedCSS}>
          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/photography">
              Photography
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/demo">
              Demo
            </NavLink>
          </li>
        </ul>
        <hr />

        <div className="hamburger" onClick={this.hamburgerHandler}>
          <button>X</button>
        </div>
        <Backdrop
          show={this.state.isModelOpen}
          clicked={this.hamburgerHandler}
        />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/photography" component={Photography} />
          <Route path="/demo" component={Demo} />
        </div>
      </div>
    );
  }
}

export default Navigation;
