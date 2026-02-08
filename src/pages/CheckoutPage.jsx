import React from "react";
import TopBar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import Checkout from "../components/ui/Checkout/Checkout";

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <TopBar />

      <main className="main-content">
        <Checkout />
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
