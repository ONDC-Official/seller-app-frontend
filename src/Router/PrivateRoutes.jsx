import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/validateToken";

export default function PrivateRoute({ children }) {
  const authenticated = isLoggedIn();
  return authenticated ? children : <Navigate to="/login" />;
}
