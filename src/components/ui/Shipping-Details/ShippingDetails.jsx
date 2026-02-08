import React, { useState } from "react";
import styled from "styled-components";
import { Pencil, X } from "lucide-react";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  color: #1a1a1a;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const MainContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SectionHeader = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e1e2f;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
`;

const DetailRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailText = styled.p`
  font-size: 1rem;
  color: #888;
  margin: 0;
  line-height: 1.6;
`;

const EditIconBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
`;

const ProductImage = styled.div`
  width: 80px;
  height: 90px;
  background-color: #f9f9f9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    mix-blend-mode: multiply;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
`;

const ProductVariant = styled.span`
  font-size: 0.875rem;
  color: #666;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  margin-right: 2rem;
`;

const QtyControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
`;

const QtyBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #888;
  cursor: pointer;
  padding: 0 0.5rem;

  &:hover {
    color: #000;
  }
`;

const QtyValue = styled.span`
  font-size: 1rem;
  font-weight: 600;
  padding: 0 0.75rem;
`;

const PriceText = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  min-width: 120px;
  text-align: right;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #999;
  margin-left: 1rem;

  &:hover {
    color: #ff4d4f;
  }
`;

const Sidebar = styled.div`
  flex: 1;
  min-width: 350px;
`;

const SummaryCard = styled.div`
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
`;

const SummaryHeader = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  color: #1a1a1a;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #1a1a1a;

  &:last-of-type {
    margin-bottom: 3rem;
    font-weight: 700;
    font-size: 1.125rem;
    margin-top: 2rem;
  }
`;

const SummaryLabel = styled.span`
  color: ${(props) => (props.bold ? "#1a1a1a" : "#555")};
  font-weight: ${(props) => (props.bold ? "700" : "500")};
`;

const SummaryValue = styled.span`
  font-weight: ${(props) => (props.bold ? "700" : "500")};
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: #000;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const ShippingDetails = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Flexmod hoodie",
      variant: "White and Black",
      size: "M (Medium)",
      price: 150000,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Street Flow tee",
      variant: "",
      size: "M (Medium)",
      price: 60000,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&auto=format&fit=crop",
    },
  ]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    })
      .format(val)
      .replace("IDR", "Rp")
      .trim();
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const total = subtotal;

  return (
    <LayoutWrapper>
      <MainContent>
        <div>
          <SectionHeader>Delivery Detail</SectionHeader>
          <Card>
            <DetailRow>
              <DetailText>Name</DetailText>
              <DetailText>Adress</DetailText>
              <DetailText>Standard Delivery (2-3 days)</DetailText>
              <DetailText>Payment method</DetailText>
            </DetailRow>
            <EditIconBtn>
              <Pencil size={20} color="#000" fill="#000" />
            </EditIconBtn>
          </Card>
        </div>

        <div>
          <SectionHeader>Order Summary</SectionHeader>
          <ProductList>
            {items.map((item) => (
              <ProductItem key={item.id}>
                <ProductInfo>
                  <ProductImage>
                    <img src={item.image} alt={item.name} />
                  </ProductImage>
                  <ProductDetails>
                    <ProductName>{item.name}</ProductName>
                    {item.variant && (
                      <ProductVariant>{item.variant}</ProductVariant>
                    )}
                    <ProductVariant>{item.size}</ProductVariant>
                  </ProductDetails>
                </ProductInfo>

                <QuantityWrapper>
                  <QtyBtn>-</QtyBtn>
                  <QtyControl>
                    <QtyValue>{item.qty}</QtyValue>
                  </QtyControl>
                  <QtyBtn>+</QtyBtn>
                </QuantityWrapper>

                <PriceText>
                  {formatCurrency(item.price).replace(",00", "")}
                </PriceText>

                <RemoveButton>
                  <X size={20} />
                </RemoveButton>
              </ProductItem>
            ))}
          </ProductList>
        </div>
      </MainContent>

      <Sidebar>
        <SummaryCard>
          <SummaryHeader>Order Summary</SummaryHeader>

          <SummaryRow>
            <SummaryLabel>Subtotal</SummaryLabel>
            <SummaryValue>{formatCurrency(subtotal)}</SummaryValue>
          </SummaryRow>

          <SummaryRow>
            <SummaryLabel>Shipping</SummaryLabel>
            <SummaryValue>Free</SummaryValue>
          </SummaryRow>

          <SummaryRow>
            <SummaryLabel bold>Total</SummaryLabel>
            <SummaryValue bold>{formatCurrency(total)}</SummaryValue>
          </SummaryRow>

          <CheckoutButton>Confirm Payment</CheckoutButton>
        </SummaryCard>
      </Sidebar>
    </LayoutWrapper>
  );
};

export default ShippingDetails;
