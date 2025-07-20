// import { MongoClient, Db } from "mongodb";

// const uri = process.env.MONGODB_URI!;
// const client = new MongoClient(uri);
// let db: Db;

// export async function connectDB(): Promise<void> {
//   if (!db) {
//     await client.connect();
//     db = client.db(process.env.DB_NAME);
//     console.log("✅ Connected to MongoDB");
//   }
// }

// export function getDB(): Db {
//   if (!db) throw new Error("Database not connected");
//   return db;
// }

import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
if (!uri) throw new Error("Missing MONGODB_URI");

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectDB(): Promise<Db> {
  if (cachedDb) return cachedDb;

  if (!cachedClient) {
    cachedClient = new MongoClient(uri, {
      connectTimeoutMS: 60000,
      serverSelectionTimeoutMS: 60000,
    });
    await cachedClient.connect();
  }

  const dbName = process.env.DB_NAME;
  if (!dbName) throw new Error("Missing DB_NAME");
  cachedDb = cachedClient.db(dbName);

  console.log("✅ MongoDB connected");
  return cachedDb;
}
