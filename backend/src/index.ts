import express from "express";
import cors from "cors";
import { generateCommitMessage } from "./llm/generateCommitMessage";
import { PrismaClient } from "./generated/prisma";

//Database connection
const prisma = new PrismaClient();

// Initialize Express app
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
    const commit = await prisma.commitHistory.create({
      data: {
        diff: diff,
        commit_message: message,
      },
    })
    console.log("Commit saved to database:", commit);
    res.json({ message });
  } catch (error) {
    console.error("Error generating commit message:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/history", async (_req, res) => {
  try{
    const commits = await prisma.commitHistory.findMany({
      orderBy: {
        timestamp: 'desc',
      },
    });
    res.json(commits);
  } catch (error) {
    console.error("Error fetching commit history:", error);
    res.status(500).json({ error: "Something went wrong" });
  }

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

