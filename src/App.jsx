import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ShippingDetailsPage from "./pages/ShippingDetailPage";
import SuccessPayingPage from "./pages/SuccessPayingPage";
import InfoProductPage from "./pages/InfoProductPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<InfoProductPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shipping-details" element={<ShippingDetailsPage />} />
        <Route path="/success-paying" element={<SuccessPayingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<UnauthorizedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
