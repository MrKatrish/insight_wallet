import React, { useState, useEffect } from 'react';

function SavingsGoalsDashboard() {
  const [savingsGoals, setSavingsGoals] = useState([]);

  useEffect(() => {
    // Fetch saving goals from local storage
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      const userSavingsGoals = userData.savingsGoals || [];
      setSavingsGoals(userSavingsGoals);
    }
  }, []);

  return (
    <div>
      {savingsGoals.map(goal => (
        <div key={goal.id} className="bg-pink-100 opacity-45 rounded-xl shadow-md mr-2 mb-4 p-2 border border-gray-300">
          <h3 className='text-lg font-medium my-2'>{goal.title}</h3>
          <p className='mb-2'>Amount: £ {goal.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default SavingsGoalsDashboard;
