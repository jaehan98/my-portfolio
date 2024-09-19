import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="container mx-auto py-10 px-4 bg-gray-800 text-white">
      <h2 className="custom-heading text-white">Contact</h2>
      <p className="text-lg">Feel free to reach out via email or follow me on social media.</p>
      <ul className="mt-4">
        <li>Email: <a href="mailto:jaehan98@gmail.com" className="text-blue-400 hover:underline">jaehan98@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/jaehan98" className="text-blue-400 hover:underline">github.com/jaehan98</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/jaehan" className="text-blue-400 hover:underline">linkedin.com/in/jaehan</a></li>
      </ul>
      <p className="mt-4">&copy; 2024 Jaehan's Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
