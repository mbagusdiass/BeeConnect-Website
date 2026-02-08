import React from "react";
import { useParams } from "react-router-dom";
import TopBar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import InfoProduct from "../components/ui/Info-Product/InfoProduct";

const InfoProductPage = () => {
  const { id } = useParams();

  const products = {
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

  const product = products[id] || products[1];

  return (
    <div className="page">
      <TopBar />

      <main className="main-content">
        <InfoProduct product={product} />
      </main>

      <Footer />
    </div>
  );
};

export default InfoProductPage;
