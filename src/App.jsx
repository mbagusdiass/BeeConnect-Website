import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ShippingDetailsPage from "./pages/ShippingDetailPage";
import SuccessPayingPage from "./pages/SuccessPayingPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingCartPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shipping-details" element={<ShippingDetailsPage />} />
        <Route path="/success-paying" element={<SuccessPayingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
