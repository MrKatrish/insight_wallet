import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Chart from '../components/ChartPie';
import BarChart from '../components/BarChart';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          {/* Content */}
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <p>Welcome to your dashboard!</p>
        </div>
      </div>
      <Chart/>
      <BarChart/>
      <Footer />
    </>
  );
};

export default Dashboard;
