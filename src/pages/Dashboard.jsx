import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Chart from "../components/ChartPie";
import CurrencyConverter from "../components/CurrencyExchanger";
import BarChart from "../components/BarChart";

const Dashboard = () => {
 
  return (
    <>
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 min-w-screen h-screen bg-customPink p-4">
      <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-4/5 min-w-screen h-screen bg-customPink p-4">
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
