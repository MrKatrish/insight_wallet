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
    <div className=" text-white h-full fixed top-0 left-0 bg-customPurple grid grid-cols-1 grid-rows-3 items-center justify-center">
      {/* User Profile Section */}
      <div className='bg-slate-300 bg-opacity-30 rounded-xl w-72 top-0 text-center p-10 m-8 col-span-1 mt-40'>
          <img
            src={user.profilePicture}
            className="w-40 h-40 rounded-full mx-auto mb-4"
          />
          <h2 className="mb-2 font-semibold">{user.username}</h2>
          <h3 className="text-lg font-bold">Welcome to your dashboard!</h3>
      </div>
      
      {/* Navigation Links */}
      <ul className="col-span-1 text-center mt-24">
        <h3 className="mb-4">Need to make changes to your finances?</h3>
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

