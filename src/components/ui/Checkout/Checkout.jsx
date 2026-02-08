import React, { useState } from "react";
import styled from "styled-components";
import { Plus, Pencil, Trash2 } from "lucide-react";

const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const Card = styled.div`
  background: ${(props) => (props.$selected ? "#f9f9f9" : "#fff")};
  border: 1px solid ${(props) => (props.$selected ? "#000" : "#f0f0f0")};
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border-color: #000;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
`;

const RadioOuter = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  flex-shrink: 0;
`;

const RadioInner = styled.div`
  width: 10px;
  height: 10px;
  background: #000;
  border-radius: 50%;
  display: ${(props) => (props.$selected ? "block" : "none")};
`;

const Content = styled.div`
  flex: 1;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const Name = styled.span`
  font-weight: 600;
  color: #000;
  font-size: 0.95rem;
`;

const Badge = styled.span`
  background: #000;
  color: #fff;
  font-size: 0.65rem;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const AddressText = styled.p`
  color: #555;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0 0 0.5rem 0;
  max-width: 80%;
`;

const Phone = styled.p`
  color: #555;
  font-size: 0.875rem;
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  color: #1a1a1a;
`;

const ActionBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: inherit;
  &:hover {
    opacity: 0.7;
  }
`;

const AddAddressButton = styled.button`
  width: 100%;
  border: 1px dashed #e0e0e0;
  background: transparent;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-top: 1.5rem;
  color: #666;
  font-size: 0.875rem;

  &:hover {
    border-color: #000;
    color: #000;
  }
`;

const PlusCircle = styled.div`
  background: #000;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PriceTag = styled.span`
  color: #999;
  font-size: 0.9rem;
`;

const LogoPlaceholder = styled.div`
  font-weight: 900;
  font-style: italic;
  color: #004085;
  font-size: 1.1rem;

  &.qris {
    color: #000;
    font-weight: 800;
    font-style: normal;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  gap: 1rem;
`;

const BackBtn = styled.button`
  padding: 0.875rem 3rem;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #f5f5f5;
  }
`;

const NextBtn = styled.button`
  padding: 0.875rem 3rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #333;
  }
`;

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState("home");
  const [selectedDelivery, setSelectedDelivery] = useState("standard");
  const [selectedPayment, setSelectedPayment] = useState("bank");

  return (
    <Container>
      <Section>
        <SectionTitle>Select Address</SectionTitle>
        <Card
          $selected={selectedAddress === "home"}
          onClick={() => setSelectedAddress("home")}
        >
          <RadioWrapper>
            <RadioOuter>
              <RadioInner $selected={selectedAddress === "home"} />
            </RadioOuter>
            <Content>
              <HeaderRow>
                <Name>2118 Thornridge</Name>
                <Badge>HOME</Badge>
              </HeaderRow>
              <AddressText>
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </AddressText>
              <Phone>(209) 555-0104</Phone>
            </Content>
          </RadioWrapper>
          <Actions>
            <ActionBtn>
              <Pencil size={18} />
            </ActionBtn>
            <ActionBtn>
              <XIcon />
            </ActionBtn>
          </Actions>
        </Card>

        <AddAddressButton>
          <PlusCircle>
            <Plus size={14} />
          </PlusCircle>
          Add New Address
        </AddAddressButton>
      </Section>

      <Section>
        <SectionTitle>Delivery Method</SectionTitle>
        <Card
          $selected={selectedDelivery === "standard"}
          onClick={() => setSelectedDelivery("standard")}
        >
          <RadioWrapper>
            <RadioOuter>
              <RadioInner $selected={selectedDelivery === "standard"} />
            </RadioOuter>
            <Content>
              <Name>Standard Delivery</Name>
              <AddressText style={{ margin: 0 }}>
                Arrives in 2-3 days
              </AddressText>
            </Content>
          </RadioWrapper>
          <PriceTag>Free</PriceTag>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Payment Method</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Card
            $selected={selectedPayment === "bank"}
            onClick={() => setSelectedPayment("bank")}
          >
            <RadioWrapper>
              <RadioOuter>
                <RadioInner $selected={selectedPayment === "bank"} />
              </RadioOuter>
              <Content>
                <Name>Bank Transfer</Name>
              </Content>
            </RadioWrapper>
            <LogoPlaceholder>BCA</LogoPlaceholder>
          </Card>

          <Card
            $selected={selectedPayment === "wallet"}
            onClick={() => setSelectedPayment("wallet")}
          >
            <RadioWrapper>
              <RadioOuter>
                <RadioInner $selected={selectedPayment === "wallet"} />
              </RadioOuter>
              <Content>
                <Name>E Wallet</Name>
              </Content>
            </RadioWrapper>
            <LogoPlaceholder className="qris">QRIS</LogoPlaceholder>
          </Card>

          <Card
            $selected={selectedPayment === "credit"}
            onClick={() => setSelectedPayment("credit")}
          >
            <RadioWrapper>
              <RadioOuter>
                <RadioInner $selected={selectedPayment === "credit"} />
              </RadioOuter>
              <Content>
                <Name>Credit Card</Name>
              </Content>
            </RadioWrapper>
          </Card>
        </div>
      </Section>

      <ButtonGroup>
        <BackBtn>Back</BackBtn>
        <NextBtn>Next</NextBtn>
      </ButtonGroup>
    </Container>
  );
};

const XIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default Checkout;
