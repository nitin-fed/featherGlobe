import React from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Photos from "./Photos";

const PhotoNav = props => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to={`${props.localPath}/photos`}
            >
              My Photos
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/photography/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/photography/links">
              Links
            </NavLink>
          </li>
        </ul>
      </div>

      <Route path={`${props.localPath}/home`} />
      <Route path={`${props.localPath}/photos`} component={Photos} />
      {/* <Route path={`${props.localPath}`+'/about'} component={About} />
      <Route path={`${props.localPath}`+'/links'} component={Links} /> */}
    </div>
  );
};

export default PhotoNav;
