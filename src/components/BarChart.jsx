import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import userData from '../assets/userData.json'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Overall Finance Budget',
    },
  },
};

const labels = ['Overall Finance Budget'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total Income',
      data: [(userData.salary + userData.sideHustles + userData.sideHustles + userData.otherIncome)],
      backgroundColor: 'purple',
    },
    {
      label: 'Total Expediture Budget',
      data: [(userData.rent + userData.bills + userData.groceries + userData.savings + userData.investments)],
      backgroundColor: 'yellow',
    },
    {
        label: 'Total Savings Goals',
        data: [(userData.holidays + userData.car + userData.laptop)],
        backgroundColor: 'red',
      }
  ],
};

function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;
