import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Chart from "../components/ChartPie";
import CurrencyConverter from "../components/CurrencyExchanger";
import BarChart from "../components/BarChart";
import LastTransactions from "../components/LastTransactions";
import AddBudget from "../components/AddBudget";
// add imports for AddBudget and SavingsGoals

const Dashboard = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-10 grid grid-cols-2 grid-rows-3 gap-4">
          {/* Tile 1 - Bar Chart */}
          <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
            <BarChart />
          </div>
          
          {/* Tile 2 - Currency Converter */}
          <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
            <CurrencyConverter />
          </div>

          {/* Tile 3 - Add Budget (Placeholder) */}
          <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
            <AddBudget/>
          </div>

          {/* Tile 4 - Pie Chart */}
          <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
            <Chart />
          </div>

          {/* Tile 5 - Last Transactions */}
          <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
            <LastTransactions />
          </div>

          {/* Tile 6 - Savings Goals (Placeholder) */}
          <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
            {/* here add SavingsGoals componendt*/}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
