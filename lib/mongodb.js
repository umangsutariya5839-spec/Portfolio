import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "umang_portfolio";

let cached = global._mongo;
if (!cached) cached = global._mongo = { client: null, promise: null };

export const hasDatabase = Boolean(uri);

export async function getDb() {
  if (!uri) return null;
  if (cached.client) return cached.client.db(dbName);
  if (!cached.promise) {
    cached.promise = new MongoClient(uri).connect();
  }
  cached.client = await cached.promise;
  return cached.client.db(dbName);
}
