import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// No need to import teamStore here anymore!

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const getLinkClass = (path: string) => location.pathname === path ? "active" : "";

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
        <li><Link to="/" className={getLinkClass("/")} onClick={() => setMenuOpen(false)}>Team Builder</Link></li>
        <li><Link to="/memory" className={getLinkClass("/memory")} onClick={() => setMenuOpen(false)}>Memory</Link></li>
        <li><Link to="/resources" className={getLinkClass("/resources")} onClick={() => setMenuOpen(false)}>Resources</Link></li>
        
        {/* Removed Disabled Links for clarity, add them back if you want */}
        <li className="nav-disabled"><span>Bonds <small>(soon)</small></span></li>
      </ul>
      {/* No Toggles here anymore */}
    </nav>
  );
}