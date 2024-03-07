import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

/**
 * Footer component containing copyright information and social icons.
 * @returns {JSX.Element} Footer UI
 */
const Footer = () => {
  return (
    <footer className="bg-customPurple text-white flex items-center justify-center py-3 w-full">
      {/* MIT License text */}
      <p className="text-sm">&copy; 2024 Insight Wallet inc. All rights reserved.</p>

      {/* Social icons */}
      <div className="flex space-x-4 mx-5">
        {/* GitHub icon with a link */}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:border-blue-400 transition duration-300">
          <FaGithub />
        </a>
        {/* Twitter icon with a link */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:border-blue-400 transition duration-300">
          <FaTwitter />
        </a>
        {/* LinkedIn icon with a link */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:border-blue-400 transition duration-300">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
