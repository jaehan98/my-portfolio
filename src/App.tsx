import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
// import { InteractiveDemos } from './components/demo';
import Education from './components/Education';
import Footer from './components/Footer';
import './global.css';
import { Experience } from './components';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Skills />
        {/* <InteractiveDemos /> */}
        <Experience></Experience>
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default App;
