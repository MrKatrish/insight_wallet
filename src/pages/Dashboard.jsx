import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import UserBadge from '../components/UserBadge';
import profileImage from '../Assets/jonas-kakaroto.jpg'; // Import the profile picture
import Chart from '../components/ChartPie';
import CurrencyConverter from '../components/CurrencyExchanger';
import BarChart from '../components/BarChart';


const Dashboard = () => { 
  const user = {
    username: 'Jonas Kakaroto',
    profilePicture: profileImage,
  };
  return (
    <>
      <Sidebar />
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          {/* Content */}
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <p>Welcome to your dashboard!</p>
          <UserBadge username={user.username} profilePicture={user.profilePicture} />
        </div>
       
      </div>
      <Chart />
      <CurrencyConverter /> {/* Include CurrencyConverter component */}
      <Chart/>
      <BarChart/>
      <Footer />
    </>
  );
};

export default Dashboard;
