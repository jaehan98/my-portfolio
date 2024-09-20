import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import '../global.css';

// Define the props types
interface HeaderProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, darkMode }) => {
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

        <button
          onClick={toggleDarkMode}
          className="ml-4 text-2xl focus:outline-none p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
        >
          {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
