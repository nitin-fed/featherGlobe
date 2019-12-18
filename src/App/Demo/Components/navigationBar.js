import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Posts from '../Container/Posts';
import Home from '../../Home/home';
import Counters from '../Container/counters';
import Profile from '../Container/Profile';
import Gallery from '../Container/Gallery';
// import RegisterUser from "../Container/Register";
import Todos from '../Container/todos';
import { Test } from '../Components/Test';
import Users from '../Container/Users';

const NavigationBar = props => {
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
            <NavLink to="/demo/newPosts">New Posts</NavLink>
          </li>
          <li>
            <NavLink to="/demo/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/demo/Counters">Counters</NavLink>
          </li>
          <li>
            <NavLink to="/demo/Profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/demo/Gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/demo/RegisgerUser">Register User</NavLink>
          </li>
          <li>
            <NavLink to="/demo/Todos">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/demo/Test">Test</NavLink>
          </li>
        </ul>
      </div>

      <div>
        <Route path={`${props.localPath}/home`} component={Home} />
        <Route path={`${props.localPath}/newPosts`} component={Posts} />
        <Route path="/demo/Counters" component={Counters} />
        <Route path="/demo/Profile" component={Profile} />
        <Route path="/demo/Gallery" component={Gallery} />
        <Route path="/demo/RegisgerUser" component={Users} />
        <Route path="/demo/Todos" component={Todos} />
        <Route path="/demo/Test" component={Test} />
      </div>
    </div>
  );
};

export default NavigationBar;
