import { getDB } from "../../config/mongodb";
import { ConversionRecord } from "../../types";
import { COLLECTION } from "../util/constants/DBCollections";

export async function saveRecord(record: ConversionRecord): Promise<void> {
  const db = getDB();
  await db.collection(COLLECTION).insertOne(record);
}
