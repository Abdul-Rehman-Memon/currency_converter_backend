import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
let db: Db;

export async function connectDB(): Promise<void> {
  if (!db) {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("✅ Connected to MongoDB");
  }
}

export function getDB(): Db {
  if (!db) throw new Error("Database not connected");
  return db;
}
