import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import AllProduct from "../Screens/AllProduct";
import AllKeyCaps from "../Screens/AllKeyCaps";
import ProductDetail from "../Screens/ProductDetail";
import Success from "../Screens/Success";
import Failed from "../Screens/Failed";
import Profile from "../Screens/Profile";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allproducts" element={<AllProduct />} />
            <Route path="/allkeycaps" element={<AllKeyCaps />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/success" element={<Success />} />
            <Route path="/account" element={<Profile />} />
            <Route path="/failed" element={<Failed />} />
        </Routes>
    );
};

export default AppRoutes;