import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/ui/Home/';
import ProductPage from './pages/Product/ProductPage';
import SearchPage from './pages/Search/SearchPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import ProfilePage from './pages/Profile/ProfilePage';
import ReviewPayPage from './pages/Review-Pay/ReviewPayPage';
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/review-pay" element={<ReviewPayPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;