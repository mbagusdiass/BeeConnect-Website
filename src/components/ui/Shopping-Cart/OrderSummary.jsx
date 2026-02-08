import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5; /* Background luar agar kartu terlihat jelas */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 450px; /* Membatasi lebar agar mirip preview mobile/card */
  padding: 20px;
`;

const SummaryCard = styled.div`
  background: white;
  border: 1px solid #e6e6e6; /* Border abu-abu sangat tipis */
  border-radius: 12px; /* Sudut agak membulat */
  padding: 32px; /* Padding luas */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02); /* Shadow sangat tipis, hampir tidak terlihat */
  width: 100%;
  box-sizing: border-box;
`;

const SummaryTitle = styled.h3`
  font-size: 18px;
  font-weight: 700; /* Bold */
  color: #000000;
  margin: 0;
  margin-bottom: 40px; /* Jarak jauh ke baris Total */
  letter-spacing: -0.3px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px; /* Jarak jauh ke tombol Checkout */
`;

const Label = styled.span`
  font-size: 16px;
  color: #000000;
  font-weight: 400; /* Regular weight */
`;

const Value = styled.span`
  font-size: 16px;
  font-weight: 400; /* Regular weight, sama seperti label di gambar */
  color: #000000;
  letter-spacing: 0.2px;
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: #000000; /* Hitam pekat */
  color: white;
  border: none;
  border-radius: 8px; /* Sudut tombol sedikit lebih tajam dari kartu */
  padding: 18px; /* Tombol cukup tinggi/tebal */
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: opacity 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.99);
  }
`;

const OrderSummary = ({ total, onCheckout }) => {
  return (
    <SummaryCard>
      <SummaryTitle>Order Summary</SummaryTitle>
      <Row>
        <Label>Total</Label>
        <Value>{total}</Value>
      </Row>
      <CheckoutButton onClick={onCheckout}>Checkout</CheckoutButton>
    </SummaryCard>
  );
};

export default OrderSummary;
