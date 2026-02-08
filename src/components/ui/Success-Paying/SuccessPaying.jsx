import React from "react";
import styled from "styled-components";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  text-align: center;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #00c853 0%, #00e676 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  box-shadow: 0 10px 40px rgba(0, 200, 83, 0.3);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 2.5rem 0;
  max-width: 400px;
  line-height: 1.6;
`;

const OrderInfo = styled.div`
  background: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 2.5rem;
  min-width: 300px;
`;

const OrderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const OrderLabel = styled.span`
  color: #888;
  font-size: 0.9rem;
`;

const OrderValue = styled.span`
  color: #1a1a1a;
  font-weight: 600;
  font-size: 0.9rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.button`
  background: #000;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const SecondaryButton = styled.button`
  background: white;
  color: #000;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

const SuccessPaying = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleViewOrders = () => {
    navigate("/orders");
  };

  return (
    <Container>
      <IconWrapper>
        <CheckCircle size={60} color="white" strokeWidth={2} />
      </IconWrapper>

      <Title>Payment Successful!</Title>
      <Subtitle>
        Thank you for your purchase. Your order has been confirmed and will be
        shipped soon.
      </Subtitle>

      <OrderInfo>
        <OrderRow>
          <OrderLabel>Order Number</OrderLabel>
          <OrderValue>#ORD-2024-001234</OrderValue>
        </OrderRow>
        <OrderRow>
          <OrderLabel>Total Amount</OrderLabel>
          <OrderValue>Rp 210.000,00</OrderValue>
        </OrderRow>
        <OrderRow>
          <OrderLabel>Payment Method</OrderLabel>
          <OrderValue>Bank Transfer</OrderValue>
        </OrderRow>
      </OrderInfo>

      <ButtonGroup>
        <SecondaryButton onClick={handleViewOrders}>View Orders</SecondaryButton>
        <PrimaryButton onClick={handleBackToHome}>Back to Home</PrimaryButton>
      </ButtonGroup>
    </Container>
  );
};

export default SuccessPaying;
