import express from "express";
import connectToDatabase from "../db/connection.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("tasks");
    const results = await collection.find({}).toArray();
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Get single
router.get("/:id", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("tasks");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default router;
