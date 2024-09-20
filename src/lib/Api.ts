import axios from 'axios';

const BASE_URL = 'https://api.binance.com/api/v3';

export const fetchData = async (symbol: string = 'BTCUSDT', interval: string = '1m') => {
  const url = `${BASE_URL}/klines?symbol=${symbol}&interval=${interval}&limit=1440`;
  const response = await axios.get(url);
  return response.data;
};
