import React, { useState, useEffect } from 'react';
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
      text: '',
    },
  },
};
export function generateChartData() {
  const currentUser = localStorage.getItem('currentUser');
  const userData = currentUser ? JSON.parse(localStorage.getItem(currentUser)) : null;
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
export default function BarChart() {
  const [chartData, setChartData] = useState(generateChartData());

  useEffect(() => {
    setChartData(generateChartData());
  }, []);

  return (
    <div>
      <h1 className="">Overall Finance Budget</h1>
    <Bar
      options={options}
      data={chartData}
    />
    </div>
  );
}