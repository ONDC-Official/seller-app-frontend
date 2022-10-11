import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import PrivateRoute from "../../Router/PrivateRoutes";
import Inventory from "../Application/Inventory/Inventory";
import Order from "../Application/Order/Order";
import AddProduct from "../Application/Product/AddProduct";

export default function Application() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/application/inventory");
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/application/inventory"
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
          path="/application/add-products"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
