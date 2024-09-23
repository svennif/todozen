import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ATLAS_URI || "";
let db = null;

async function connectToDatabase() {
  if (db) return db;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    console.log("Successfully connected to the database");
    db = client.db("todo_db");
    return db;
  } catch (err) {
    console.error("Failed to connect to the database", err);
    throw err;
  }
}

export default connectToDatabase;
