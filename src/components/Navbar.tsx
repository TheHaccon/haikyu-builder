import { useState } from "react";
import { useTeamStore } from "../store/teamStore";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const positionless = useTeamStore((s) => s.positionless);
  const togglePositionless = useTeamStore((s) => s.togglePositionless);
  const location = useLocation();
  const getLinkClass = (path: string) => {
    return location.pathname === path ? "active" : "";
  };
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
        <li>
          <Link
            to="/"
            className={getLinkClass("/")}
            onClick={() => setMenuOpen(false)}
          >
            Team Builder
          </Link>
        </li>
        <li>
          <Link
            to="/memory"
            className={getLinkClass("/memory")}
            onClick={() => setMenuOpen(false)}
          >
            Memory
          </Link>
        </li>
        <li>
          <Link
            to="/resources"
            className={getLinkClass("/resources")}
            onClick={() => setMenuOpen(false)}
          >
            Resources
          </Link>
        </li>
        <li className="nav-disabled"><span>Bonds <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>Players <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>Versus <small>(soon)</small></span></li>
        <li className="nav-disabled"><span>About <small>(soon)</small></span></li>
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