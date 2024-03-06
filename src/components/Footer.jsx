import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Footer component
const Footer = () => {
  return (
    // Footer section with a dark background and white text
    <footer className="bg-black text-white py-6">
      {/* Container for centering content and providing spacing */}
      <div className="container mx-auto flex justify-between items-center">
        {/* MIT License text */}
        <p className="text-sm">&copy; 2024 Insight_Wallet . All rights reserved. MIT License.</p>
        
        {/* Social icons */}
        <div className="flex space-x-4">
          {/* GitHub icon with a link to GitHub */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white border border-blue-500 rounded-full p-2 hover:border-blue-400 transition duration-300">
            <FaGithub />
          </a>
          {/* Twitter icon with a link to Twitter */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white border border-blue-500 rounded-full p-2 hover:border-blue-400 transition duration-300">
            <FaTwitter />
          </a>
          {/* LinkedIn icon with a link to LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white border border-blue-500 rounded-full p-2 hover:border-blue-400 transition duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
