import { useState, useCallback } from "react";
import axiosInstance from "../api/axiosInstance";

const useAdmin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get("/api/admin/users/");
      setUsers(response.data);
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal memuat data user.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const updateUserStatus = useCallback(async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.put(`/api/admin/users/status/${userId}`);
      setUsers((prev) =>
        prev.map((u) => (u._id === userId ? response.data : u))
      );
      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal memperbarui status user.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  const deleteUser = useCallback(async (userId) => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.delete(`/api/admin/users/${userId}`);
      setUsers((prev) => prev.filter((u) => u._id !== userId));
      setLoading(false);
      return { success: true };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Gagal menghapus user.";
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  return {
    users,
    loading,
    error,
    getUsers,
    updateUserStatus,
    deleteUser,
    setError,
  };
};

export default useAdmin;
