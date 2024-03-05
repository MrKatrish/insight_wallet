import React from 'react';
import { Link } from 'react-router-dom';
import UserBadge from '../components/UserBadge';
import profileImage from '../Assets/jonas-kakaroto.jpg'; // Import the profile picture


const Sidebar = () => {
  const user = {
    username: 'Jonas Kakaroto',
    profilePicture: profileImage,
  };
  return (
    <div className="sidebar bg-black text-white">
      <h2 className="text-center py-4">Navigation</h2>
      <ul>
        <li>
          <Link to="/overview" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Overview
          </Link>
        </li>
        <li>
          <Link to="/transactions" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Transactions
          </Link>
        </li>
        <li>
          <Link to="/reports" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Reports
          </Link>
        </li>
        <li>
          <Link to="/budgets" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Budgets
          </Link>
        </li>
        <li>
          <Link to="/goals" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Goals
          </Link>
        </li>
      </ul>
      <UserBadge username={user.username} profilePicture={user.profilePicture} />
    </div>
  );
};

export default Sidebar;

