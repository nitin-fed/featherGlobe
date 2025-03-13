



import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// 
//
// import { NavLink, Route } from "react-router-dom";
// const Protected = ({ isLoggedIn, children }) => {
//   console.log(isLoggedIn);
//   if (!isLoggedIn) {
//     return <NavLink to='/' redirect />;
//   }
//   return children;
// };
// export default Protected;

const PublicRoutes = ({ isLoggedIn, children }) => {
  const { isAuthenticated } = useSelector((state) => {
    return state.appReducer;
  });

  if (!isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to='/' replace />;
};

export default PublicRoutes;
