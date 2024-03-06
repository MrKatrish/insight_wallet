import userData from '../assets/userData.json'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Rent', 'Bills', 'Groceries', 'Savings', 'Investments'],
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

      borderWidth: 1,
    },
  ],
};

const doughnutLabel = {
    id:'doughnutLabel',
    afterDatasetsDraw(chart, args, plugins) {
        const {ctx, data} = chart;
        const centerX = chart.getDatasetMeta(0).data[0].x;
        const centerY = chart.getDatasetMeta(0).data[0].y;
        
        //text
        ctx.save();
        ctx.textAlign = 'center';
        ctx.font = '100px';
        ctx.fillStyle = 'black';
        ctx.textBaseline = 'middle';
        ctx.fillText(`Total Income: £${userData.salary}`, centerX, centerY);
}
}

function Chart () {
    return (
        <Doughnut className="mt-10" data={data} plugins={[doughnutLabel]} />
    )
}

export default Chart;