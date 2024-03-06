import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from "../Assets/jonas-kakaroto.jpg"; // Import the profile picture
import MyCalendar from './ExternalCalendar';
import { TbMoneybag } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";




const Sidebar = () => {

  const user = {
    username: "John",
    profilePicture: profileImage,
  };

  return (
    <div className=" text-white h-full fixed top-0 left-0 bg-customPurple grid grid-cols-1 grid-rows-3 items-center justify-center">
      {/* User Profile Section */}
      <div className='bg-purple-900 bg-opacity-30 rounded-xl w-72 text-center p-2 m-8 col-span-1 grid grid-cols-2 grid-rows-1 mt-0 shadow-lg'>
          <img
            src={user.profilePicture}
            className=" outline-blue-950 shadow-xl w-24 h-24 rounded-full mx-auto mb-1 mt-2 ml-2"
          />
          <div> 
            <h2 className="mb-2 font-semibold mt-6 text-left">Hi {user.username}, </h2>
            <h3 className="mb-2 text-left">Welcome to your dashboard!</h3>
          </div>
      </div>

      <MyCalendar className="col-span-1" />

      {/* Navigation Links */}
      <ul className="col-span-1 text-center mt-2 mb-22">
        <h3 className="mb-2 font-semibold">Need to make changes?</h3>
        <li>
          <Link to="/income" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md"><GiReceiveMoney />Add new income
          </Link>
        </li>
        <li>
          <Link to="/budget" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
          <TbZoomMoney /> Amend your budget
          </Link>
        </li>
        <li>
          <Link to="/savingsgoals" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
          <TbMoneybag /> Set new savings goals
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

