import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="container mx-auto py-6 px-4 bg-gray-800 text-white">
      {/* Adjusted grid layout for centering */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left items-center">
        
        {/* Logo and Short Description (Centered) */}
        <div className="flex flex-col items-center md:items-center">
          <a href="#landing" className="text-3xl font-extrabold italic text-white bg-navy rounded-full w-12 h-12 flex items-center justify-center mb-2 transform transition-transform duration-300 hover:rotate-12 hover:scale-105">
            JL
          </a>
          <p className="text-lg">Software Engineer</p>
        </div>

        {/* Quick Links (Centered) */}
        <div className="flex justify-center">
          <ul className="flex space-x-6">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#demos" className="nav-link">Demos</a></li>
            <li><a href="/resume.pdf" target="_blank" className="nav-link">Resume</a></li>
          </ul>
        </div>

        {/* Contact Information (Centered) */}
        <div className="flex flex-col items-center md:items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="mailto:jaehanloh@gmail.com" className="text-blue-400 hover:text-white transition">
                <FiMail className="text-3xl" />
              </a>
            </li>
            <li>
              <a href="https://github.com/jaehan98" className="text-blue-400 hover:text-white transition">
                <FaGithub className="text-3xl" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jaehan-loh-093443151/" className="text-blue-400 hover:text-white transition">
                <FaLinkedin className="text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Text with Reduced Gap */}
      <p className="mt-4 text-center">&copy; 2024 Jaehan's Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
