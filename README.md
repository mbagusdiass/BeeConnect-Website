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

# Start development server
npm run dev
```

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
    │   └── 📄 UnauthorizedPage.jsx    # ❌ 404 page
    │
    └── 📂 hooks/
        └── 📄 useCart.js              # 🎣 Cart custom hook
```

---

## 🎯 Features

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
| `/` | Home | 🏠 Landing page |
| `/home` | Home | 🏠 Alternative home URL |
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
┌──────┐     ┌─────────┐     ┌──────┐     ┌──────────┐     ┌─────────────┐     ┌─────────┐
│ Home │────▶│ Product │────▶│ Cart │────▶│ Checkout │────▶│ Shipping    │────▶│ Success │
│  🏠  │     │   📦    │     │  🛒  │     │    💳    │     │     🚚      │     │   ✅    │
└──────┘     └─────────┘     └──────┘     └──────────┘     └─────────────┘     └─────────┘
     │
     ├──────▶ 👤 Profile (View/Edit user data)
     │
     └──────▶ 📞 Contact (Get help & FAQ)
     
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
