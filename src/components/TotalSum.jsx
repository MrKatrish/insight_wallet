import React from "react";

const TotalSum = ({ label, total }) => {
  return (
    <div className="flex p-2 justify-center">
      <label className="text-lg font-medium leading-10 py-2 border-0 ring-1 ring-inset ring-customPurple w-64 bg-white rounded-3xl">
        {label}: £ {total.toFixed(2)}
      </label>
    </div>
  );
};

export default TotalSum;
