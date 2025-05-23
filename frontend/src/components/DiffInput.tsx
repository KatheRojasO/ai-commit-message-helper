export default function DiffInput() {
  return (
    <div className="input-section-container">
      <label className="input-label">Paste your git diff:</label>
      <textarea
        className="diff-input"
        placeholder="1. Go to your git repository and run the command: git diff  2. Copy the output of the command 3. Paste it here"
      ></textarea>
      <button className="generate-button">Generate Commit Message</button>
    </div>
  );
}
