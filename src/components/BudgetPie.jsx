import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";
ChartJS.register(ArcElement, Tooltip, Legend);
export const generateDoughnutChartData = () => {
  const currentUser = localStorage.getItem("currentUser");
  const userData = currentUser
    ? JSON.parse(localStorage.getItem(currentUser))
    : null;
  const budgetData = userData && userData.budgets ? userData.budgets : [];
  const availableColors = [
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "orange",
    "pink",
    "brown",
    "teal",
    "cyan",
    "maroon",
    "navy",
    "olive",
    "gray",
    "lime",
    "indigo",
    "violet",
    "turquoise",
    "magenta",
    "gold",
  ];
  const getRandomColor = () => {
    if (availableColors.length === 0) {
      // If all colors are used, reset the availableColors array
      availableColors.push(
        "red",
        "blue",
        "yellow",
        "green",
        "purple",
        "orange",
        "pink",
        "brown",
        "teal",
        "cyan",
        "maroon",
        "navy",
        "olive",
        "gray",
        "lime",
        "indigo",
        "violet",
        "turquoise",
        "magenta",
        "gold"
      );
    }
    const randomIndex = Math.floor(Math.random() * availableColors.length);
    return availableColors.splice(randomIndex, 1)[0];
  };
  const doughnutData = {
    labels: budgetData.map((budgets) => budgets.title),
    datasets: [
      {
        data: budgetData.map((budgets) => budgets.amount),
        backgroundColor: budgetData.map(() => getRandomColor()),
        borderWidth: 1,
      },
    ],
  };
  return doughnutData;
};
export const doughnutLabel = {
  id: "doughnutLabel",
  afterDatasetsDraw(chart, args, plugins) {
    const { ctx } = chart;
    const centerX = chart.getDatasetMeta(0).data[0].x;
    const centerY = chart.getDatasetMeta(0).data[0].y;
    //text
    ctx.save();
    ctx.textAlign = "center";
    ctx.font = "10px";
    ctx.fillStyle = "black";
    ctx.textBaseline = "middle";
    ctx.fillText(
      `Total budget: ${generateDoughnutChartData().datasets[0].data.reduce(
        (acc, val) => acc + val,
        0
      )}`,
      centerX,
      centerY
    );
    ctx.restore();
  },
};
function BudgetChart() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Doughnut data={generateDoughnutChartData()} plugins={[doughnutLabel]} />
    </div>
  );
}
export default BudgetChart;