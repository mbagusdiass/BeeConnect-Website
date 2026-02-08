import React from "react";
import TopBar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import ShippingDetails from "../components/ui/Shipping-Details/ShippingDetails";
import useCart from "../hooks/useCart";

const ShippingDetailsPage = () => {
  const { cartItems, total, checkout } = useCart();

  return (
    <div className="shipping-details-page">
      <TopBar />

      <main className="main-content">
        <ShippingDetails items={cartItems} total={total} onCheckout={checkout} />
      </main>

      <Footer />
    </div>
  );
};

export default ShippingDetailsPage;
