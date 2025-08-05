// src/HeroSection.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        {/* Use NavLink to link the button to the reservations page */}
        <NavLink to="/reservations" className="reserve-button">Reserve a Table</NavLink>
      </div>
      <div className="hero-image-container">
        <img src='/restauranfood.jpg' alt="Delicious Mediterranean food" className="hero-image" />
      </div>
    </section>
  );
}

export default HeroSection;