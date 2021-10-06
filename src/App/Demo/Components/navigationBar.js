import React, { lazy } from "react";
import { NavLink, Route, Redirect } from "react-router-dom";

const Posts = lazy(() => import("../Container/Posts"));
const Home = lazy(() => import("../../Home/home"));
const Counters = lazy(() => import("../Container/counters"));
const Profile = lazy(() => import("../Container/Profile"));
const Gallery = lazy(() => import("../Container/Gallery"));
const Todos = lazy(() => import("../Container/todos"));
const Users = lazy(() => import("../Components/Users/UsersContainer"));
const Article = lazy(() => import("../Article/Article"));
const Support = lazy(() => import("../Support/Support"));

export const handleActiveMenu = evt => {
  console.log(evt.target.parentElement);
  console.log(evt.currentTarget);

  evt.target.parentElement.setAttribute("className", "active");
};

const NavigationBar = props => {
  return (
    <div>
      <div className="navigation">
        <ul onClick={e => handleActiveMenu(e)}>
          <li>
            <NavLink activeClassName="active" to="/demo/Posts">
              Posts
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" to="/demo/Counters">
              Counters/Calc
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/demo/Profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/demo/Gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/demo/RegisgerUser">
              Register User
            </NavLink>
          </li>
          {/* <li>
            <NavLink activeClassName="active"   to="/demo/Todos">Todos</NavLink>
          </li> */}
          <li>
            <NavLink activeClassName="active" to="/demo/Article">
              Article
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/demo/Support">
              Support
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Redirect from="/demo" to={`${props.localPath}/posts`} />
          {/* <Route path="/demo" component={Posts} /> */}
          <Route path={`${props.localPath}/Posts`} component={Posts} />
          <Route path="/demo/Counters" component={Counters} />
          <Route path="/demo/Profile" component={Profile} />
          <Route path="/demo/Gallery" component={Gallery} />
          <Route path="/demo/RegisgerUser" component={Users} />
          <Route path="/demo/Todos" component={Todos} />
          <Route path="/demo/Article" component={Article} />
          <Route path="/demo/Support" component={Support} />
        </React.Suspense>
      </div>
    </div>
  );
};

export default NavigationBar;
