// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Global CSS for the app
import './Header.css'; // Import Header specific CSS
import './Footer.css'; // Import Footer specific CSS
import './HeroSection.css'; // Import HeroSection specific CSS
import './SpecialsSection.css'; // Import SpecialsSection specific CSS
import './TestimonialsSection.css'; // Import TestimonialsSection specific CSS
import './AboutSection.css'; // Import AboutSection specific CSS
import './OrderOnline.css'; // Import OrderOnline specific CSS
import './Reservations.css'; // Import Reservations specific CSS
import './Menu.css'; // Import Menu specific CSS
import './About.css'; // Import About page specific CSS (distinct from AboutSection)


// Structural Components
import Header from './Header';
import Footer from './Footer';

// Page Components
import Home from './Home'; // This is your "Homepage" component
import About from './About'; // This is the full About Us page
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';

function App() {
  return (
    <BrowserRouter>
      {/* The root div for the entire application, styled by App.css */}
      <div id="root">
        <Header /> {/* Header always visible */}
        {/* Main content area, which will grow to push the footer down */}
        <main className="app-main-content">
          <Routes> {/* Routes define which component renders based on the URL */}
            <Route path="/" element={<Home />} /> {/* Your homepage */}
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order-online" element={<OrderOnline />} />
          </Routes>
        </main>
        <Footer /> {/* Footer always visible */}
      </div>
    </BrowserRouter>
  );
}

export default App;
