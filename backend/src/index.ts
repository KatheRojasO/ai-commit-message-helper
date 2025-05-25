import express from "express";
import cors from "cors";
import { generateCommitMessage } from "./llm/generateCommitMessage";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Define routes
app.get("/", (_req, res) => {
  res.send("Hello from Express + TypeScript!");
});

app.post("/diff/analysis", async (req, res) => {
  try {
    const { diff } = req.body;
    const message = await generateCommitMessage(diff);
    res.json({ message });
  } catch (error) {
    console.error("Error generating commit message:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
