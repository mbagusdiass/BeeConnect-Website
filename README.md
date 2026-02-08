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

## ✨ Preview

| Shopping Cart | Checkout | Success |
|:-------------:|:--------:|:-------:|
| 🛒 | 💳 | ✅ |

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
├── 📄 eslint.config.js
│
└── 📂 src/
    ├── 📄 main.jsx              # 🚀 Entry point
    ├── 📄 App.jsx               # 🎯 Main app with routes
    ├── 📄 App.css               # 🎨 Global styles
    ├── 📄 index.css             # 🎨 Base styles
    │
    ├── 📂 assets/               # 🖼️ Static assets
    │
    ├── 📂 components/
    │   └── 📂 ui/
    │       ├── 📄 Topbar.jsx           # 🔝 Navigation bar (sticky)
    │       ├── 📄 Footer.jsx           # 📝 Footer component
    │       │
    │       ├── 📂 Shopping-Cart/
    │       │   ├── 📄 ShoppingCart.jsx # 🛒 Cart container
    │       │   ├── 📄 CartItem.jsx     # 📦 Individual cart item
    │       │   └── 📄 OrderSummary.jsx # 💰 Order summary card
    │       │
    │       ├── 📂 Checkout/
    │       │   └── 📄 Checkout.jsx     # 💳 Checkout form
    │       │
    │       ├── 📂 Shipping-Details/
    │       │   └── 📄 ShippingDetails.jsx # 🚚 Shipping info
    │       │
    │       └── 📂 Success-Paying/
    │           └── 📄 SuccessPaying.jsx   # ✅ Payment success
    │
    ├── 📂 pages/
    │   ├── 📄 ShoppingCartPage.jsx    # 🛒 Cart page
    │   ├── 📄 CheckoutPage.jsx        # 💳 Checkout page
    │   ├── 📄 ShippingDetailPage.jsx  # 🚚 Shipping page
    │   └── 📄 SuccessPayingPage.jsx   # ✅ Success page
    │
    └── 📂 hooks/
        └── 📄 useCart.js              # 🎣 Cart custom hook
```

---

## 🎯 Features

### 🛒 Shopping Cart
- ➕ Add/remove items
- 🔢 Quantity adjustment
- 💰 Real-time total calculation
- 🖼️ Product image preview

### 💳 Checkout
- 📍 Address selection
- 🚚 Delivery method options
- 💳 Multiple payment methods (Bank Transfer, E-Wallet, Credit Card)
- ✏️ Edit/Delete addresses

### 🚚 Shipping Details
- 📋 Order summary review
- 📦 Product list with quantities
- 💵 Price breakdown
- ✅ Confirm payment

### ✅ Success Page
- 🎉 Payment confirmation
- 🔢 Order number display
- 🏠 Navigation to home

---

## 🛣️ Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Shopping Cart | 🛒 Home/Cart page |
| `/cart` | Shopping Cart | 🛒 Alternative cart URL |
| `/checkout` | Checkout | 💳 Payment & delivery options |
| `/shipping-details` | Shipping Details | 🚚 Review order before payment |
| `/success-paying` | Success | ✅ Payment confirmation |

### 🔄 User Flow

```
┌─────────────────┐     ┌─────────────┐     ┌───────────────────┐     ┌─────────────────┐
│  Shopping Cart  │────▶│   Checkout  │────▶│  Shipping Details │────▶│  Success Page   │
│       🛒        │     │      💳     │     │        🚚         │     │       ✅        │
└─────────────────┘     └─────────────┘     └───────────────────┘     └─────────────────┘
        │                      │
        │◀─────── Back ────────│
```

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="150">

**⚛️ React 19**

UI Library

</td>
<td align="center" width="150">

**⚡ Vite 7**

Build Tool

</td>
<td align="center" width="150">

**💅 Styled Components**

CSS-in-JS

</td>
<td align="center" width="150">

**🧭 React Router 7**

Navigation

</td>
</tr>
<tr>
<td align="center" width="150">

**🎨 Lucide React**

Icons

</td>
<td align="center" width="150">

**📡 Axios**

HTTP Client

</td>
<td align="center" width="150">

**📝 ESLint**

Linting

</td>
<td align="center" width="150">

**🔧 SWC**

Fast Compiler

</td>
</tr>
</table>

---

## 🎨 UI Components

### Topbar (Sticky Navigation)
```jsx
<TopBar />
// Features:
// - Brand logo
// - Search bar
// - Navigation links (Home, Cart, Profile, Contact)
// - Sticky positioning (always visible on scroll)
```

### Order Summary
```jsx
<OrderSummary total="Rp.60.000,00" onCheckout={handleCheckout} />
```

### Cart Item
```jsx
<CartItem item={item} />
// Displays: image, name, variant, price, quantity controls
```

---

## 📱 Responsive Design

The application is fully responsive and works on:

| Device | Width |
|--------|-------|
| 📱 Mobile | < 768px |
| 📱 Tablet | 768px - 1024px |
| 💻 Desktop | > 1024px |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

**Made with ❤️ by BeeConnect Team**

⭐ Star this repo if you find it helpful!

</div>
