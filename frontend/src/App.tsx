import { useState } from "react";
import CommitSuggestionBox from "./components/CommitSuggestionBox";
import DiffInput from "./components/DiffInput";
import Header from "./components/Header";
import "./style/styles.css";

export default function App() {
  const [commitMessage, setCommitMessage] = useState<string>("");

  return (
    <div className="container">
      <Header />
      <DiffInput setCommitMessage={setCommitMessage} />
      <CommitSuggestionBox message={commitMessage} />
    </div>
  );
}
