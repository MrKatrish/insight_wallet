import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="sidebar bg-black text-white h-full w-64 fixed top-0 left-0">
      <h2 className="text-center py-4">Navigation</h2>
      <ul>
        <li>
          <Link to="/overview" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Overview
          </Link>
        </li>
        <li>
          <Link to="/transactions" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Transactions
          </Link>
        </li>
        <li>
          <Link to="/reports" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Reports
          </Link>
        </li>
        <li>
          <Link to="/budgets" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Budgets
          </Link>
        </li>
        <li>
          <Link to="/goals" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
            Goals
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

