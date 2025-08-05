// src/Home.js
import React from 'react';
import HeroSection from './HeroSection';
import SpecialsSection from './SpecialsSection';
import TestimonialsSection from './TestimonialsSection'; // Corrected typo here, assuming TestimonialsSection is the correct name
import AboutSection from './AboutSection';

function Home() {
  return (
    <>
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  );
}

export default Home;