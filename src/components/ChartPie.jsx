import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export const generateDoughnutChartData = () => {
  const currentUser = localStorage.getItem('currentUser');
  const userData = currentUser ? JSON.parse(localStorage.getItem(currentUser)) : null;

  const incomeData = userData && userData.incomes ? userData.incomes : [];

  const availableColors = [
    'red', 'blue', 'yellow', 'green', 'purple',
    'orange', 'pink', 'brown', 'teal', 'cyan',
    'maroon', 'navy', 'olive', 'gray', 'lime',
    'indigo', 'violet', 'turquoise', 'magenta', 'gold',
  ];

  const getRandomColor = () => {
    if (availableColors.length === 0) {
      // If all colors are used, reset the availableColors array
      availableColors.push(
        'red', 'blue', 'yellow', 'green', 'purple',
        'orange', 'pink', 'brown', 'teal', 'cyan',
        'maroon', 'navy', 'olive', 'gray', 'lime',
        'indigo', 'violet', 'turquoise', 'magenta', 'gold',
      );
    }

    const randomIndex = Math.floor(Math.random() * availableColors.length);
    return availableColors.splice(randomIndex, 1)[0];
  };

  const doughnutData = {
    labels: incomeData.map(income => income.title),
    datasets: [
      {
        data: incomeData.map(income => income.amount),
        backgroundColor: incomeData.map(() => getRandomColor()),
        borderWidth: 1,
      },
    ],
  };

  return doughnutData;
};

export const doughnutLabel = {
  id: 'doughnutLabel',
  afterDatasetsDraw(chart, args, plugins) {
    const { ctx } = chart;
    const centerX = chart.getDatasetMeta(0).data[0].x;
    const centerY = chart.getDatasetMeta(0).data[0].y;

    //text
    ctx.save();
    ctx.textAlign = 'center';
    ctx.font = '10px';
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Total Income: ${generateDoughnutChartData().datasets[0].data.reduce((acc, val) => acc + val, 0)}`, centerX, centerY);
    ctx.restore();
  },
};

function Chart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  }

  const chartStyle = {
    height: '400px',
    width: '100%',
  }

  return (
  <div className='h-100 flex align-center justify-center'>
  <Doughnut data={generateDoughnutChartData()} options={options} plugins={[doughnutLabel]} style={chartStyle} />
  </div>
  )
}

export default Chart;
