import React from 'react';
import HeroSection from './HeroSection';

const LandingPage = () => {
  return (
    <section 
      id="landing" 
      className="h-screen flex flex-col items-center justify-center"
    >
      <HeroSection />
    </section>
  );
};

export default LandingPage;
