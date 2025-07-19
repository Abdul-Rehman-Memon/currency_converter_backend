import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.freecurrencyapi.com/v1';

interface CurrencyResponse {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

interface ExchangeRateResponse {
  [key: string]: number;
}

export const getCurrencies = async () => {
  const response = await axios.get<{ data: CurrencyResponse }>(
    `${BASE_URL}/currencies`,
    { params: { apikey: API_KEY } }
  );
  return response.data.data;
};

export const convertCurrency = async (
  from: string,
  to: string,
  amount: number
) => {
  const response = await axios.get<{ data: ExchangeRateResponse }>(
    `${BASE_URL}/latest`,
    { params: { apikey: API_KEY, base_currency: from } }
  );
  
  const rate = response.data.data[to];
  if (!rate) throw new Error('Invalid currency code');
  
  return amount * rate;
};