// src/About.js
import React from 'react';
import './About.css'; // Import a CSS file for About page specific styles

function About() {
  return (
    <main className="about-page">
      <div className="about-page-container">
        <h1>About Little Lemon</h1>
        <p>Discover the story behind our passion for Mediterranean cuisine.</p>

        <section className="our-story">
          <h2>Our Story</h2>
          <div className="story-content">
            <p>Founded by chefs Mario and Adrian, Little Lemon was born from a shared love for authentic Mediterranean flavors and a desire to bring a piece of their heritage to Chicago. With decades of culinary experience between them, they meticulously crafted a menu that honors traditional recipes while infusing them with a modern twist.</p>
            <p>Our journey began with a simple idea: to create a welcoming space where guests could enjoy fresh, high-quality ingredients in a vibrant atmosphere. Every dish tells a story, from the sun-drenched olives of Greece to the aromatic spices of Morocco, ensuring an unforgettable culinary adventure with every bite.</p>
          </div>
          <div className="story-images">
            {/* Make sure these images are in your public/images/ folder */}
            <img src="Little_Lemon_Pic.png" alt="Little Lemon Kitchen" className="story-image" />
            <img src="Fresh_ingredients.jpg" alt="Fresh Ingredients" className="story-image" />
          </div>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>At Little Lemon, our mission is to provide an exceptional dining experience through culinary excellence, warm hospitality, and a commitment to fresh, locally-sourced ingredients. We believe in creating a community around food, where every meal is a celebration.</p>
        </section>

        <section className="meet-the-chefs">
          <h2>Meet the Chefs</h2>
          <div className="chefs-grid">
            <div className="chef-card">
              {/* Make sure these images are in your public/images/ folder */}
              <img src="chef1-free-img.png" alt="Chef Mario" className="chef-avatar" />
              <h3>Mario</h3>
              <p>Head Chef & Co-Founder</p>
              <p>With a background rooted in traditional Italian and Greek cooking, Mario brings a wealth of knowledge and a creative flair to every dish. His passion for fresh pasta and vibrant salads shines through in our menu.</p>
            </div>
            <div className="chef-card">
              {/* Make sure these images are in your public/images/ folder */}
              <img src="chef2-free-img.png" alt="Chef Adrian" className="chef-avatar" />
              <h3>Adrian</h3>
              <p>Executive Chef & Co-Founder</p>
              <p>Adrian's expertise lies in grilling and seasoning, drawing inspiration from his family's Lebanese heritage. He's responsible for our perfectly cooked meats and aromatic rice dishes.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;