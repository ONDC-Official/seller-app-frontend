import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Order from "../Components/Application/Order/Order";
import Inventory from "../Components/Application/Inventory/Inventory";
import AddProduct from "../Components/Application/Product/AddProduct";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import Login from "../Components/Auth/Login/Login";
import SignUp from "../Components/Auth/SignUp/SignUp";
import PrivateRoute from "./PrivateRoutes";
import OrderDetails from "../Components/Application/Order/OrderDetails";
import UserListings from "../Components/Application/UserListings/UserListings";
import ProviderInitialSteps from "../Components/Auth/ProviderInitialSteps/ProviderInitialSteps";
import ProviderDetails from "../Components/Application/UserListings/ProviderDetails";
import InviteAdmin from "../Components/OnBoarding/InviteAdmin";
import InviteProvider from "../Components/OnBoarding/inviteProvider";
import ForgotPassword from "../Components/Auth/ForgotPassword/ForgotPassword";
import BulkUpload from "../Components/Application/Product/BulkUpload";
import StoreDetails from "../Components/Application/Store/StoreDetails.jsx";
import { getUser } from "../utils/validateToken.js";

export default function OndcRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        <Route
          path="/initial-steps"
          element={
            <PrivateRoute>
              <ProviderInitialSteps />
            </PrivateRoute>
          }
        />
        <Route
          path={"/application/inventory"}
          element={
            <PrivateRoute>
              <Inventory />
            </PrivateRoute>
          }
        />
        <Route
          path="/application/orders"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/application/orders/:id"
          element={
            <PrivateRoute>
              <OrderDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/application/add-products"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/application/bulk-upload"
          element={
            <PrivateRoute>
              <BulkUpload />
            </PrivateRoute>
          }
        />
        <Route
          path="/application/user-listings"
          element={
            <PrivateRoute>
              <UserListings />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-listings/provider-details/:id"
          element={
            <PrivateRoute>
              <ProviderDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/invite-admin"
          element={
            <PrivateRoute>
              <InviteAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/invite-provider"
          element={
            <PrivateRoute>
              <InviteProvider />
            </PrivateRoute>
          }
        />
        <Route
          path="/application/store-details"
          element={
            <PrivateRoute>
              <StoreDetails />
            </PrivateRoute>
          }
        />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
