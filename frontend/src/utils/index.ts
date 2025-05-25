import type { LineChangeSummary } from "../types/types";

export function countChangedFiles(diff: string): number {
  const lines = diff.split("\n");
  const fileChangeLines = lines.filter(line => line.startsWith("diff --git"));
  return fileChangeLines.length;
}

export function summarizeLineChanges(diff: string): LineChangeSummary {
  const lines = diff.split("\n");

  let added = 0;
  let removed = 0;

  for (const line of lines) {
    if (line.startsWith("+") && !line.startsWith("+++")) {
      added++;
    } else if (line.startsWith("-") && !line.startsWith("---")) {
      removed++;
    }
  }

  return { added, removed };
}

export function extractChangedFiles(diff: string): string[] {
  const lines = diff.split("\n");
  const filePaths = new Set<string>();

  lines.forEach((line) => {
    const match = line.match(/^diff --git a\/.+ b\/(.+)/);
    if (match) {
      filePaths.add(match[1]);
    }
  });

  return Array.from(filePaths);
}