import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #fff;
  min-height: 100vh;
`;

const PageTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #000;
  letter-spacing: -0.02em;
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShoppingCart = () => {
  const items = [
    {
      id: 1,
      name: "Flexmode hoodie",
      variant: "Oversized Clean drip",
      price: "Rp.60.000",
      quantity: 1,
      image: "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
    },
    {
      id: 2,
      name: "Street Flow tee",
      variant: "Oversized Clean drip",
      price: "Rp.60.000",
      quantity: 0,
      image: "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
    },
    {
      id: 3,
      name: "Street Flow tee",
      variant: "Oversized Clean drip",
      price: "Rp.60.000",
      quantity: 0,
      image: "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
    },
  ];

  return (
    <PageContainer>
      <LayoutGrid>
        <div>
          <PageTitle>Shopping Cart</PageTitle>
          <ItemsList>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ItemsList>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <OrderSummary total="Rp.60.000,00" onCheckout={() => {}} />
        </div>
      </LayoutGrid>
    </PageContainer>
  );
};

export default ShoppingCart;
