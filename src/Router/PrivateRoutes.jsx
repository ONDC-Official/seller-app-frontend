import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/validateToken";
import { AuthProvider } from "../Router/AuthProvider.js"

export default function PrivateRoute({ children }) {
  const authenticated = isLoggedIn();
  return authenticated ? <AuthProvider>{children}</AuthProvider> : <Navigate to="/login" />;
}
