import React from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import "../profile.css";
import Skills from './skills'
import Experience from "./experience";
import Contact from "./contact";
import uiDesigning from "./uiDesigning";
import About from "./about";

const ProfileNav = (props) => {

  
  return (
    <div>
      <div className="navigation">
        <ul>
        <li>
          <NavLink activeClassName="active"  to={`${props.localPath}/about`}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={`${props.localPath}/skills`}>Skills
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={`${props.localPath}/experience`}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={`${props.localPath}/uiDesigning`}>
            UI Desigining
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={`${props.localPath}/contact`}>
            Contact
          </NavLink>
        </li>
        </ul>
      </div>

     
      
        <Redirect from='/' to={`${props.localPath}/about`}  />
        <Route path={`${props.localPath}/about`} exact component={About} />
        <Route path={`${props.localPath}/skills`} component={Skills} />
        <Route path={`${props.localPath}/experience`} component={Experience} />
        <Route path={`${props.localPath}/uiDesigning`} component={uiDesigning} />
        <Route path={`${props.localPath}/contact`} component={Contact} />
     

    </div>
  );
};

export default ProfileNav;