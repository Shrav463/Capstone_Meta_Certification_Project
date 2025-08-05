// src/TestimonialsSection.js
import React from 'react';
import './TestimonialsSection.css'; // Don't forget to import the CSS

// CORRECTED: Remove image imports if they are in the public folder.
// You DO NOT import images from the public folder like this:
// import avatar1 from './assets/avatar1.jpg'; // If image is in public, remove this!

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">

        {/* Testimonial Card 1 */}
        <article className="testimonial-card">
          <p className="testimonial-rating">⭐️⭐️⭐️⭐️⭐️</p>
          <div className="customer-info">
            {/* CORRECTED: Reference image from public folder using %PUBLIC_URL% or direct '/' */}
            <img src="customers_image.png" alt="Customer 1 Avatar" className="customer-avatar" />
            <p className="customer-name">John D.</p>
          </div>
          <p className="testimonial-text">"Little Lemon offers an incredible dining experience! The food is authentic and delicious, and the staff are incredibly welcoming."</p>
        </article>

        {/* Testimonial Card 2 */}
        <article className="testimonial-card">
          <p className="testimonial-rating">⭐️⭐️⭐️⭐️⭐️</p>
          <div className="customer-info">
            {/* CORRECTED: Reference image from public folder */}
            <img src="customers_image.png" alt="Customer 2 Avatar" className="customer-avatar" />
            <p className="customer-name">Maria S.</p>
          </div>
          <p className="testimonial-text">"The best Mediterranean food in Chicago! Every dish is a masterpiece, and the atmosphere is just perfect for a family dinner."</p>
        </article>

        {/* Testimonial Card 3 */}
        <article className="testimonial-card">
          <p className="testimonial-rating">⭐️⭐️⭐️⭐️⭐️</p>
          <div className="customer-info">
            {/* CORRECTED: Reference image from public folder */}
            <img src="customers_image.png" alt="Customer 3 Avatar" className="customer-avatar" />
            <p className="customer-name">Chris P.</p>
          </div>
          <p className="testimonial-text">"Consistently amazing! From the fresh ingredients to the friendly service, Little Lemon never disappoints. Highly recommend the Lemon Dessert!"</p>
        </article>

      </div>
    </section>
  );
}

export default TestimonialsSection;