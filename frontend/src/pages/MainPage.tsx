import { useState } from "react";
import CommitSuggestionBox from "../components/CommitSuggestionBox";
import DiffInput from "../components/DiffInput";
import Header from "../components/Header";

export default function MainPage() {
  const [commitMessage, setCommitMessage] = useState<string>("");

  return (
    <div className="container">
      <Header />
      <DiffInput setCommitMessage={setCommitMessage} />
      <CommitSuggestionBox message={commitMessage} />
    </div>
  );
}
