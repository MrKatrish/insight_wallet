import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from "../Assets/jonas-kakaroto.jpg"; // Import the profile picture


const Sidebar = () => {

  const user = {
    username: "John",
    profilePicture: profileImage,
  };

  return (
    <div className="sidebar text-white h-full w-80 fixed top-0 left-0 bg-customPurple">
      {/* User Profile Section */}
      <div className="p-4">
        <img
          src={user.profilePicture}
          alt={user.username}
          className="w-40 h-40 rounded-full mx-auto py-3 px-1"
        />
        <p className="mb-8">Welcome back {user.username}!</p>
        
      </div>
      {/* Navigation Links */}
      <ul>
        <li>
          <Link to="/overview" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
          <i className="fas fa-home mr-2"></i>Dashboard
          </Link>
        </li>
        <li>
          <Link to="/reports" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Analytics
          </Link>
        </li>
        <li>
          <Link to="/transactions" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Transactions
          </Link>
        </li>
        <li>
          <Link to="/goals" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Account
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

