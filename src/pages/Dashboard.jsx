import React from "react";
import Footer from "../components/Footer";
import Chart from "../components/ChartPie";
import CurrencyConverter from "../components/CurrencyExchanger";
import BarChart from "../components/BarChart";
import LastTransactions from "../components/LastTransactions";
import DisplayBudget from "../components/DisplayBudget";
import Navbar from "../components/Navbar";
import SavingsGoalsDashboard from "../components/saving-goals-dashboard-card";
// add imports for AddBudget and SavingsGoals

const Dashboard = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Main Content Wrapper */}
      <div className="flex-grow flex items-center justify-center">
        <div className="p-10">
          {/* Main Content */}
          <h1 className="text-left mb-10">Dashboard</h1>
          <div className="bg-white bg-opacity-50 rounded-xl p-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Tile 1 - BarChart: Finance Overview */}
            <div className="bg-white rounded-xl shadow-md p-4 col-auto">
              <h2 className="text-2xl text-left mb-10">Financial Overview</h2>
                <BarChart />
            </div>

            {/* Tile 2 - Currency Converter */}
            <div className="bg-white rounded-xl shadow-md p-4 col-auto">
              <h2 className="text-2xl text-left mb-10">Currency Conversion</h2>
              <CurrencyConverter />
            </div>

            {/* Tile 3 - Add Budget (Placeholder) */}
            <div className="bg-white rounded-xl shadow-md p-4 col-auto">
              <h2 className="text-2xl text-left mb-10">Current Budget</h2>
              <DisplayBudget/>
            </div>

            {/* Tile 4 - PieChart: Budget */}
            <div className="bg-white rounded-xl shadow-md p-4 col-auto">
              <h2 className="text-2xl text-left mb-10">Your Monthly Budget</h2>
              <Chart />
            </div>

            {/* Tile 5 - Last Transactions */}
            <div className="bg-white rounded-xl shadow-md p-4 col-auto">
              <h2 className="text-2xl text-left mb-10">Latest Transactions</h2>
              <LastTransactions />
            </div>

            {/* Tile 6 - Savings Goals (Placeholder) */}
            <div className="bg-white rounded-xl shadow-md p-4 col-auto">
              <h2 className="text-2xl text-left mb-10">Savings Progress</h2>
              <SavingsGoalsDashboard />
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;