import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Photos from './Photos';
import Links from './Links';

const PhotoNav = props => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink activeClassName="active" to={`${props.localPath}/photos`}>
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

      <Redirect from="/photography" to={`${props.localPath}/photos`} />
      <Route path={`${props.localPath}/photos`} />
      <Route path={`${props.localPath}/photos`} component={Photos} />
      {
        /* <Route path={`${props.localPath}`+'/about'} component={About} />*/
        <Route path={`${props.localPath}/links`} component={Links} />
      }
    </div>
  );
};

export default PhotoNav;
