import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRoute = ({ children }) => {
  const userContext = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = userContext[0];
  const user = JSON.parse(sessionStorage.getItem("user"));
  const location = useLocation();

  return isLoggedIn ? (
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
