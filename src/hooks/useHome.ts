import { useState } from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: "Fashion" | "Books" | "Electronics";
  image?: string;
}

export const useHome = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Street Flow Tee",
      description: "Oversized clean drip",
      price: "Rp. 60.000,00",
      category: "Fashion",
    },
    {
      id: 2,
      name: "FlexMode Hoodie",
      description: "Built for daily flex",
      price: "Rp.150.000,00",
      category: "Fashion",
    },
    {
      id: 3,
      name: "Street Flow Tee",
      description: "Oversized clean drip",
      price: "Rp. 60.000,00",
      category: "Fashion",
    },
    {
      id: 4,
      name: "FlexMode Hoodie",
      description: "Built for daily flex",
      price: "Rp.150.000,00",
      category: "Fashion",
    },
  ]);

  const [categories] = useState(["All", "Fashion", "Books", "Electronics"]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return {
    products,
    filteredProducts,
    categories,
    selectedCategory,
    searchQuery,
    setSelectedCategory,
    setSearchQuery,
  };
};
