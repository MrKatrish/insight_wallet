import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserInput from '../components/UserInput';
import FormTitle from '../components/FormTitle';
import FormButton from '../components/FormButton';
import profileImage from "../Assets/jonas-kakaroto.jpg";
import MyCalendar from './ExternalCalendar';
import { TbMoneybag } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";



function Income() {
  const navigate = useNavigate();

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

      <ul className="col-span-1 text-center mt-2 mb-22 grid grid-rows-4">
        <h3 className="mb-2 font-semibold col-span-1">Need to make changes?</h3>
        <li className="mb-1">
          <Link to="/Income" className="block hover:bg-black hover:bg-opacity-50 hover:rounded-md col-span-1"><GiReceiveMoney />Add new income
          </Link>
        </li>
        <li className="mb-1">
          <Link to="/Budget" className="block hover:bg-black hover:bg-opacity-50 hover:rounded-md col-span-1">
          <TbZoomMoney className="ml-"/> Amend your budget
          </Link>
        </li>
        <li className="mb-1">
          <Link to="/SavingsGoals" className="block hover:bg-black hover:bg-opacity-50 hover:rounded-md col-span-1">
          <TbMoneybag /> Set new savings goals
          </Link>
        </li>
      </ul>
      <UserBadge username={user.username} profilePicture={user.profilePicture} />
      
      <div className='flex flex-col sm:flex-row p-2 justify-center items-center'>
        <label className="text-lg font-medium leading-10 px-4 sm:px-6 py-2 sm:my-2 sm:mx-2 border-0 ring-1 ring-inset ring-customPurple w-full sm:w-48 bg-white rounded-3xl">Total</label>
        <label className="text-lg font-medium leading-10 py-2 border-0 ring-1 ring-inset ring-customPurple w-full sm:w-64 bg-white rounded-3xl mt-2 sm:mt-0">£ {totalIncome.toFixed(2)}</label>
      </div>
    </div>



  );
};

export default Sidebar;