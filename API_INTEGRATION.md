# API Integration Guide

## 📌 API Base URL
```
https://beeconnect-backend.onrender.com
```

## 🔧 Setup

### Environment Variables
The API base URL is configured in `.env` and `.env.local` files:
```
VITE_API_BASE_URL=https://beeconnect-backend.onrender.com
```

### API Client
A centralized API client is located at `src/services/apiClient.js`:
- Automatically includes authentication tokens
- Handles 401 errors with auto-redirect to login
- Centralized base URL configuration

## 📝 Available Endpoints

### Authentication
- **POST** `/auth/login` - Login user
  ```javascript
  { email, password }
  ```
- **POST** `/auth/register` - Register new user
  ```javascript
  { name, email, password }
  ```

### Products
- **GET** `/products` - List all products
- **GET** `/products/:id` - Get product details
- **POST** `/products` - Create new product (requires auth)
  ```javascript
  { name, price, stock, imageUrl, description, visibility }
  ```
- **PUT** `/products/:id` - Update product (requires auth)
- **DELETE** `/products/:id` - Delete product (requires auth)
- **POST** `/products/:id/buy` - Purchase product (requires auth)

## 🚀 Usage Examples

### Using the API Client in React Hooks
```javascript
import apiClient from '../../services/apiClient';

// GET request
const response = await apiClient.get('/products');

// POST request
const response = await apiClient.post('/auth/login', {
  email: 'user@example.com',
  password: 'password'
});

// PUT request
const response = await apiClient.put(`/products/${id}`, {
  name: 'Updated Name',
  price: 10000
});

// DELETE request
await apiClient.delete(`/products/${id}`);
```

## 🔐 Authentication
- Login tokens are stored in localStorage
- Tokens are automatically included in all requests via interceptor
- Invalid tokens (401) automatically redirect to login page

## ✅ Testing Connection
Run the development server and check browser console for any API errors:
```bash
npm run dev
```

Then navigate to different pages to test API connectivity.
