import { useState, useCallback } from "react";
import axiosInstance from "../api/axiosInstance";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get("/api/products");
      setProducts(response.data);
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal memuat produk.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const getProductById = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(`/api/products/${id}`);
      setProduct(response.data);
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal memuat detail produk.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const createProduct = useCallback(async (productData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/api/products", productData);
      setProducts((prev) => [...prev, response.data]);
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal membuat produk.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const updateProduct = useCallback(async (id, productData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.put(`/api/products/${id}`, productData);
      setProducts((prev) =>
        prev.map((p) => (p._id === id ? response.data : p))
      );
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal memperbarui produk.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const deleteProduct = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.delete(`/api/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
      setLoading(false);
      return { success: true };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal menghapus produk.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  return {
    products,
    product,
    loading,
    error,
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    setError,
  };
};

export default useProducts;
