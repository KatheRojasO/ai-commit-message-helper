import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo-icon">🤖</div>
        <h1 className="app-title">AI Commit Message Helper</h1>
      </div>
      <button className="nav-buttons history-button">
        <Link to="/history">📚 History</Link>
      </button>
    </div>
  );
}
