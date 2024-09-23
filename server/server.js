import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";  // Adjust path as necessary

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5050;

const app = express();
app.use(cors());
app.use(express.json());

// Log each request
// app.use((req, res, next) => {
//   console.log(`${req.method} request to ${req.url}`);
//   next();
// });

app.use("/tasks", taskRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
