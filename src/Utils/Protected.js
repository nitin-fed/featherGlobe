
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { isAuthenticated } = useSelector((state) => {
    return state.appReducer;
  });

  if (!isAuthenticated) {
    return <Navigate to='/unAuthUser' replace />;
  }

  return <Outlet />;
};

export default Protected;
