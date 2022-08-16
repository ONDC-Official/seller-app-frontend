import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "../../Router/PrivateRoutes";
import Inventory from "../Application/Inventory/Inventory";
import Order from "../Application/Order/Order";
import AddProduct from "../Application/Product/AddProduct";

export default function Application() {
  return (
    <Inventory>
      <Routes>
          <Route
              path={"/application"}
              exact
              component={() => <Navigate to={"/application/inventory"} />}
          />
          <PrivateRoute path={"/application/inventory"}>
              <Inventory />
          </PrivateRoute>
          <PrivateRoute path={"/application/orders"}>
              <Order />
          </PrivateRoute>
          <PrivateRoute path={"/application/add-products"}>
              <AddProduct />
          </PrivateRoute>
      </Routes>
    </Inventory>
  );
}
