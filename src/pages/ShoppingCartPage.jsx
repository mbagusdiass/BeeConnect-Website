import React from "react";
import TopBar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import ShoppingCart from "../components/ui/Shopping-Cart/ShoppingCart";
import useCart from "../hooks/useCart";

const ShoppingCartPage = () => {
  const { cartItems, total, checkout } = useCart();

  return (
    <div className="page">
      <TopBar />

      <main className="main-content">
        <ShoppingCart items={cartItems} total={total} onCheckout={checkout} />
      </main>

      <Footer />
    </div>
  );
};

export default ShoppingCartPage;
