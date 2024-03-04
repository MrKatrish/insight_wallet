import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import UserBadge from "../components/UserBadge";
import profileImage from "../Assets/jonas-kakaroto.jpg"; // Import the profile picture
import Chart from "../components/ChartPie";
import CurrencyConverter from "../components/CurrencyExchanger";
import BarChart from "../components/BarChart";

const Dashboard = () => {
  const user = {
    username: "Your Profile",
    profilePicture: profileImage,
  };
  return (
    <>
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 min-h-screen bg-gray-800 text-white"> 
        <Sidebar className="flex"/>
      </div>

      {/* Main Content */}
      <div className="fw-3/4 min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Content */}
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <p>Welcome to your dashboard!</p>
          <UserBadge
            username={user.username}
            profilePicture={user.profilePicture}
          />
        </div>
        <Chart />
        <CurrencyConverter /> {/* Include CurrencyConverter component */}
        <BarChart />
        <Footer />
      </div>
      </div>

    </>
  );
};

export default Dashboard;
