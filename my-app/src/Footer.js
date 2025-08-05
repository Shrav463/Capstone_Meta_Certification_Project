import React from 'react'; // Assuming the same logo for the footer
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-column logo-column">
        <img src="/Logo.svg" alt="Little Lemon Footer Logo" className="footer-logo" />
      </div>

      <div className="footer-column nav-column">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
        </ul>
      </div>

      <div className="footer-column contact-column">
        <h3>Contact</h3>
        <p>123 Lemon Street</p>
        <p>Chicago, IL 60601</p>
        <p>+1 (555) 123-4567</p>
        <p>info@littlelemon.com</p>
      </div>

      <div className="footer-column social-column">
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://facebook.com/littlelemon">Facebook</a></li>
          <li><a href="https://instagram.com/littlelemon">Instagram</a></li>
          <li><a href="https://twitter.com/littlelemon">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
