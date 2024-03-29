import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registering Chart.js elements and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

// Options for the Bar chart
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: '',
    },
  },
};

// Function to generate random colors for the bar chart
const getRandomColor = () => {
  const availableColors = [
    'purple', 'yellow', 'red', 'green', 'blue', 'orange', 'pink', 'brown', 'cyan', 'magenta',
    'lime', 'indigo', 'teal', 'amber', 'deepPurple', 'lightBlue', 'deepOrange', 'blueGrey', 'lime',
    'cyan'
  ];

  if (!availableColors.length) {
    // If all colors are used, reset the availableColors array
    availableColors.push(
      'purple', 'yellow', 'red', 'green', 'blue', 'orange', 'pink', 'brown', 'cyan', 'magenta',
      'lime', 'indigo', 'teal', 'amber', 'deepPurple', 'lightBlue', 'deepOrange', 'blueGrey', 'lime',
      'cyan'
    );
  }

  const randomIndex = Math.floor(Math.random() * availableColors.length);
  const randomColor = availableColors[randomIndex];

  // Remove the used color from the available colors array
  availableColors.splice(randomIndex, 1);

  return randomColor;
};

// Function to generate chart data based on user data
export function generateChartData() {
  const currentUser = localStorage.getItem('currentUser');
  const userData = currentUser ? JSON.parse(localStorage.getItem(currentUser)) : null;

  if (userData) {
    const allIncomes = userData.incomes ? userData.incomes : [];
    const incomeData = allIncomes.reduce((total, income) => total + income.amount, 0);

    const budgetData = userData.budgets
      ? userData.budgets.map(budget => ({
          label: budget.title,
          data: [budget.amount],
          backgroundColor: getRandomColor(), // Adjust bar color 
        }))
      : [];

    const labels = ['']; // Include budget item labels
    const datasets = [
      {
        label: 'Total Income',
        data: [incomeData],
        backgroundColor: getRandomColor(),
      },
      ...budgetData,
    ];

    return {
      labels,
      datasets,
    };
  }

  return {    
    labels: [],
    datasets: []
  };
}

// Main BarChart component
export default function BarChart() {
  const currentUser = localStorage.getItem('currentUser');
  const [chartData, setChartData] = useState(generateChartData());

  useEffect(() => {
    // Update chart data when user data changes
    setChartData(generateChartData());
  }, [currentUser]);

  return (
    <div className='h-full'>
    <Bar
      options={options}
      data={chartData}
    />
    </div>
  );
}
