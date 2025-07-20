import { getDB } from "../../config/mongodb";
import { ConversionRecord } from "../../types";
import { COLLECTION } from "../util/constants/DBCollections";

export async function fetchAllRecords(): Promise<ConversionRecord[]> {
  const db = getDB();
  return db
    .collection<ConversionRecord>(COLLECTION)
    .find()
    .sort({ timestamp: -1 })
    .toArray();
}
