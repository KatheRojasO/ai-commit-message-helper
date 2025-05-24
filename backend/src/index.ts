import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hello from Express + TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
