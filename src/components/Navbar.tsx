import { useState } from "react";
import { useTeamStore } from "../store/teamStore";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const positionless = useTeamStore((s) => s.positionless);
  const togglePositionless = useTeamStore((s) => s.togglePositionless);
  const location = useLocation();

  return (
    <nav className="app-nav">
      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        
        {/* TEAM BUILDER LINK */}
        <li>
          <Link 
            to="/" 
            onClick={() => setMenuOpen(false)}
          >
            Team Builder
          </Link>
        </li>

        {/* MEMORY LINK */}
        <li>
          <Link 
            to="/memory" 
            onClick={() => setMenuOpen(false)}
          >
            Memory
          </Link>
        </li>

        {/* Disabled Links */}
        <li className="nav-disabled"><span>Bonds <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>Players <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>Resources <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>Versus <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>About <small>(soon)</small></span></li>

        {/* Positionless Switch - Only show on Home Page */}
        {location.pathname === "/" && (
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
        )}
      </ul>
    </nav>
  );
}