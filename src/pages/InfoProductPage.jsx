import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "lucide-react";
import TopBar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import InfoProduct from "../components/ui/Info-Product/InfoProduct";
import useProducts from "../hooks/useProducts";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  gap: 1rem;
  color: #666;
  min-height: 400px;
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
  margin: 2rem;
`;

const InfoProductPage = () => {
  const { id } = useParams();
  const { product, loading, error, getProductById } = useProducts();

  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [id, getProductById]);

  const fallbackProducts = {
    1: {
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
    },
    2: {
      id: 2,
      name: "FlexMode Hoodie",
      variant: "Built for daily flex",
      price: "Rp 150.000,00",
      rating: 5,
      reviewCount: "2.1K",
      description:
        "Elevate your comfort game with the FlexMode Hoodie – designed for those who move with purpose. Premium cotton blend with modern fit...",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&auto=format&fit=crop",
      thumbnails: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&auto=format&fit=crop",
      ],
    },
  };

  const transformProduct = (apiProduct) => {
    if (!apiProduct) return null;
    
    const formatPrice = (price) => {
      if (typeof price === 'string') return price;
      return `Rp ${price?.toLocaleString("id-ID") || 0},00`;
    };

    return {
      id: apiProduct._id || apiProduct.id,
      name: apiProduct.name,
      variant: apiProduct.description || "Premium quality product",
      price: formatPrice(apiProduct.price),
      rating: apiProduct.rating || 5,
      reviewCount: apiProduct.review_count || "0",
      description: apiProduct.description || "No description available.",
      image: apiProduct.image_url || apiProduct.image,
      thumbnails: apiProduct.thumbnails || [
        apiProduct.image_url || apiProduct.image,
        apiProduct.image_url || apiProduct.image,
        apiProduct.image_url || apiProduct.image,
        apiProduct.image_url || apiProduct.image,
      ],
    };
  };

  const displayProduct = product 
    ? transformProduct(product) 
    : (loading ? null : fallbackProducts[id] || fallbackProducts[1]);

  return (
    <div className="page">
      <TopBar />

      <main className="main-content">
        {loading ? (
          <LoadingContainer>
            <SpinnerIcon size={32} />
            <p>Memuat detail produk...</p>
          </LoadingContainer>
        ) : error ? (
          <ErrorContainer>
            {error}
          </ErrorContainer>
        ) : (
          <InfoProduct product={displayProduct} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default InfoProductPage;
