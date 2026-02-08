# 🛒 BeeConnect E-Commerce Frontend

<div align="center">

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.3.9-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.13.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**A modern, responsive e-commerce frontend built with React and Styled Components**

[🚀 Getting Started](#-getting-started) • [📁 Project Structure](#-project-structure) • [🎯 Features](#-features) • [🛣️ Routes](#️-routes)

</div>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/beeconnect-frontend.git

# Navigate to project directory
cd beeconnect-frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Configure your API base URL in .env
# VITE_API_BASE_URL=http://localhost:5000

# Start development server
npm run dev
```

### Environment Setup

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000
```

> ⚠️ **Note:** The `.env` file is gitignored. Make sure to create it locally.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🔥 Start development server |
| `npm run build` | 📦 Build for production |
| `npm run preview` | 👁️ Preview production build |
| `npm run lint` | 🔍 Run ESLint |

---

## 📁 Project Structure

```
📦 Frontend
├── 📄 index.html
├── 📄 package.json
├── 📄 vite.config.js
│
└── 📂 src/
    ├── 📄 main.jsx              # 🚀 Entry point
    ├── 📄 App.jsx               # 🎯 Main app with routes
    ├── 📄 App.css               # 🎨 Global styles
    ├── 📄 index.css             # 🎨 Base styles
    │
    ├── 📂 assets/               # 🖼️ Static assets
    │
    ├── 📂 components/ui/
    │   ├── 📄 Topbar.jsx              # 🔝 Fixed navigation bar
    │   ├── 📄 Footer.jsx              # 📝 Footer component
    │   │
    │   ├── 📂 Home/
    │   │   └── 📄 Home.jsx            # 🏠 Homepage (hero + products)
    │   │
    │   ├── 📂 Info-Product/
    │   │   └── 📄 InfoProduct.jsx     # 📦 Product detail view
    │   │
    │   ├── 📂 Shopping-Cart/
    │   │   ├── 📄 ShoppingCart.jsx    # 🛒 Cart container
    │   │   ├── 📄 CartItem.jsx        # 📦 Cart item
    │   │   └── 📄 OrderSummary.jsx    # 💰 Order summary
    │   │
    │   ├── 📂 Checkout/
    │   │   └── 📄 Checkout.jsx        # 💳 Checkout form
    │   │
    │   ├── 📂 Shipping-Details/
    │   │   └── 📄 ShippingDetails.jsx # 🚚 Shipping info
    │   │
    │   ├── 📂 Success-Paying/
    │   │   └── 📄 SuccessPaying.jsx   # ✅ Payment success
    │   │
    │   ├── 📂 Contact/
    │   │   └── 📄 Contact.jsx         # 📞 Contact us page
    │   │
    │   ├── 📂 Profile/
    │   │   └── 📄 Profile.jsx         # 👤 User profile
    │   │
    │   ├── 📂 Login/
    │   │   └── 📄 Login.jsx           # 🔐 Login form
    │   │
    │   ├── 📂 Register/
    │   │   └── 📄 Register.jsx        # 📝 Registration form
    │   │
    │   └── 📂 Unauthorized/
    │       └── 📄 Unauthorized.jsx    # ❌ 404 Not Found
    │
    ├── 📂 pages/
    │   ├── 📄 HomePage.jsx            # 🏠 Home page
    │   ├── 📄 InfoProductPage.jsx     # 📦 Product detail page
    │   ├── 📄 ShoppingCartPage.jsx    # 🛒 Cart page
    │   ├── 📄 CheckoutPage.jsx        # 💳 Checkout page
    │   ├── 📄 ShippingDetailPage.jsx  # 🚚 Shipping page
    │   ├── 📄 SuccessPayingPage.jsx   # ✅ Success page
    │   ├── 📄 ContactPage.jsx         # 📞 Contact us page
    │   ├── 📄 ProfilePage.jsx         # 👤 Profile page
    │   ├── 📄 LoginPage.jsx           # 🔐 Login page
    │   ├── 📄 RegisterPage.jsx        # 📝 Register page
    │   └── 📄 UnauthorizedPage.jsx    # ❌ 404 page
    │
    ├── 📂 api/
    │   └── 📄 axiosInstance.js        # 🔌 Axios config with JWT
    │
    └── 📂 hooks/
        ├── 📄 useAuth.js              # 🔐 Authentication hook
        ├── 📄 useProducts.js          # 📦 Products CRUD hook
        ├── 📄 useCategories.js        # 📂 Categories CRUD hook
        ├── 📄 useSellers.js           # 🏪 Sellers management hook
        ├── 📄 useAdmin.js             # 👑 Admin operations hook
        └── 📄 useCart.js              # 🛒 Cart custom hook
```

---

## 🎯 Features

### 🔐 Login Page
- 🎨 Modern gradient background
- 📧 Email & password input with icons
- 👁️ Password visibility toggle
- ✅ Remember me checkbox
- 🔗 Social login (Google, Facebook)
- 📝 Link to register page

### 📝 Register Page
- 📋 Full registration form (name, email, phone)
- 🔒 Password with strength indicator
- ✅ Terms & conditions checkbox
- 🔗 Social registration options
- 📝 Link to login page

### 🏠 Home Page
- 🎬 Hero section with iPhone 14 Pro showcase
- 📂 Category tabs (All, Fashion, Books, Electronics)
- 🔥 Popular products grid (clickable)

### 📦 Product Detail
- 🖼️ Large product image with wishlist button
- 📷 Thumbnail gallery
- ⭐ Rating & reviews count
- 📝 Description with "Read all"
- 🛒 "Ask Seller" & "Add to Cart" buttons

### 🛒 Shopping Cart
- ➕ Add/remove items with quantity controls
- 💰 Real-time total calculation
- ✅ Checkout button → redirects to /checkout

### 💳 Checkout
- 📍 Address selection with edit/delete
- 🚚 Delivery method options
- 💳 Payment methods (Bank, E-Wallet, Credit Card)
- ⬅️ Back & ➡️ Next buttons

### 🚚 Shipping Details
- 📋 Order summary review
- 📦 Product list with quantities
- ✅ Confirm Payment → redirects to success

### ✅ Success Page
- 🎉 Payment confirmation message
- 🔢 Order number & details
- 🏠 Navigation buttons

### 📞 Contact Us
- 🎨 Hero section with gradient background
- 📧 Contact info cards (Email, Phone, Address, Hours)
- 📝 Contact form with validation
- ❓ FAQ section with common questions

### 👤 Profile Page
- 🎨 User header with avatar & stats
- 📊 Stats grid (Orders, Wishlist, Addresses)
- 📋 Sidebar menu navigation
- ✏️ Editable personal info form

### ❌ 404 Page
- ⚠️ Error icon & 404 code
- 📝 "Page Not Found" message
- ⬅️ Go Back & 🏠 Back to Home buttons

---

## 🛣️ Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Login | 🔐 Default landing (login page) |
| `/login` | Login | 🔐 User login form |
| `/register` | Register | 📝 New user registration |
| `/home` | Home | 🏠 Main shopping page |
| `/product/:id` | Product Detail | 📦 View product info |
| `/cart` | Shopping Cart | 🛒 View cart items |
| `/checkout` | Checkout | 💳 Payment & delivery options |
| `/shipping-details` | Shipping Details | 🚚 Review order |
| `/success-paying` | Success | ✅ Payment confirmation |
| `/contact` | Contact | 📞 Contact us & FAQ |
| `/profile` | Profile | 👤 User profile & settings |
| `*` | Unauthorized | ❌ 404 Not Found (catch-all) |

### 🔄 User Flow

```
┌───────┐     ┌──────┐     ┌─────────┐     ┌──────┐     ┌──────────┐     ┌─────────────┐     ┌─────────┐
│ Login │────▶│ Home │────▶│ Product │────▶│ Cart │────▶│ Checkout │────▶│ Shipping    │────▶│ Success │
│  🔐   │     │  🏠  │     │   📦    │     │  🛒  │     │    💳    │     │     🚚      │     │   ✅    │
└───────┘     └──────┘     └─────────┘     └──────┘     └──────────┘     └─────────────┘     └─────────┘
    │              │
    │              ├──────▶ 👤 Profile (View/Edit user data)
    │              │
    │              └──────▶ 📞 Contact (Get help & FAQ)
    │
    └──────▶ 📝 Register (Create new account)
     
                          Invalid URL → 404 Unauthorized Page ❌
```

---

## 🧭 Navigation (Topbar)

| Link | Route | Active When |
|------|-------|-------------|
| **Brand** | `/` | - |
| **Home** | `/home` | `/` or `/home` |
| **Cart** | `/cart` | `/cart`, `/checkout`, `/shipping-details`, `/success-paying` |
| **Profile** | `/profile` | `/profile` |
| **Contact us** | `/contact` | `/contact` |

- 📌 **Fixed Position**: Topbar always stays at top when scrolling
- 🎯 **Active State**: Current page link is bold & black

---

## 🔌 API Integration

This frontend connects to a backend API for authentication, products, categories, sellers, and admin operations.

### Custom Hooks

| Hook | Purpose | Methods |
|------|---------|---------|
| `useAuth` | Authentication | `login()`, `register()`, `logout()`, `isAuthenticated()` |
| `useProducts` | Product management | `getProducts()`, `getProductById()`, `createProduct()`, `updateProduct()` |
| `useCategories` | Category CRUD | `getCategories()`, `createCategory()`, `updateCategory()`, `deleteCategory()` |
| `useSellers` | Seller management | `getSellers()`, `registerShop()`, `updateSeller()`, `deleteSeller()` |
| `useAdmin` | Admin operations | `getUsers()`, `updateUserStatus()`, `deleteUser()` |

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/login` | POST | User login |
| `/api/auth/register` | POST | User registration |
| `/api/products` | GET/POST | List/Create products |
| `/api/products/:id` | GET/PUT | Get/Update product |
| `/api/categories` | GET/POST | List/Create categories |
| `/api/sellers` | GET | List sellers |
| `/api/sellers/register-shop` | POST | Register new shop |
| `/api/admin/users` | GET | List all users (admin) |

### Authentication

JWT tokens are automatically handled:
- Token stored in `localStorage` after login
- Axios interceptor adds `Authorization: Bearer <token>` to all requests
- Automatic redirect to `/login` on 401 errors

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ **React 19** | UI Library |
| ⚡ **Vite 7** | Build Tool |
| 💅 **Styled Components** | CSS-in-JS |
| 🧭 **React Router 7** | Navigation |
| 🎨 **Lucide React** | Icons |
| 📡 **Axios** | HTTP Client |

---

## 📱 Responsive Design

| Device | Breakpoint |
|--------|------------|
| 📱 Mobile | < 768px |
| 📱 Tablet | 768px - 1024px |
| 💻 Desktop | > 1024px |

---

## 📄 License

MIT License

---

<div align="center">

**Made with ❤️ by BeeConnect Team**

</div>
