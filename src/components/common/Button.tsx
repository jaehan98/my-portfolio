import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
  className?: string;  // Optional class for additional styling
}

const Button: React.FC<ButtonProps> = ({ text, href, className }) => {
  return (
    <a href={href} className={`bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-400 transition-colors ${className}`}>
      {text}
    </a>
  );
};

export default Button;
