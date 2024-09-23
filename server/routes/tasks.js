import express from "express";
import connectToDatabase from "../db/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("tasks");
    const results = await collection.find({}).toArray();
    console.log(results);
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
