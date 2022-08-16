import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Order from "../Components/Application/Order/Order";
import Inventory from "../Components/Application/Inventory/Inventory";
import AddProduct from "../Components/Application/Product/AddProduct";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import Login from "../Components/Auth/Login/Login"
import SignUp from "../Components/Auth/SignUp/SignUp"
import Application from "../Components/Application/Application"


export default function OndcRoutes() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact element={<Navigate to="/login"/> }  /> */}
        <Route path="/login" element={ <Login /> } />
        <Route path="/sign-up" element={ <SignUp /> } />
        <Route path="/" element={ <Application /> } />
        <Route path="/order" element={ <Order /> } />
        <Route path="/inventory" element={ <Inventory /> } />
        <Route path="/add-product" element={ <AddProduct /> } />
        <Route path="/page-not-found" element={ <PageNotFound/> } />
        <Route path="*" element={ <PageNotFound/> } />
      </Routes>
    </Router>
  );
}
