// src/Main.js
import React from 'react';
import HeroSection from './HeroSection'; 
import SpecialsSection from './SpecialsSection';
import TestimonialsSections from './TestimonialsSection';
import AboutSection from './AboutSection';
// You will import HeroSection, SpecialsSection, TestimonialsSection, AboutSection here later

function Main() {
  return (
    <main>
      {/* This is where your major content sections will be added later */}
      {/* Example: <HeroSection /> */}
      {/* Example: <SpecialsSection /> */}
      {/* Example: <TestimonialsSection /> */}
      {/* Example: <AboutSection /> */}
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSections />
      <AboutSection />
      <p>Main content area - sections will go here.</p>
    </main>
  );
}

export default Main;