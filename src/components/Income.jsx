import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
function Income({ updateUserData }) {
    const navigate = useNavigate(); 
    const [income, setIncome] = useState({ salary: '', sideHustle: '', other: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome({ ...income, [name]: value });
  };

  const handleSubmit = () => {
    updateUserData({ income });
    navigate('/budget');
  };
  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Income:</h2>
      <form>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="salary"
            value={income.salary}
            onChange={handleChange}
            placeholder="Salary"
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="sideHustle"
            value={income.sideHustle}
            onChange={handleChange}
            placeholder="Side Hustle"
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="other"
            value={income.other}
            onChange={handleChange}
            placeholder="Other"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Income;
