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
        <h1 className="m-5">Last Transations</h1>
        <div className="flex p-2 justify-center">
          
          <div className="flex items-center">
            <AiOutlineShoppingCart className="w-6 h-6 mr-2" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Tesco</span>
            <span className="text-gray-500">£69.69</span>
          </div>

        </div>
        <div className="flex p-2 justify-center">
          
          <div className="flex items-center">
            <AiFillApple  className="w-6 h-6 mr-2" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">iCloud</span>
            <span className="text-gray-500">£9.99</span>
          </div>

        </div>
        <div className="flex p-2 justify-center">
          
          <div className="flex items-center">
            <AiFillAmazonCircle className="w-6 h-6 mr-2" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Amazon UK</span>
            <span className="text-gray-500">£17.99</span>
          </div>

        </div>
        <div className="flex p-2 justify-center">
          
          <div className="flex items-center">
            <AiFillCar  className="w-6 h-6 mr-2" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Tesco Petrol</span>
            <span className="text-gray-500">£72.15</span>
          </div>

        </div>
        <div className="flex p-2 justify-center">
          
          <div className="flex items-center">
            <CgAdidas className="w-6 h-6 mr-2" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Adidas Shop UK</span>
            <span className="text-gray-500">£119.99</span>
          </div>

        </div>
        <div className="flex p-2 justify-center">
          
          <div className="flex items-center">
            <CgAirplane className="w-6 h-6 mr-2" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Wizz Air</span>
            <span className="text-gray-500">£1359.97</span>
          </div>

        </div>
      </>
    )
}

export default LastTranctions;