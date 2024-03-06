import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillAmazonCircle } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { CgAdidas } from "react-icons/cg";
import { CgAirplane } from "react-icons/cg";

// LastTransactions component displaying several transactions with icons
function LastTransactions() {
  return (
    <>
      {/* Transaction block for Tesco */}
      <div className="grid grid-cols-3 grid-rows-1 mb-4 p-2 rounded-xl border shadow-md bg-slate-100 border-gray-300">
        <AiOutlineShoppingCart className="w-6 h-6 mr-2 col-span-1" />
        <span className="text-lg font-medium col-span-1">Tesco</span>
        <span className="text-gray-500 col-span-1">£69.69</span>
      </div>

      {/* Transaction block for iCloud */}
      <div className="grid grid-cols-3 grid-rows-1 mb-4 p-2 rounded-xl border shadow-md bg-slate-100 border-gray-300">
        <AiFillApple  className="w-6 h-6 mr-2 col-span-1" />
        <span className="text-lg font-medium col-span-1">iCloud</span>
        <span className="text-gray-500 col-span-1">£9.99</span>
      </div>

      {/* Transaction block for Amazon UK */}
      <div className="grid grid-cols-3 grid-rows-1 mb-4 p-2 rounded-xl border shadow-md bg-slate-100 border-gray-300">
        <AiFillAmazonCircle className="w-6 h-6 mr-2 col-span-1" />
        <span className="text-lg font-medium col-span-1">Amazon UK</span>
        <span className="text-gray-500 col-span-1">£17.99</span>
      </div>

      {/* Transaction block for Tesco Petrol */}
      <div className="grid grid-cols-3 grid-rows-1 mb-4 p-2 rounded-xl border shadow-md bg-slate-100 border-gray-300">
        <AiFillCar  className="w-6 h-6 mr-2 col-span-1" />
        <span className="text-lg font-medium col-span-1">Tesco Petrol</span>
        <span className="text-gray-500 col-span-1">£72.15</span>
      </div>

      {/* Transaction block for Adidas */}
      <div className="grid grid-cols-3 grid-rows-1 mb-4 p-2 rounded-xl border shadow-md bg-slate-100 border-gray-300">
        <CgAdidas className="w-6 h-6 mr-2 col-span-1" />
        <span className="text-lg font-medium col-span-1">Adidas</span>
        <span className="text-gray-500 col-span-1">£119.99</span>
      </div>

      {/* Transaction block for Wizz Air */}
      <div className="grid grid-cols-3 grid-rows-1 mb-4 p-2 rounded-xl border shadow-md bg-slate-100 border-gray-300">
        <CgAirplane className="w-6 h-6 mr-2 col-span-" />
        <span className="text-lg font-medium col-span-">Wizz Air</span>
        <span className="text-gray-500 col-span-">£1359.97</span>
      </div>
    </>
  );
}

export default LastTransactions;
