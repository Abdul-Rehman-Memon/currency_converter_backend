import { ConversionRequest, ConversionRecord } from "../../types";
import { saveRecord, fetchAllRecords } from "../repos/historyRepo";
import {
  getCurrencyList as getCurrencies,
  getExchangeRate,
} from "../util/apis/currencyAPI";

export async function convertCurrency(
  req: ConversionRequest
): Promise<ConversionRecord> {
  const { base_currency, currencies, amount } = req;
  const resp = await getExchangeRate(req);
  const rate = resp.data[currencies];
  const result = req.amount * rate;
  const record: ConversionRecord = {
    base_currency,
    currencies,
    amount,
    rate,
    result,
    timestamp: Date.now(),
  };
  await saveRecord(record);
  return record;
}

export async function getHistory(): Promise<ConversionRecord[]> {
  return await fetchAllRecords();
}

export async function getCurrencyList(): Promise<void> {
  return await getCurrencies();
}
