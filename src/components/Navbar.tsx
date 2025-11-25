// src/components/Navbar.tsx
import { useState } from "react";
//import "./Navbar.css"; // we'll add this later, for now it can be missing

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="app-nav">
      {/* Mobile hamburger */}
      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* Left side links – we keep them simple for now */}
        <li>
          <a href="#team-builder">Team Builder</a>
        </li>
        <li className="nav-disabled">
          <span>
            Bonds <small>(coming soon)</small>
          </span>
        </li>
        <li className="nav-disabled">
          <span>
            Players <small>(coming soon)</small>
          </span>
        </li>
        <li className="nav-disabled">
          <span>
            Resources counter <small>(coming soon)</small>
          </span>
        </li>

        {/* Right side: server + positionless toggle (visual only for now) */}
        <div id="toolbar-top" className="toolbar-top">
          <span className="server-label">Server:</span>
          <div className="server-toggle">
            <div className="server-option active" data-server="global">
              Global
            </div>
            <div className="server-option" data-server="japan">
              Japan
            </div>
          </div>

          <div className="posless-wrap">
            <span className="posless-label">Normal</span>
            <label className="posless-switch">
              <input type="checkbox" id="positionlessToggle" />
              <span className="posless-slider" />
            </label>
            <span className="posless-label">Positionless</span>
          </div>
        </div>
      </ul>
    </nav>
  );
}
