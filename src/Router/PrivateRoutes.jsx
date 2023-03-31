import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/validateToken";
import { AuthProvider } from "../Router/AuthProvider.js"
import AppLayout from '../Components/AppLayout/AppLayout'

export default function PrivateRoute({ children }) {
  const authenticated = isLoggedIn();
  return authenticated ? (
    <AuthProvider>
      <AppLayout>
        {children}
      </AppLayout>
    </AuthProvider>
  ) : (
    <Navigate to="/login" />
  )
}
