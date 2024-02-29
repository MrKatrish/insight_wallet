import userData from '../assets/userData.json'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Rent', 'Bills', 'Groceries', 'savings', 'investments'],
  datasets: [
    {
      label: 'My expense',
      data: [userData.rent, userData.bills, userData.groceries, userData.savings, userData.investments],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
       
      ],
      borderWidth: 3,
    },
  ],
};

function Chart () {
    return (
        <Doughnut data={data} />
    )
}

export default Chart;