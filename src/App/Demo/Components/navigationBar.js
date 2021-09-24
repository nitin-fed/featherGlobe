import React, { Suspense, lazy } from "react";
import { NavLink, Route } from "react-router-dom";

const Posts = lazy(() => import("../Container/Posts"));
const Home = lazy(() => import("../../Home/home"));
const Counters = lazy(() => import("../Container/counters"));
const Profile = lazy(() => import("../Container/Profile"));
const Gallery = lazy(() => import("../Container/Gallery"));
const Todos = lazy(() => import("../Container/todos"));
const Users = lazy(() => import("../Components/Users/UsersContainer"));
const Article = lazy(() => import("../Article/Article"));

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
          {/* <li>
            <NavLink to="/demo/Todos">Todos</NavLink>
          </li> */}
          <li>
            <NavLink to="/demo/Article">Article</NavLink>
          </li>
        </ul>
      </div>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path={`${props.localPath}/home`} component={Home} />
          <Route path={`${props.localPath}/newPosts`} component={Posts} />
          <Route path="/demo/Counters" component={Counters} />
          <Route path="/demo/Profile" component={Profile} />
          <Route path="/demo/Gallery" component={Gallery} />
          <Route path="/demo/RegisgerUser" component={Users} />
          <Route path="/demo/Todos" component={Todos} />
          <Route path="/demo/Article" component={Article} />
        </Suspense>
      </div>
    </div>
  );
};

export default NavigationBar;
