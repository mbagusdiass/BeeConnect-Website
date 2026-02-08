import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiClient from '../../services/apiClient';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { user, login, logout } = context;

  const loginUser = async (email, password) => {
    try {
      const response = await apiClient.post('/api/auth/login', {
        email,
        password,
      });
      if (response.data) {
        login(response.data);
        return true;
      }
    } catch {
      return false;
    }
  };

  const registerUser = async (name, email, password) => {
    try {
      const response = await apiClient.post('/api/auth/register', {
        name,
        email,
        password,
      });
      if (response.data) {
        login(response.data);
        return true;
      }
    } catch {
      return false;
    }
  };

  const logoutUser = () => {
    logout();
  };

  return {
    user,
    loginUser,
    registerUser,
    logoutUser,
    isAuthenticated: !!user,
  };
};

export default useAuth;
