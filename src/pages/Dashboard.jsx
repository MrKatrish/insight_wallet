import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Chart from "../components/ChartPie";
import CurrencyConverter from "../components/CurrencyExchanger";
import BarChart from "../components/BarChart";
import LastTranctions from "../components/LastTransactions";

const Dashboard = () => {
 
  return (
    <>
    <div className="flex">
      {/* Sidebar */}
      <div className="">
      <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-80 rounded-3xl ring-gray-300 bg-white min-w-screen mx-auto w-full h-screen p-4 overflow-auto flex">
        {/* graphs */}
        <div className="flex-1 w-1/4">
          <Chart />
          <BarChart />
          <LastTranctions/>
          <Footer />
        </div>

        {/* currency converter and transactions column */}
        <div className="w-1/4">
          <CurrencyConverter />
          {/*transactions placeholder*/}

        </div>
      </div>
      
      </div>

    </>
  );
};

export default Dashboard;
