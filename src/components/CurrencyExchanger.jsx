import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency1, setSelectedCurrency1] = useState('');
  const [selectedCurrency2, setSelectedCurrency2] = useState('');
  const [amount, setAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const API_KEY = 'T47yNL4V8FyuW3kVK9Sjc2rXNELA9E';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.amdoren.com/api/currency.php?api_key=${API_KEY}`);
        setCurrencies(Object.keys(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCurrencyChange1 = (e) => {
    setSelectedCurrency1(e.target.value);
  };

  const handleCurrencyChange2 = (e) => {
    setSelectedCurrency2(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        if (selectedCurrency1 && selectedCurrency2) {
          const response = await axios.get(
            `https://www.amdoren.com/api/currency.php?api_key=${API_KEY}&from=${selectedCurrency1}&to=${selectedCurrency2}`
          );
          setExchangeRate(response.data.rate);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchExchangeRate();
  }, [selectedCurrency1, selectedCurrency2]);

  const convertedAmount = amount * exchangeRate;

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>Select source currency:</label>
        <select value={selectedCurrency1} onChange={handleCurrencyChange1}>
          {currencies.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Select target currency:</label>
        <select value={selectedCurrency2} onChange={handleCurrencyChange2}>
          {currencies.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Enter amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      {exchangeRate !== 0 && (
        <p>{amount} {selectedCurrency1} = {convertedAmount} {selectedCurrency2}</p>
      )}
    </div>
  );
};

export default CurrencyConverter;
