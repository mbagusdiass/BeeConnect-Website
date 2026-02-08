import { useState, useEffect } from "react";

interface User {
  name: string;
  email: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email: string, password: string) => {
    const mockUser = { name: "Nama user", email };
    localStorage.setItem("user", JSON.stringify(mockUser));
    setUser(mockUser);
    return true;
  };

  const register = (name: string, email: string, password: string) => {
    const mockUser = { name, email };
    localStorage.setItem("user", JSON.stringify(mockUser));
    setUser(mockUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, loading, login, register, logout };
};
