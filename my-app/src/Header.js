import React from 'react';
import Nav from './Nav'; // Import the Nav component
import './Header.css';

function Header() {
  return (
    <header>
      {/* Corrected image path to start from the root of the public directory */}
      <img src='Logo.svg' alt="Little Lemon Logo" className="header-logo" />
      <Nav /> {/* The navigation component */}
    </header>
  );
}

export default Header;
