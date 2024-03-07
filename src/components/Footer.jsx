import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/footer.css'; // Import the CSS file

// Footer component
const Footer = () => {
  return (
    <footer className="footer py-6">
      <div className="container footerb mx-auto flex justify-between items-center">
        {/* MIT License text */}
        <p className="text-sm">&copy; 2024 Insight Wallet inc. All rights reserved.</p>
        
        {/* Social icons */}
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" social p-2 hover:border-blue-400 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social  p-2 hover:border-blue-400 transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" social p-2 hover:border-blue-400 transition duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
