import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Define routes
app.get("/", (_req, res) => {
  res.send("Hello from Express + TypeScript!");
});

app.post("/diff/analysis", (req, res) => {
  const diffData = req.body.diff;
  console.log("Received diff data:", diffData);
  res.json({
    title: "this is a git commit title!",
    description: "this is a git commit description!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
