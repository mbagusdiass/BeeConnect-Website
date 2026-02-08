import { useState, useCallback } from "react";
import axiosInstance from "../api/axiosInstance";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/api/auth/login", {
        email,
        password,
      });
      
      const { token, user: userData } = response.data;
      
      localStorage.setItem("token", token);
      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
      }
      
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login gagal. Silakan coba lagi.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const register = useCallback(async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/api/auth/register", userData);
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Registrasi gagal. Silakan coba lagi.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }, []);

  const isAuthenticated = useCallback(() => {
    return !!localStorage.getItem("token");
  }, []);

  const getToken = useCallback(() => {
    return localStorage.getItem("token");
  }, []);

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated,
    getToken,
    setError,
  };
};

export default useAuth;
