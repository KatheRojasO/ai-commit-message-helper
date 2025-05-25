import { useState } from "react";
import { createCommitMessage } from "../api/diff-analysis";
import type { DiffInputProps } from "../types/types";

export default function DiffInput({setCommitMessage}: DiffInputProps) {
  const [diff, setDiff] = useState<string>("");

  const onClickHandler = async () => {
    try {
      const response = await createCommitMessage(diff);
      console.log("Response from API:", response.message);
      setCommitMessage(response.message);
      setDiff("");
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
        placeholder={
          "1. Go to your git repository and run the command: git diff\n" +
          "2. Copy the output of the command\n" + 
          "3. Paste it here"
        }
        value={diff}
        onChange={(e) => setDiff(e.target.value)}
        rows={7}
        spellCheck={false}
        aria-label="Git diff content"
      ></textarea>
      <button className="generate-button" onClick={onClickHandler}>Generate Commit Message</button>
    </div>
  );
}
