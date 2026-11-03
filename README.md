# Paradise Nursery Shopping Application

A dynamic, responsive e-commerce web application for an online plant shop called **Paradise Nursery**, built with **React**, **Redux Toolkit**, and **Vite** as part of the Coursera / IBM *Developing Front-End Apps with React* course final project.

---

## 🌿 Project Overview

Paradise Nursery is an online storefront offering a diverse collection of houseplants tailored for modern living spaces. The application provides an engaging, interactive shopping experience where users can:
- Explore an inviting landing page detailing the nursery's mission and background.
- Browse through curated categories of houseplants (Air Purifying Plants, Aromatic Fragrant Plants, and Medicinal Plants).
- View high-resolution plant imagery, plant names, descriptions, and prices.
- Add plants to a shopping cart with real-time feedback and state persistence.
- Manage shopping cart quantities (increment, decrement, and delete items).
- View a dynamically updated cart item counter in the global navigation bar.
- Review subtotal per item and overall cart total calculation.
- Proceed with checkout (mocked placeholder confirmation).

---

## 🚀 Key Features & Task Implementations

1. **Task 1: README.md** - Detailed project documentation and specifications.
2. **Task 2: AboutUs.jsx** - Informative company profile, heritage, and values of Paradise Nursery.
3. **Task 3: App.css** - Full-bleed background styling and aesthetic layout for the landing page.
4. **Task 4: App.jsx** - Landing page container with company branding, tagline, and an interactive "Get Started" button that transitions seamlessly to the plant catalog.
5. **Task 5: CartSlice.jsx** - Centralized Redux state management for the shopping cart using Redux Toolkit (`addItem`, `removeItem`, `updateQuantity`).
6. **Task 6: ProductList.jsx** - Categorized plant catalog featuring 18 unique houseplants across 3 categories, persistent navigation bar, live cart count badge, and reactive "Add to Cart" buttons.
7. **Task 7: CartItem.jsx** - Full shopping cart management interface featuring dynamic total amount calculation, per-item cost calculation, quantity modifiers (`+` / `-`), item removal, "Continue Shopping", and "Checkout" actions.

---

## 🛠️ Technologies Used

- **React 18** (Functional Components, Hooks: `useState`, `useEffect`)
- **Redux Toolkit (`@reduxjs/toolkit`)** & **React-Redux** (Global State Management)
- **Vite** (Next-generation front-end tooling and build system)
- **CSS3** (Responsive Flexbox and Grid layouts, CSS transitions)

---

## 📦 Getting Started

### Prerequisites
- Node.js (v16.0 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd <YOUR_REPO_DIRECTORY>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📂 Project Directory Structure

```text
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── store.js
    ├── index.css
    ├── App.jsx
    ├── App.css
    ├── AboutUs.jsx
    ├── AboutUs.css
    ├── CartSlice.jsx
    ├── ProductList.jsx
    ├── ProductList.css
    ├── CartItem.jsx
    └── CartItem.css
```

---

## 📄 License
This project was developed for educational purposes as part of the IBM Full Stack Developer Professional Certificate program.
