import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../Assets/jonas-kakaroto.jpg"; // Import the profile picture

const Sidebar = () => {
  const user = {
    username: "John",
    profilePicture: profileImage,
  };

  return (
    <div className=" text-white h-full fixed top-0 left-0 bg-customPurple grid grid-cols-1 grid-rows-6 items-center justify-center">
      {/* User Profile Section */}
      <div className="bg-purple-900 bg-opacity-30 rounded-xl w-72 text-center p-2 m-8 col-span-1 grid grid-cols-2 grid-rows-1 mt-24 shadow-lg">
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
      <ul>
        <li>
          <Link
            to="/overview"
            className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md"
          >
            <i className="fas fa-home mr-2"></i>Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/reports"
            className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md"
          >
            Analytics
          </Link>
        </li>
        <li>
          <Link
            to="/transactions"
            className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md"
          >
            Transactions
          </Link>
        </li>
        <li>
          <Link
            to="/goals"
            className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md"
          >
            Account
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
