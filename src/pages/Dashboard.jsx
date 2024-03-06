import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Chart from "../components/ChartPie";
import CurrencyConverter from "../components/CurrencyExchanger";
import BarChart from "../components/BarChart";
import LastTransactions from "../components/LastTransactions";

// add imports for AddBudget and SavingsGoals

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-4 grid-row-1 gap-4">
        {/* Sidebar */}
        <Sidebar className="col-span-1" />

        {/* Main Content Wrapper */}
        <div className="fixed overflow-x-hidden overflow-y-auto top-0 left-0 w-full h-full p-10 pl-96 col-span-3">
          {/* Main Content */}

          <div className="bg-white bg-opacity-50 rounded-xl p-10 grid grid-cols-3 grid-rows-3 gap-4">
            {/* Tile 1 - BarChart: Finance Overview */}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-2">
              <h2 className="text-2xl text-left mb-2">Financial Overview</h2>
              <BarChart />
            </div>

            {/* Tile 2 - Currency Converter */}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
              <h2 className="text-2xl text-left mb-2">Currency Conversion</h2>
              <CurrencyConverter />
            </div>

            {/* Tile 3 - Add Budget (Placeholder) */}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
              {/* here add AddBudget component*/}
              <h2 className="text-2xl text-left mb-2">Something Goes Here</h2>
            </div>

            {/* Tile 4 - PieChart: Budget */}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
              <h2 className="text-2xl text-left mb-2">Your Monthly Budget</h2>
              <Chart />
            </div>

            {/* Tile 5 - Last Transactions */}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-1">
              <h2 className="text-2xl text-left mb-10">Latest Transactions</h2>
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

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
