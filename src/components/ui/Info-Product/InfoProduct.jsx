import React, { useState } from "react";
import styled from "styled-components";
import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  gap: 4rem;
  padding: 2rem 0;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  max-width: 450px;
`;

const MainImageWrapper = styled.div`
  background: #f8f8f8;
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  margin-bottom: 1rem;
`;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 350px;
  object-fit: contain;
`;

const HeartButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ThumbnailsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  background: ${(props) => (props.$active ? "#e8e8e8" : "#f5f5f5")};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => (props.$active ? "#ccc" : "transparent")};
  transition: all 0.2s;

  &:hover {
    border-color: #ccc;
  }

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  max-width: 500px;
`;

const ProductName = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
`;

const ProductVariant = styled.p`
  font-size: 1rem;
  color: #888;
  margin: 0 0 1rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

const ReviewCount = styled.span`
  color: #888;
  font-size: 0.9rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 1.5rem 0;
`;

const DescriptionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.75rem 0;
`;

const DescriptionText = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const ReadAllLink = styled.a`
  color: #4a90d9;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const AskSellerButton = styled.button`
  flex: 1;
  background: white;
  color: #1a1a1a;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

const AddToCartButton = styled.button`
  flex: 1;
  background: #1a1a2e;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #2a2a3e;
  }
`;

const InfoProduct = ({ product }) => {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  const defaultProduct = {
    id: 1,
    name: "Street Flow Tee",
    variant: "Oversized clean drip",
    price: "Rp 60.000,00",
    rating: 5,
    reviewCount: "1.3K",
    description:
      "Break the streetwear code with the Street Flow Tee – built for movement, styled for the spotlight. Crafted from ultra-soft, breathable...",
    image: "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
    thumbnails: [
      "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
      "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
      "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
      "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
    ],
  };

  const currentProduct = product || defaultProduct;

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <Container>
      <ImageSection>
        <MainImageWrapper>
          <HeartButton onClick={() => setIsWishlisted(!isWishlisted)}>
            <Heart
              size={20}
              color={isWishlisted ? "#ff4d4f" : "#999"}
              fill={isWishlisted ? "#ff4d4f" : "none"}
            />
          </HeartButton>
          <MainImage src={currentProduct.image} alt={currentProduct.name} />
        </MainImageWrapper>

        <ThumbnailsWrapper>
          {currentProduct.thumbnails?.map((thumb, index) => (
            <Thumbnail
              key={index}
              $active={activeThumbnail === index}
              onClick={() => setActiveThumbnail(index)}
            >
              <img src={thumb} alt={`Thumbnail ${index + 1}`} />
            </Thumbnail>
          ))}
        </ThumbnailsWrapper>
      </ImageSection>

      <InfoSection>
        <ProductName>{currentProduct.name}</ProductName>
        <ProductVariant>{currentProduct.variant}</ProductVariant>
        <ProductPrice>{currentProduct.price}</ProductPrice>

        <RatingWrapper>
          <Stars>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < currentProduct.rating ? "#1a1a1a" : "none"}
                color="#1a1a1a"
              />
            ))}
          </Stars>
          <ReviewCount>({currentProduct.reviewCount} Reviews)</ReviewCount>
        </RatingWrapper>

        <Divider />

        <DescriptionTitle>Description</DescriptionTitle>
        <DescriptionText>
          {currentProduct.description} <ReadAllLink>Read all</ReadAllLink>
        </DescriptionText>

        <ButtonGroup>
          <AskSellerButton>Ask Seller</AskSellerButton>
          <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
        </ButtonGroup>
      </InfoSection>
    </Container>
  );
};

export default InfoProduct;
