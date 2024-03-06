import React, { useState } from 'react';
import axios from 'axios';

const currencyCodeToNameMapping = {
    "USD": "United States Dollar",
    "GBP": "British Pound",
    "EUR": "Euro",
    "CHF": "Swiss Franc",
    "NOK": "Norwegian Krone",
    "SEK": "Swedish Krona",
    "CAD": "Canadian Dollar",
    "MXN": "Mexican Peso",
    "JPY": "Japanese Yen",
    "CNY": "Chinese Yuan",
    "INR": "Indian Rupee",
    "RUB": "Russian Ruble",
    "KRW": "South Korean Won",
    "SAR": "Saudi Riyal",
    "ILS": "Israeli New Shekel",
    "BRL": "Brazilian Real",
    "ARS": "Argentine Peso",
    "ZAR": "South African Rand",
    "NGN": "Nigerian Naira",
    "AUD": "Australian Dollar",
    "NZD": "New Zealand Dollar",
    "TRY": "Turkish Lira",
    "PLN": "Polish Zloty",
    "CZK": "Czech Koruna",
    "HUF": "Hungarian Forint",
    "THB": "Thai Baht",
    "SGD": "Singapore Dollar",
    "MYR": "Malaysian Ringgit",
    "PHP": "Philippine Peso",
    "IDR": "Indonesian Rupiah",
    "VND": "Vietnamese Dong",
    "EGP": "Egyptian Pound",
    "PKR": "Pakistani Rupee",
    "BDT": "Bangladeshi Taka",
    "COP": "Colombian Peso",
    "CLP": "Chilean Peso",
    "PEN": "Peruvian Sol",
    "VES": "Venezuelan Bolívar",
    "QAR": "Qatari Rial",
    "AED": "United Arab Emirates Dirham",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "AZN": "Azerbaijani Manat",
    "BYN": "Belarusian Ruble",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BGN": "Bulgarian Lev",
    "HRK": "Croatian Kuna",
    "DKK": "Danish Krone",
    "GEL": "Georgian Lari",
    "GIP": "Gibraltar Pound",
    "ISK": "Icelandic Króna",
    "MKD": "Macedonian Denar",
    "MDL": "Moldovan Leu",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "UAH": "Ukrainian Hryvnia",
    "MAD": "Morocan Dirham"
};

async function convertCurrency(amount, fromCurrency, toCurrency) {
  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    if (data && data.rates) {
      const rate = data.rates[toCurrency];
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

const CurrencyExchanger = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(100);
  const [result, setResult] = useState('');

  const handleToggle = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setResult('');
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

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
      <div className="flex items-center mt-10 mb-10">

        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="text-md font-medium leading-10 px-4 py-1 border-0 ring-1 ring-inset ring-gray-300 bg-white rounded-3xl text-left h-12 "
          style={{ width: '250px' }}
        >
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


      <div className="flex items-center mt-4">
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="text-md font-medium leading-10 px-4 py-1 border-0 ring-1 ring-inset ring-gray-300 bg-white rounded-3xl text-left h-12 "
          style={{ width: '250px' }}
        >
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
