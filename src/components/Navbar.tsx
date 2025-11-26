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
        <li className="nav-disabled">
          <span>
            Memory <small>(coming soon)</small>
          </span>
        </li>
                <li className="nav-disabled">
          <span>
            Versus <small>(coming soon)</small>
          </span>
        </li>
                <li className="nav-disabled">
          <span>
            About <small>(coming soon)</small>
          </span>
        </li>
        <div className="posless-wrap nav-disabled" >
          <span className="posless-label">Normal</span>
          <label className="posless-switch">
            <input type="checkbox" id="positionlessToggle" disabled />
            <span className="posless-slider" />
          </label>
          <span className="posless-label">Positionless</span>
        </div>
      </ul>
    </nav>
  );
}
