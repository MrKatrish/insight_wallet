// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { GiReceiveMoney } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import profileImage from "../Assets/jonas-kakaroto.jpg";
import UserBadge from './UserBadge'; // Assuming UserBadge is imported from the correct path

const Sidebar = () => {
  const user = {
    username: "John",
    profilePicture: profileImage,
  };
  return (
    <div className=" text-white h-full fixed top-0 left-0 bg-customPurple grid grid-cols-1 grid-rows-3 items-center justify-center">
      {/* User Profile Section */}
      <div className=" sm:w-72 bg-purple-900 bg-opacity-30 rounded-xl w-72 text-center p-2 m-8 col-span-1 grid grid-cols-2 grid-rows-1 mt-24 shadow-lg">
        <img
          src={user.profilePicture}
          className=" outline-blue-950 shadow-xl w-24 h-24 rounded-full mx-auto mt-2 ml-2 mr-4"
        />
        <div>
          <h2 className="mb-2 font-semibold mt-6 text-left">
            Hi {user.username},{" "}
          </h2>
          <h3 className="mb-2 text-left">Welcome back!</h3>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="col-span-1 text-center mt-2 mb-22 grid grid-rows-4">
        <h3 className="mb-2 font-semibold col-span-1">Need to make changes?</h3>
        <li className="mb-1">
          <Link to="/Income" className="block hover:bg-black hover:bg-opacity-50 hover:rounded-md col-span-1"><GiReceiveMoney />Add new income</Link>
        </li>
        <li className="mb-1">
          <Link to="/Budget" className="block hover:bg-black hover:bg-opacity-50 hover:rounded-md col-span-1"><TbZoomMoney className="ml-"/> Amend your budget</Link>
        </li>
        <li className="mb-1">
          <Link to="/SavingsGoals" className="block hover:bg-black hover:bg-opacity-50 hover:rounded-md col-span-1"><TbMoneybag /> Set new savings goals</Link>
        </li>
      </ul>

      {/* User Badge Component */}
      <UserBadge username={user.username} profilePicture={user.profilePicture} />

      {/* Additional Content */}
      <div className='flex flex-col sm:flex-row p-2 justify-center items-center'>
        <label className="text-lg font-medium leading-10 px-4 sm:px-6 py-2 sm:my-2 sm:mx-2 border-0 ring-1 ring-inset ring-customPurple w-full sm:w-48 bg-white rounded-3xl">Total</label>
        <label className="text-lg font-medium leading-10 py-2 border-0 ring-1 ring-inset ring-customPurple w-full sm:w-64 bg-white rounded-3xl mt-2 sm:mt-0">£ {totalIncome.toFixed(2)}</label>
      </div>
    </div>
  );
};

export default Sidebar;
