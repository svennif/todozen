import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri);

async function testConnection() {
  try {
    await client.connect();
    console.log("Connected to the database");
    await client.db("todo_db").command({ ping: 1 });
    console.log("Ping successful");
  } catch (error) {
    console.error("Connection error:", error);
  } finally {
    await client.close();
  }
}

testConnection();
