import React from "react";

// TotalSum component represents a display of the total sum with a label
// Props:
// - label: the label for the total sum (e.g., "Total Income")
// - total: the total sum value to be displayed
const TotalSum = ({ label, total }) => {
  return (
    <div className="flex p-2 justify-center">
      {/* Display the label and total sum with appropriate styling */}
      <label className="text-lg font-medium leading-10 py-2 border-0 ring-1 ring-inset ring-customPurple w-64 bg-white rounded-3xl">
        {label}: £ {total.toFixed(2)}
      </label>
    </div>
  );
};

export default TotalSum;
