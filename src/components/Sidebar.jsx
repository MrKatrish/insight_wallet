import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from "../Assets/jonas-kakaroto.jpg"; // Import the profile picture
import MyCalendar from './ExternalCalendar';


const Sidebar = () => {

  const user = {
    username: "John Doe",
    profilePicture: profileImage,
  };

  return (
    <div className="sidebar text-white h-full w-90 fixed top-0 left-0 bg-customPurple grid grid-cols-1 grid-rows-3 gap-4items-center justify-center p-4">
      {/* User Profile Section */}
      <div  className='bg-slate-100 bg-opacity-50 rounded-xl w-64 top-0 text-center outline-6 p-10 m-8 col-span-1'>
          <img
            src={user.profilePicture}
            alt={user.username}
            className="w-40 h-40 rounded-full mx-auto mb-4"
          />
          <p className="mb-8">{user.username}</p>
          <h2>Welcome to your dashboard!</h2>
          <p className="mb-8 p-4">Gain comprehensive insights into your finances, review your latest transactions, and track your progress toward achieving your savings goals. </p>
      </div>
      
      {/* Navigation Links */}
      <ul className="col-span-1">
        <h3>Need to make changes?</h3>
        <li>
          <Link to="/income" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
          <i className="fas fa-home mr-2"></i>Your Income
          </Link>
        </li>
        <li>
          <Link to="/budget" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Your Budget
          </Link>
        </li>
        <li>
          <Link to="/savingsgoals" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Savings Goals
          </Link>
        </li>
      </ul>
      <MyCalendar className="col-span-1" />
    </div>
  );
};

export default Sidebar;

