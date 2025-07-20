import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.CURRENCY_API_URL,
  params: {
    apikey: process.env.FREE_CURRENCY_API_KEY,
  },
  timeout: 5000,
});
