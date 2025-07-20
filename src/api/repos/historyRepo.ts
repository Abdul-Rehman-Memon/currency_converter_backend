import { getDB } from "../../config/mongodb";
import { ConversionRecord } from "../../types";

const COLLECTION = "conversion_history";

export async function saveRecord(record: ConversionRecord): Promise<void> {
  const db = getDB();
  await db.collection(COLLECTION).insertOne(record);
}

export async function fetchAllRecords(): Promise<ConversionRecord[]> {
  const db = getDB();
  return db
    .collection<ConversionRecord>(COLLECTION)
    .find()
    .sort({ timestamp: -1 })
    .toArray();
}
