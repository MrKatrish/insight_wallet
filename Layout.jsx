import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content and Footer */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main content */}
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            {/* Content */}
            {children}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
