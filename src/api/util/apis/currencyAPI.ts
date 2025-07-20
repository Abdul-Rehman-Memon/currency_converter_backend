import { axiosClient } from "../../../config/axiosClient";
import { ConversionRequest } from "../../../types";

const apikey = process.env.CURRENCY_API_KEY;

export const getCurrencyList = async (): Promise<void> => {
  console.log({});
  const resp = await axiosClient.get("/currencies", { params: { apikey } });
  return resp.data;
};

export const getExchangeRate = async (req: ConversionRequest): Promise<any> => {
  const { base_currency, currencies } = req;
  const payload = { base_currency, currencies, apikey };
  const resp = await axiosClient.get("/latest", {
    params: payload,
  });
  return resp.data;
};
