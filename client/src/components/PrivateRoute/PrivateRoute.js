import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const location = useLocation();

  return user?.email ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
      }}
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoute;
