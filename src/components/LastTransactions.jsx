import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillAmazonCircle } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { CgAdidas } from "react-icons/cg";
import { CgAirplane } from "react-icons/cg";


function LastTranctions() {
    return (

      
        <>
        {/* <h1 className="m-5">Last Transations</h1> */}
        <div className="grid grid-cols-3 grid-rows-1 mb-4">
          
          <AiOutlineShoppingCart className="w-6 h-6 mr-2 col-span-1" />
          <span className="text-lg font-medium col-span-1">Tesco</span>
          <span className="text-gray-500 col-span-1">£69.69</span>

        </div>
        <div className="grid grid-cols-3 grid-rows-1 mb-4">
          

          <AiFillApple  className="w-6 h-6 mr-2 col-span-1" />
          <span className="text-lg font-medium col-span-1">iCloud</span>
          <span className="text-gray-500 col-span-1">£9.99</span>

        </div>
        <div className="grid grid-cols-3 grid-rows-1 mb-4">
          

          <AiFillAmazonCircle className="w-6 h-6 mr-2 col-span-1" />
          <span className="text-lg font-medium col-span-1">Amazon UK</span>
          <span className="text-gray-500 col-span-1">£17.99</span>


        </div>
        <div className="grid grid-cols-3 grid-rows-1 mb-4">
          
          <AiFillCar  className="w-6 h-6 mr-2 col-span-1" />
          <span className="text-lg font-medium col-span-1">Tesco Petrol</span>
          <span className="text-gray-500 col-span-1">£72.15</span>


        </div>
        <div className="grid grid-cols-3 grid-rows-1 mb-4">
          

          <CgAdidas className="w-6 h-6 mr-2 col-span-1" />
          <span className="text-lg font-medium col-span-1">Adidas</span>
          <span className="text-gray-500 col-span-1">£119.99</span>


        </div>
        <div className="grid grid-cols-3 grid-rows-1 mb-4">
          

            <CgAirplane className="w-6 h-6 mr-2 col-span-" />
            <span className="text-lg font-medium col-span-">Wizz Air</span>
            <span className="text-gray-500 col-span-">£1359.97</span>


        </div>
      </>
    )
}

export default LastTranctions;