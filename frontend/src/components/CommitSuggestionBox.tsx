export default function CommitSuggestionBox() {
  return (
    <div className="result-section-container">
      <div className="result-header">
        <h3 className="result-title">💡 Suggested Commit Message</h3>
        <button className="copy-button">📋 Copy</button>
      </div>

      <div className="commit-suggestion">
        <p>Generated commit</p>
      </div>
    </div>
  );
}
