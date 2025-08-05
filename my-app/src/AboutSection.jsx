// src/AboutSection.js
import React from 'react';
import './AboutSection.css'; // Don't forget to import the CSS


function AboutSection() {
  return (
    <section className="about-section-bottom">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a cherished family-owned Mediterranean restaurant,
          rooted in traditional recipes and served with a contemporary twist.
          We pride ourselves on using the freshest local ingredients to craft
          dishes that delight the senses and transport you to the sun-drenched
          coasts of the Mediterranean. Our cozy atmosphere and friendly staff
          ensure a memorable dining experience for every guest.
        </p>
        <p>
          Founded by brothers Adrian and Mario, Little Lemon embodies their
          passion for authentic Mediterranean cuisine and warm hospitality.
          They brought their culinary heritage from their village in Greece,
          infusing every dish with the love and traditions passed down
          through generations.
        </p>
      </div>
      <div className="about-image-container">
        {/* Corrected image path: Assuming Mario and Adrian A.png is directly in your public folder */}
        <img src='Mario and Adrian A.png' alt="Adrian and Mario, Little Lemon Owners" className="about-image" />
      </div>
    </section>
  );
}

export default AboutSection;