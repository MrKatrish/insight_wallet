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
import UserBadge from '../components/UserBadge';


function Income() {
  const navigate = useNavigate();
}

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
      </div>



  );
};

export default Sidebar;