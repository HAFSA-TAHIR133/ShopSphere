# ShopSphere– Context API Multi-State Management

## Overview

A modern and responsive e-commerce frontend application built with React. The project demonstrates practical usage of React Router, Context API, component-based architecture, protected routes, and cart state management using static product data.

This project focuses on frontend development best practices, clean code organization, reusable components, and responsive user experience.

---

## Features

### Authentication

* Responsive login page
* Static credential validation
* Route protection using Protected Routes
* Navigation control based on login status

### Home Page

* Responsive navigation bar
* Product showcase section
* Product detail view
* User dropdown menu
* Cart dropdown menu
* Modern UI design

### Shopping Cart

* Add products to cart
* Increase product quantity
* Decrease product quantity
* Remove products when quantity reaches zero
* Dynamic cart item count
* Automatic total price calculation

### State Management

* React Context API
* Selected Product State
* Global cart state
* Global authentication state
* Shared state across components

### UI/UX

* Responsive design 
* Reusable component architecture
* Clean folder structure
* Modern styling and layout

---

## Technologies Used

* React.js
* React Router DOM
* Context API
* React Icons
* CSS3
* JavaScript (ES6+)

---

## Project Structure

src/
│
├── components/
│ ├── Navbar
│ ├── ProductGrid
│ ├── ProductCard
│ ├── CartDropDown
│ ├── UserDropDown
│ └── ProtectedRoute
│ ├── Footer
│ ├── Hero
│
├── pages/
│ ├── Login
│ ├── Home
│ └── Cart
│
├── context/
│ ├── LoginContext
│ ├── CartContext
│ ├── selectedProductContext
│ └── ComposeContext
│
├── data/
│ └── products.js
│
├── css/
│ └── Component Styles
│
└── App.jsx

---

## Key Concepts Implemented

* React Functional Components
* React Hooks
* useState
* useEffect
* useContext
* Context API
* Protected Routes
* Component Reusability
* Conditional Rendering
* Dynamic State Updates
* Responsive Design

## ScreenShots

- Login Page
- Login with Predefine Email (hn1234@gmail.com) & Passoword(123)


<img width="1920" height="827" alt="image" src="https://github.com/user-attachments/assets/408a1390-d54c-4ec3-b888-16c154bf2263" />


- Home Page

<img width="1920" height="2502" alt="image" src="https://github.com/user-attachments/assets/f1217e6d-8fff-4904-95fe-9b05d0b251cc" />

- View Details Button (Show Each Product separately)

<img width="1920" height="1378" alt="image" src="https://github.com/user-attachments/assets/df6ce85d-d4aa-49d8-81a3-cef5405cc3d8" />


- Add To Cart Functionality


<img width="944" height="439" alt="image" src="https://github.com/user-attachments/assets/d143f98f-6662-4156-9ab0-6cdb97fa2c74" />

- View Cart (Navigation Item )

<img width="399" height="181" alt="image" src="https://github.com/user-attachments/assets/b246b26f-0b80-45ba-ac75-508424d05e4b" />


- View User (Navigation Item with features profile & Logout)
    Currently Logout works..

 
 <img width="1920" height="827" alt="image" src="https://github.com/user-attachments/assets/ea4e5cf9-8e02-4b69-807c-c629c7d3455f" />

- Cart Page
    show the Products summary which are Added to cart


<img width="1920" height="1396" alt="image" src="https://github.com/user-attachments/assets/bb3fb99e-368b-4da9-9806-654e31c32582" />


## Learning Outcomes

This project helped strengthen understanding of:

* Global state management using Context API
* Route protection and navigation control
* Reusable component architecture
* Shopping cart implementation logic
* Quantity-based product management
* React application structuring
* Modern frontend development practices

---

## Future Improvements

* Backend Integration
* User Authentication API
* Product Search
* Product Filtering
* Wishlist Functionality
* Order Management
* Local Storage Persistence
* Payment Integration

---
# Author
  Hafsa Tahir
- Developed as a React frontend exercise focused on production-quality architecture and user experience.
