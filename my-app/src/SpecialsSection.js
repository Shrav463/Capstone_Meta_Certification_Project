import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './SpecialsSection.css';

// Assuming you have images for your specials in the public folder

function SpecialsSection() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        {/* Use NavLink to link the button to the menu page */}
        <NavLink to="/menu" className="online-menu-button">Online Menu</NavLink>
      </div>

      <div className="specials-grid">
        {/* First Special */}
        <article className="special-item">
          {/* Corrected image path to reference the public folder */}
          <img src="/greek salad.jpg" alt="Greek Salad" className="special-item-image" />
          <div className="special-item-content">
            <div className="special-item-title-price">
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives
              and our Chicago style feta cheese, garnished with
              crunchy garlic and rosemary croutons.
            </p>
            <button className="order-delivery-button">Order a delivery</button>
          </div>
        </article>

        {/* Second Special */}
        <article className="special-item">
          {/* Corrected image path to reference the public folder */}
          <img src="/bruchetta.svg" alt="Bruchetta" className="special-item-image" />
          <div className="special-item-content">
            <div className="special-item-title-price">
              <h3>Bruchetta</h3>
              <span className="price">$5.99</span>
            </div>
            <p>
              Our Bruchetta is made from grilled bread that has been
              smeared with garlic and seasoned with salt and olive
              oil.
            </p>
            <button className="order-delivery-button">Order a delivery</button>
          </div>
        </article>

        {/* Third Special */}
        <article className="special-item">
          {/* Corrected image path to reference the public folder */}
          <img src="/lemon dessert.png" alt="Lemon Dessert" className="special-item-image" />
          <div className="special-item-content">
            <div className="special-item-title-price">
              <h3>Lemon Dessert</h3>
              <span className="price">$5.00</span>
            </div>
            <p>
              This comes straight from grandma's recipe book, every
              last ingredient has been sourced and is as authentic
              as can be imagined.
            </p>
            <button className="order-delivery-button">Order a delivery</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SpecialsSection;