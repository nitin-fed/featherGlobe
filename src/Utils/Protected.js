/** @format */
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { isAuthenticated } = useSelector((state) => {
    return state.appReducer;
  });

  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to='/signup' replace />;
  }

  return <Outlet />;
};

export default Protected;
