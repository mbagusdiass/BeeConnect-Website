import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

// Hero Section
const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  padding: 4rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 400px;
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 3rem 2rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 500px;
  z-index: 2;

  @media (max-width: 900px) {
    margin-bottom: 2rem;
  }
`;

const ProBeyond = styled.p`
  color: #888;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: 400;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 200;
  color: #fff;
  margin: 0 0 1rem 0;
  letter-spacing: -1px;

  span {
    color: #a78bfa;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  color: #666;
  font-size: 0.95rem;
  margin: 0 0 2rem 0;
  line-height: 1.5;
`;

const ShopNowButton = styled.button`
  background: #1a1a1a;
  color: white;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0.875rem 2rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #333;
  }
`;

const HeroImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: -2rem;
  z-index: 2;

  @media (max-width: 900px) {
    transform: scale(0.8);
  }
`;

const PhoneImage = styled.div`
  width: 220px;
  height: 450px;
  background: linear-gradient(145deg, #2a2a3e 0%, #1a1a2e 100%);
  border-radius: 40px;
  position: relative;
  box-shadow: -20px 20px 60px rgba(0, 0, 0, 0.5);

  &:first-child {
    transform: rotate(-5deg) translateX(30px);
    z-index: 1;
  }

  &:last-child {
    transform: rotate(5deg);
    z-index: 2;
    background: linear-gradient(145deg, #7c3aed 0%, #a78bfa 50%, #c4b5fd 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
`;

const PhoneTime = styled.div`
  color: white;
  font-size: 4rem;
  font-weight: 300;
  text-align: center;
`;

const PhoneDate = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1rem;
`;

// Categories Section
const CategoriesSection = styled.section`
  padding: 3rem 5rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1.5rem 0;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const CategoryTab = styled.button`
  background: ${(props) => (props.$active ? "#000" : "#fff")};
  color: ${(props) => (props.$active ? "#fff" : "#666")};
  border: 1px solid ${(props) => (props.$active ? "#000" : "#e0e0e0")};
  border-radius: 20px;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #000;
    color: ${(props) => (props.$active ? "#fff" : "#000")};
  }
`;

// Popular Section
const PopularSection = styled.section`
  padding: 0 5rem 4rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 0 1.5rem 3rem;
  }
`;

const PopularHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SeeAllLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImageWrapper = styled.div`
  background: #f8f8f8;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  margin-bottom: 1rem;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem 0;
`;

const ProductVariant = styled.p`
  font-size: 0.85rem;
  color: #888;
  margin: 0 0 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Fashion");

  const categories = ["All", "Fashion", "Books", "Electronics"];

  const products = [
    {
      id: 1,
      name: "Street Flow Tee",
      variant: "Oversized clean drip",
      price: "Rp. 60.000,00",
      image: "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
    },
    {
      id: 2,
      name: "FlexMode Hoodie",
      variant: "Built for daily flex",
      price: "Rp.150.000,00",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Street Flow Tee",
      variant: "Oversized clean drip",
      price: "Rp. 60.000,00",
      image: "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
    },
    {
      id: 4,
      name: "FlexMode Hoodie",
      variant: "Built for daily flex",
      price: "Rp.150.000,00",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&auto=format&fit=crop",
    },
  ];

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <ProBeyond>Pro.Beyond.</ProBeyond>
          <HeroTitle>
            IPhone 14 <span>Pro</span>
          </HeroTitle>
          <HeroSubtitle>
            Created to change everything for the better. For everyone
          </HeroSubtitle>
          <ShopNowButton>Shop Now</ShopNowButton>
        </HeroContent>

        <HeroImageContainer>
          <PhoneImage />
          <PhoneImage>
            <PhoneDate>Monday, June 6</PhoneDate>
            <PhoneTime>9:41</PhoneTime>
          </PhoneImage>
        </HeroImageContainer>
      </HeroSection>

      {/* Categories Section */}
      <CategoriesSection>
        <SectionTitle>Categories</SectionTitle>
        <CategoryTabs>
          {categories.map((category) => (
            <CategoryTab
              key={category}
              $active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryTab>
          ))}
        </CategoryTabs>
      </CategoriesSection>

      {/* Popular Section */}
      <PopularSection>
        <PopularHeader>
          <SectionTitle style={{ margin: 0 }}>Popular</SectionTitle>
          <SeeAllLink href="#">See all</SeeAllLink>
        </PopularHeader>

        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImageWrapper>
                <ProductImage src={product.image} alt={product.name} />
              </ProductImageWrapper>
              <ProductName>{product.name}</ProductName>
              <ProductVariant>{product.variant}</ProductVariant>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </PopularSection>
    </Container>
  );
};

export default Home;
