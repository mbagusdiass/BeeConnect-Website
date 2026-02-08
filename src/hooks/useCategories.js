import { useState, useCallback } from "react";
import axiosInstance from "../api/axiosInstance";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get("/api/categories");
      setCategories(response.data);
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal memuat kategori.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const createCategory = useCallback(async (categoryData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/api/categories", categoryData);
      setCategories((prev) => [...prev, response.data]);
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal membuat kategori.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const updateCategory = useCallback(async (id, categoryData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.put(`/api/categories/${id}`, categoryData);
      setCategories((prev) =>
        prev.map((c) => (c._id === id ? response.data : c))
      );
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal memperbarui kategori.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const deleteCategory = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.delete(`/api/categories/${id}`);
      setCategories((prev) => prev.filter((c) => c._id !== id));
      setLoading(false);
      return { success: true };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal menghapus kategori.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  return {
    categories,
    loading,
    error,
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    setError,
  };
};

export default useCategories;
