import { useState } from "react";
import { useTeamStore } from "../store/teamStore";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const positionless = useTeamStore((s) => s.positionless);
  const togglePositionless = useTeamStore((s) => s.togglePositionless);

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
        {/* Left side links */}
        <li><a href="#team-builder">Team Builder</a></li>
        
        {/* Removed "Manage Teams" button since tabs on Board handle it now */}

        <li className="nav-disabled"><span>Bonds <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>Players <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>Resources <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>Memory <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>Versus <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>About <small>(soon)</small></span></li>

        {/* Positionless Switch */}
        <div className="posless-wrap">
          <span className="posless-label">Normal</span>
          <label className="posless-switch">
            <input 
              type="checkbox" 
              id="positionlessToggle" 
              checked={positionless}
              onChange={togglePositionless}
            />
            <span className="posless-slider" />
          </label>
          <span className="posless-label">Positionless</span>
        </div>
      </ul>
    </nav>
  );
}