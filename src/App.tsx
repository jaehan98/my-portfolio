import React from 'react';
import { InteractiveDemos } from './components/demo';  // Updated import for Interactive Demos
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import { Skills } from './components/skills';
import Experience from './components/Experience';
import Projects from './components/projects/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="py-10">
        <AboutMe />
        <Skills />
        <Experience />
        <InteractiveDemos />  {/* Using modularized Interactive Demos */}
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
