import React, { useState } from 'react';
import axios from 'axios';

// Mapping of currency codes to their corresponding names
const currencyCodeToNameMapping = {
  "USD": "United States Dollar",
  // ... (Other currency codes and names)
};

// Function to convert currency using ExchangeRate-API
async function convertCurrency(amount, fromCurrency, toCurrency) {
  // API endpoint URL
  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
  
  try {
    // Fetch exchange rates from the API
    const response = await axios.get(url);
    const data = response.data;
    
    // Check if the response contains rates
    if (data && data.rates) {
      const rate = data.rates[toCurrency];

      // If the rate is available, calculate and return the converted amount
      if (rate) {
        return (amount * rate).toFixed(2);
      } else {
        throw new Error(`Rate for ${toCurrency} not found`);
      }
    } else {
      throw new Error('Invalid data');
    }
  } catch (error) {
    console.error("Error converting currency:", error);
    return "Error converting currency. Please try again later.";
  }
}

// CurrencyExchanger component
const CurrencyExchanger = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(100);
  const [result, setResult] = useState('');

  // Function to toggle the 'from' and 'to' currencies
  const handleToggle = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setResult('');
  };

  // Function to handle changes in the input amount
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Function to convert currency
  const handleConvert = async () => {
    try {
      const convertedAmount = await convertCurrency(amount, fromCurrency, toCurrency);
      setResult(convertedAmount);
    } catch (error) {
      console.error("Error converting currency:", error);
      setResult("Error converting currency. Please check your inputs and try again.");
    }
  };

  return (
    <div>
      {/* From currency and amount input */}
      <div className="flex items-center mt-10 mb-10">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="text-md font-medium leading-10 px-4 py-1 border-0 ring-1 ring-inset ring-gray-300 bg-white rounded-3xl text-left h-12 "
          style={{ width: '250px' }}
        >
          {/* Dropdown for selecting 'from' currency */}
          {Object.entries(currencyCodeToNameMapping).map(([currencyCode, currencyName]) => (
            <option key={currencyCode} value={currencyCode}>
              {currencyCode} - {currencyName}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="text-md font-medium leading-10 px-4 py-1 border-0 ring-1 ring-inset ring-gray-300 bg-white rounded-3xl text-center h-12 ml-4 "
          style={{ width: '80px' }}
        />
      </div>

      {/* To currency and result display */}
      <div className="flex items-center mt-4">
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="text-md font-medium leading-10 px-4 py-1 border-0 ring-1 ring-inset ring-gray-300 bg-white rounded-3xl text-left h-12 "
          style={{ width: '250px' }}
        >
          {/* Dropdown for selecting 'to' currency */}
          {Object.entries(currencyCodeToNameMapping).map(([currencyCode, currencyName]) => (
            <option key={currencyCode} value={currencyCode}>
              {currencyCode} - {currencyName}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={`${result}`}
          readOnly
          className="text-md font-medium leading-10 px-4 py-1 border-0 ring-1 ring-inset ring-gray-300 bg-white rounded-3xl text-center h-12 ml-4 "
          style={{ width: '80px' }}
        />
      </div>

      {/* Toggle and Convert buttons */}
      <div className="mt-10">
        <button
          onClick={handleToggle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Toggle
        </button>
        <button
          onClick={handleConvert}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Convert
        </button>
      </div>
    </div>
  );
};

export default CurrencyExchanger;
