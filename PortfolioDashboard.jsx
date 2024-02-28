import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const PortfolioDashboard = () => {
  const initialHoldings = {
    crypto: 5000,
    cash: 2000,
    stocks: 3000,
  };

  const [holdings, setHoldings] = useState(initialHoldings);
  const totalValue = Object.values(holdings).reduce((acc, curr) => acc + curr, 0);

  const pieChartData = {
    labels: ['Crypto', 'Cash', 'Stocks'],
    datasets: [
      {
        data: Object.values(holdings),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barChartData = {
    labels: ['Crypto', 'Cash', 'Stocks'],
    datasets: [
      {
        label: 'Holdings Value',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        data: Object.values(holdings),
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Portfolio Overview</h2>
      <div className="flex justify-center mb-8">
        <div className="w-1/2 mr-4">
          <h3 className="text-xl font-bold mb-4">Portfolio Breakdown (Pie Chart)</h3>
          <Pie data={pieChartData} />
        </div>
        <div className="w-1/2">
          <h3 className="text-xl font-bold mb-4">Asset Class Breakdown (Bar Chart)</h3>
          <Bar data={barChartData} />
        </div>
      </div>
      <div>
        <h4 className="text-lg">Total Portfolio Value: ${totalValue}</h4>
      </div>
    </div>
  );
};

export default PortfolioDashboard;
