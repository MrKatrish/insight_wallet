import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* MIT License text */}
        <p className="text-sm">&copy; 2024 Insight_Wallet . All rights reserved. MIT License.</p>
        
        {/* Social icons */}
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white border border-blue-500 rounded-full p-2 hover:border-blue-400 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white border border-blue-500 rounded-full p-2 hover:border-blue-400 transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white border border-blue-500 rounded-full p-2 hover:border-blue-400 transition duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
