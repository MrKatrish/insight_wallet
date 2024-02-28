import React, { useState } from 'react';

function Income({ navigate, updateUserData }) {
  const [income, setIncome] = useState({ salary: '', sideHustle: '', other: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome({ ...income, [name]: value });
  };

  const handleSubmit = () => {
    updateUserData({ income });
    navigate('budget');
  };

  return (
    <div>
      <h2>Your Income:</h2>
      {/* Formularz do wprowadzania danych o dochodach */}
      <input name="salary" value={income.salary} onChange={handleChange} placeholder="Salary" />
      <input name="sideHustle" value={income.sideHustle} onChange={handleChange} placeholder="Side Hustle" />
      <input name="other" value={income.other} onChange={handleChange} placeholder="Other" />
<button onClick={handleSubmit}>Next</button>
</div>
);
}

export default Income;