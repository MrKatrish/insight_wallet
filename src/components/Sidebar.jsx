import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../Assets/jonas-kakaroto.jpg"; // Import the profile picture
import MyCalendar from './ExternalCalendar';

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

      {/* Calendar Widget */} {/*Still need to add better UI version from react calendars*/}
      <MyCalendar className="col-span-1 mt-20 mb-20" />

      {/* Navigation Links */}
      <ul className="col-span-1 text-center mt-2 mb-22 grid grid-rows-4">
      <h3 className="mb-2 font-semibold col-span-1">Need to make changes?</h3>
      <li className="mb-1">
          <Link
            to="/income"
            className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md"
          >Income</Link>
        </li>
        <li>
          <Link
            to="/budget"
            className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md"
          >Budget</Link>
        </li>
        <li>
          <Link
            to="/savingsgoals"
            className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md"
          >Saving Goals</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
