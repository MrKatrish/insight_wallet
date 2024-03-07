import React from "react";
import { useNavigate } from 'react-router-dom';

/**
 * Navbar component for navigation within the application.
 * @returns {JSX.Element} Navbar UI
 */
export default function Navbar() {
  // Hook for navigation
  const navigate = useNavigate();

  /**
   * Handle click event on the navbar logo, navigates to the home page.
   */
  const handleClick = () => {
    navigate('/');
  }

  return (
    <>
      {/* Navigation bar */}
      <nav className="bg-customPurple p-4 w-full top-0">
        <div className="container mx-auto flex items-center justify-between">
          {/* Navbar logo */}
          <div className="text-white font-bold text-lg cursor-pointer" onClick={handleClick}>
            Insight Wallet
          </div>
        </div>
      </nav>
    </>
  );
}
