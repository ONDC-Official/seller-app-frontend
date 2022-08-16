import React from "react";
import { Redirect, Route } from "react-router-dom";
// import { isLoggedIn } from "./utils/validateToken";

export default function PrivateRoute({ children, ...props }) {
  return (
    <Route
      {...props}
      render={() => {
        return true ? children : <Redirect to={{ pathname: "/" }} />;
      }}
    />
  );
}
