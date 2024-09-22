import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();

  await client.db("todo_db").command({ ping: 1 });
  console.log(
    "Successfully connected to the database"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("tasks");

export default db;