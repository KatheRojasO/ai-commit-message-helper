import { useState } from "react";
import { createCommitMessage } from "../api/diff-analysis";

export default function DiffInput() {
  const [diff, setDiff] = useState<string>("");

  const onClickHandler = async () => {
    try {
      const response = await createCommitMessage(diff);
      console.log("Commit message generated:", response);
    } catch (error) {
      console.error("Error generating commit message:", error);
    }
  };

  return (
    <div className="input-section-container">
      <label className="input-label">Paste your git diff:</label>
      <textarea
        className="diff-input"
        placeholder="1. Go to your git repository and run the command: git diff  2. Copy the output of the command 3. Paste it here"
        value={diff}
        onChange={(e) => setDiff(e.target.value)}
      ></textarea>
      <button className="generate-button" onClick={onClickHandler}>Generate Commit Message</button>
    </div>
  );
}
