import React from 'react';
import HeroSection from './HeroSection';

const LandingPage = () => {
  const particles = Array.from({ length: 130 });

  return (
    <section 
      id="landing" 
      className="h-screen bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-300"
    >
      {particles.map((_, index) => (
        <div 
          key={index}
          className={`particle ${index % 2 === 0 ? 'particle-light' : 'particle-dark'}`}
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${8 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
      <HeroSection />
    </section>
  );
};

export default LandingPage;
