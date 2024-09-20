import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './components/landing/LandingPage';  // Import LandingPage
import AboutMe from './components/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
// import { InteractiveDemos } from './components/demo';
import Education from './components/Education';
import Footer from './components/Footer';
import './global.css';
import { Experience } from './components';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? true : false;
  });

  useEffect(() => {
    // Apply or remove the 'dark' class on the HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> {/* Pass toggle and mode as props */}
      <main>
        <LandingPage />
        <AboutMe />
        <Projects />
        <Skills />
        {/* <InteractiveDemos /> */}
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default App;
