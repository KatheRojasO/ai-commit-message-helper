import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { countChangedFiles, extractChangedFiles, summarizeLineChanges } from "../utils";
import { Link } from "react-router-dom";

interface Commit {
  id: string;
  commit_message: string;
  diff: string;
  timestamp: string;
}

export default function History() {
  const [commitHistory, setCommitHistory] = useState<Commit[]>([]);

  useEffect(() => {
    async function fetchCommitHistory() {
      try {
        const response = await fetch("http://localhost:3000/history");
        const data = await response.json();
        setCommitHistory(data);
      } catch (error) {
        console.error("Error fetching commit history:", error);
      }
    }
    fetchCommitHistory();
  }, []);

  const commitList = commitHistory.map((commit) => (
    <div key={commit.id} className="commit-item">
      <h3 className="commit-title">{commit.commit_message}</h3>
      <div className="commit-info">
        <span className="commit-timestamp">
          🕒{" "}
          {formatDistanceToNow(new Date(commit.timestamp), {
            addSuffix: true,
          })}
        </span>
        <span className="commit-differences">
          📁 {countChangedFiles(commit.diff)}{" "}
          {countChangedFiles(commit.diff) <= 1 ? "file changed" : "files changed"}
        </span>
        <span className="commit-lines">
          {(() => {
            const { added, removed } = summarizeLineChanges(commit.diff);
            return `± +${added} -${removed} lines`;
          })()}
        </span>
        <button className="delete-button">🗑️ Delete</button>
      </div>
      <div className="commit-suggestion">
        <p>{commit.diff}</p>
      </div>
      {(() => {
        const changedFiles = extractChangedFiles(commit.diff);
        return (
          <div className="files-changed">
            {changedFiles.map((filePath: string) => (
              <span className="file-tag" key={filePath}>
                {filePath}
              </span>
            ))}
          </div>
        );
      })()}
    </div>
  ));

  return (
    <div className="container">
      <div className="title-history-container">
        <div className="back-button-container">
          <button className="nav-buttons back-button">
            <Link to="/">Go back</Link>
          </button>
        </div>
        <div className="logo-container">
          <span className="logo-icon">📋</span>
          <h1 className="history-title">Commit History</h1>
        </div>
      </div>

      {commitList}
    </div>
  );
}
