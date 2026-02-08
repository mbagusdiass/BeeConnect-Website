import React from "react";
import styled from "styled-components";
import { X } from "lucide-react";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid #f0f0f0;

  &:first-child {
    padding-top: 0;
  }
`;

const ImageContainer = styled.div`
  width: 110px;
  height: 120px;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: multiply;
  }

  /* Adding a subtle shadow/glow behind image like in design if needed, 
     but standard contain works best for clean look */
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
`;

const ItemVariant = styled.p`
  font-size: 0.875rem;
  color: #555;
  margin: 0 0 1.5rem 0;
  font-weight: 400;
`;

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 2rem;
`;

const QuantityBtn = styled.button`
  background: none;
  border: none;
  color: #111;
  font-size: 1.25rem;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4px; /* Adjustment to center the text visually */
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

const QuantityInput = styled.div`
  width: 45px;
  height: 32px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: #000;
  background: #fff;
`;

const PriceText = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #000;
  margin-right: 2rem;
  letter-spacing: -0.02em;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;

const CartItem = ({ item }) => {
  return (
    <ItemContainer>
      <ImageContainer>
        <img src={item.image} alt={item.name} />
      </ImageContainer>
      <ItemDetails>
        <ItemTitle>{item.name}</ItemTitle>
        <ItemVariant>{item.variant}</ItemVariant>

        <ControlsRow>
          <QuantityWrapper>
            <QuantityBtn>−</QuantityBtn>
            <QuantityInput>{item.quantity}</QuantityInput>
            <QuantityBtn>+</QuantityBtn>
          </QuantityWrapper>

          <PriceText>{item.price}</PriceText>

          <RemoveButton>
            <X size={20} strokeWidth={1.5} />
          </RemoveButton>
        </ControlsRow>
      </ItemDetails>
    </ItemContainer>
  );
};

export default CartItem;
