import { ConversionRecord } from "../../types";
import { fetchAllRecords } from "../repos/historyRepo";

export async function getHistory(): Promise<ConversionRecord[]> {
  return await fetchAllRecords();
}
