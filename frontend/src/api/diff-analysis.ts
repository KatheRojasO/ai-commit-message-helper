import type { CommitResponse } from "../types/types";

export async function getDiffAnalysis(): Promise<string> {
  const response = await fetch("http://localhost:3000/");
  return response.json();
}

export async function createCommitMessage(diff: string): Promise<CommitResponse> {
  const response = await fetch("http://localhost:3000/diff/analysis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ diff }),
  });

  if (!response.ok) {
    throw new Error("Failed to create commit message");
  }

  return response.json();
}
