import React from 'react';
import '../global.css';  // Import the global CSS with @apply

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jaehan's Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#demos" className="nav-link">Demos</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#footer" className="nav-link">Footer</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
