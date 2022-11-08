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

export default function OndcRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
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
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
