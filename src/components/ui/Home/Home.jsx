import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import useProducts from "../../../hooks/useProducts";
import useCategories from "../../../hooks/useCategories";

const Container = styled.div`
  width: 100%;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

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

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  gap: 1rem;
  color: #666;
`;

const SpinnerIcon = styled(Loader)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 2rem;
  color: #dc2626;
  background: #fee2e2;
  border-radius: 12px;
  margin: 1rem 0;
`;

const Home = () => {
  const navigate = useNavigate();
  const { products, loading: productsLoading, error: productsError, getProducts } = useProducts();
  const { categories, loading: categoriesLoading, getCategories } = useCategories();
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    getProducts();
    getCategories();
  }, [getProducts, getCategories]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const categoryList = categories.length > 0 
    ? ["All", ...categories.map(c => c.category_name || c.name)]
    : ["All", "Fashion", "Books", "Electronics"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => 
        p.category?.category_name === activeCategory || 
        p.category?.name === activeCategory ||
        p.category_id?.category_name === activeCategory
      );

  const fallbackProducts = [
    {
      _id: 1,
      name: "Street Flow Tee",
      description: "Oversized clean drip",
      price: 60000,
      image_url: "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
    },
    {
      _id: 2,
      name: "FlexMode Hoodie",
      description: "Built for daily flex",
      price: 150000,
      image_url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&auto=format&fit=crop",
    },
    {
      _id: 3,
      name: "Street Flow Tee",
      description: "Oversized clean drip",
      price: 60000,
      image_url: "https://image.made-in-china.com/318f0j00obnYTsjcMqlw/12-mp4.webp",
    },
    {
      _id: 4,
      name: "FlexMode Hoodie",
      description: "Built for daily flex",
      price: 150000,
      image_url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&auto=format&fit=crop",
    },
  ];

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : (productsLoading ? [] : fallbackProducts);

  const formatPrice = (price) => {
    if (typeof price === 'string') return price;
    return `Rp.${price?.toLocaleString("id-ID") || 0},00`;
  };

  return (
    <Container>
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

      <CategoriesSection>
        <SectionTitle>Categories</SectionTitle>
        <CategoryTabs>
          {categoryList.map((category) => (
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

      <PopularSection>
        <PopularHeader>
          <SectionTitle style={{ margin: 0 }}>Popular</SectionTitle>
          <SeeAllLink href="#">See all</SeeAllLink>
        </PopularHeader>

        {productsLoading ? (
          <LoadingContainer>
            <SpinnerIcon size={32} />
            <p>Memuat produk...</p>
          </LoadingContainer>
        ) : productsError ? (
          <ErrorContainer>
            {productsError}
          </ErrorContainer>
        ) : (
          <ProductGrid>
            {displayProducts.map((product) => (
              <ProductCard key={product._id || product.id} onClick={() => handleProductClick(product._id || product.id)}>
                <ProductImageWrapper>
                  <ProductImage src={product.image_url || product.image} alt={product.name} />
                </ProductImageWrapper>
                <ProductName>{product.name}</ProductName>
                <ProductVariant>{product.description || product.variant}</ProductVariant>
                <ProductPrice>{formatPrice(product.price)}</ProductPrice>
              </ProductCard>
            ))}
          </ProductGrid>
        )}
      </PopularSection>
    </Container>
  );
};

export default Home;

