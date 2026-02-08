import { useState, useCallback } from "react";
import axiosInstance from "../api/axiosInstance";

const useSellers = () => {
  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSellers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get("/api/sellers");
      setSellers(response.data);
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal memuat data seller.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const getSellerById = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(`/api/sellers/${id}`);
      setSeller(response.data);
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal memuat detail seller.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const registerShop = useCallback(async (shopData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/api/sellers/register-shop", shopData);
      setSellers((prev) => [...prev, response.data]);
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal mendaftarkan toko.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const updateSeller = useCallback(async (id, sellerData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.put(`/api/sellers/${id}`, sellerData);
      setSellers((prev) =>
        prev.map((s) => (s._id === id ? response.data : s))
      );
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal memperbarui seller.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const deleteSeller = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.delete(`/api/sellers/${id}`);
      setSellers((prev) => prev.filter((s) => s._id !== id));
      setLoading(false);
      return { success: true };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal menghapus seller.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  return {
    sellers,
    seller,
    loading,
    error,
    getSellers,
    getSellerById,
    registerShop,
    updateSeller,
    deleteSeller,
    setError,
  };
};

export default useSellers;
