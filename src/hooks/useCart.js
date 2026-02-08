import { useState, useEffect } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const initialCartData = [
    {
      name: "Flexmode hoodie",
      description: "Oversized Clean drip",
      quantity: 1,
      price: "Rp.60.000",
      variant: "",
    },
    {
      name: "Street Flow tee",
      description: "Oversized Clean drip",
      quantity: 0,
      price: "Rp.60.000",
      variant: "",
    },
    {
      name: "Street Flow tee",
      description: "Oversized Clean dip",
      quantity: 0,
      price: "Rp.60.000",
      variant: "",
    },
  ];

  useEffect(() => {
    setCartItems(initialCartData);
    calculateTotal(initialCartData);
  }, []);

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((sum, item) => {
      const priceNumber = parseInt(item.price.replace(/[^0-9]/g, ""));
      return sum + priceNumber * item.quantity;
    }, 0);

    setTotal(`Rp.${totalAmount.toLocaleString("id-ID")},00`);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = Math.max(0, newQuantity);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const checkout = () => {
    alert("Checkout functionality will be implemented!");
  };

  return {
    cartItems,
    total,
    updateQuantity,
    removeItem,
    checkout,
  };
};

export default useCart;
