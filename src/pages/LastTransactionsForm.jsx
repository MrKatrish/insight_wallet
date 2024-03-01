import React from "react";

const LastTransactionsForm = () => {
  return (
    <div className="container mx-auto max-w-2xl bg-black p-8 rounded-lg shadow-lg border-2 border-cyan-500">
      <h2 className="text-2xl text-navy border-2 border-blue-500 py-2 px-4 rounded-md bg-gradient-to-r from-yellow-300 to-blue-300">
        Last Transactions Input Form
      </h2>
      <form action="#" method="post">
        <div className="input-group">
          <label htmlFor="mortgage" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/house.gif"
              alt="Mortgage Icon"
            />
            Mortgage:
          </label>
          <input
            type="text"
            id="mortgage"
            name="mortgage"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="car_credit" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/supercar.gif"
              alt="Car Credit Icon"
            />
            Car Credit:
          </label>
          <input
            type="text"
            id="car_credit"
            name="car_credit"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="shopping" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/shopping-bag.gif"
              alt="Shopping"
            />
            Shopping:
          </label>
          <input
            type="text"
            id="shopping"
            name="shopping"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="holiday" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/holiday.gif"
              alt="Holiday Icon"
            />
            Holiday:
          </label>
          <input
            type="text"
            id="holiday"
            name="holiday"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="public_transport" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/bus.gif"
              alt="Public Transport Icon"
            />
            Public Transport:
          </label>
          <input
            type="text"
            id="public_transport"
            name="public_transport"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="wifi" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/wifi.gif"
              alt="WiFi Icon"
            />
            WiFi:
          </label>
          <input
            type="text"
            id="wifi"
            name="wifi"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="fuel" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/eco-fuel.gif"
              alt="Fuel Icon"
            />
            Fuel:
          </label>
          <input
            type="text"
            id="fuel"
            name="fuel"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="gas" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/power.gif"
              alt="Gas Icon"
            />
            Gas:
          </label>
          <input
            type="text"
            id="gas"
            name="gas"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="electricity" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/light-bulb.gif"
              alt="Electricity Icon"
            />
            Electricity:
          </label>
          <input
            type="text"
            id="electricity"
            name="electricity"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobile_phone" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/touch-screen.gif"
              alt="Mobile Phone Icon"
            />
            Mobile Phone:
          </label>
          <input
            type="text"
            id="mobile_phone"
            name="mobile_phone"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="food_delivery" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/food-delivery.gif"
              alt="Food Delivery Icon"
            />
            Food Delivery:
          </label>
          <input
            type="text"
            id="food_delivery"
            name="food_delivery"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="restaurant" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/restaurant.gif"
              alt="Restaurant Icon"
            />
            Restaurant:
          </label>
          <input
            type="text"
            id="restaurant"
            name="restaurant"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group">
          <label htmlFor="other" className="text-cyan-500">
            <img
              className="icon w-6 h-6"
              src="public/icons/fireworks.gif"
              alt="Other Icon"
            />
            Other:
          </label>
          <input
            type="text"
            id="other"
            name="other"
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-cyan-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LastTransactionsForm;
