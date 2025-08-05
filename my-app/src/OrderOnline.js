// src/OrderOnline.js
import React from 'react';
import './OrderOnline.css'; // Import a CSS file for Order Online page specific styles
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation

function OrderOnline() {
  const categories = [
    { name: 'Appetizers', description: 'Start your meal right with our delicious starters.' },
    { name: 'Main Courses', description: 'Hearty and flavorful main dishes.' },
    { name: 'Desserts', description: 'Sweet endings to your dining experience.' },
    { name: 'Drinks', description: 'Refreshing beverages to complement your food.' },
  ];

  return (
    <main className="order-online-page">
      <div className="order-online-container">
        <h1>Order Online Page</h1>
        <p>Customers can order their favorite Little Lemon dishes for delivery or pickup here.</p>

        <section className="menu-categories">
          <h2>Our Menu Categories</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <NavLink to={`/menu/${category.name.toLowerCase().replace(/\s/g, '-')}`} key={index} className="category-card-link">
                <div className="category-card">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </section>

        <section className="order-cta">
          <h2>Ready to Order?</h2>
          <p>Browse our full menu and place your order for a delightful culinary journey!</p>
          {/* This button will still go to the general menu page */}
          <NavLink to="/menu" className="order-button">View Full Menu & Order</NavLink>
        </section>
      </div>
    </main>
  );
}

export default OrderOnline;
