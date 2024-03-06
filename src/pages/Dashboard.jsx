import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Chart from "../components/ChartPie";
import CurrencyConverter from "../components/CurrencyExchanger";
import BarChart from "../components/BarChart";
import LastTransactions from "../components/LastTransactions";
import DisplayBudget from "../components/DisplayBudget";
import BudgetPie from "../components/BudgetPie";


const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-4 grid-row-1 gap-4">
        {/* Sidebar */}
        <Sidebar className="col-span-1" />

        {/* Main Content Wrapper */}
        <div className="fixed overflow-x-hidden overflow-y-auto top-0 left-0 w-full h-full p-10 pl-96 col-span-3">

          {/* Main Content */}
          <h1 className="col-span-3 text-left mb-4">Dashboard</h1>
          <div className="bg-white bg-opacity-50 rounded-xl p-10 grid grid-cols-3 grid-rows-3 gap-4">
            {/* Tile 1 - BarChart: Finance Overview */}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-2">
              <h2 className="text-2xl text-left">Financial Overview</h2>
              <p className="text-left mb-2 text-gray-700">Income versus budgeted spend</p>
              <BarChart />
            </div>

            {/* Tile 2 - Currency Converter */}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
              <h2 className="text-2xl text-left mb-2">Currency Conversion</h2>
              <CurrencyConverter />
            </div>

            {/* Tile 3 - PieChar: Budget*/}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
              <h2 className="text-2xl text-left">Budget</h2>
              <p className="text-left mb-2 text-gray-700">How you've budgeted your income</p>
              <BudgetPie />
            </div>

            {/* Tile 4 - PieChart: Income */}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
              <h2 className="text-2xl text-left">Income</h2>
              <p className="text-left mb-2 text-gray-700">Sources of income</p>
              <Chart />
            </div>

            {/* Tile 5 - Last Transactions */}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
              <h2 className="text-2xl text-left mb-10">Latest Transactions</h2>
              <p className="text-left mb-2 text-gray-700">What you've been spending</p>
              <LastTransactions />
            </div>

            {/* Tile 6 - Savings Goals (Placeholder) */}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-3">
              <h2 className="text-2xl text-left mb-4">Savings Progress</h2>
              {/* Wrapper - Savings Goals */}
              <div className="grid grid-cols-3 grid-row-1">
                <div className="bg-orange-300 opacity-45 rounded-xl shadow-md p-4 col-span-1 mr-2">
                  <h2 className="text-2xl text-left mb-2">savings goal 1</h2>
                  {/* here add SavingsGoals component*/}
                </div>
                <div className="bg-green-100 opacity-45 rounded-xl shadow-md p-4 col-span-1 mr-2">
                  <h2 className="text-2xl text-left mb-2">savings goal 2</h2>
                  {/* here add SavingsGoals component*/}
                </div>
                <div className="bg-red-100  opacity-45 rounded-xl shadow-md p-4 col-span-1">
                  <h2 className="text-2xl text-left mb-2">savings goal 3</h2>
                  {/* here add SavingsGoals component*/}
                </div>
              </div>
            </div>
          </div>

          <Footer className="h-full"/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;