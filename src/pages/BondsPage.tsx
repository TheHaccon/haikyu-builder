import { useState, useMemo } from "react";
import { synergies } from "../data/synergies";
import { characters } from "../data/characters-global"; // Needed to look up schools
import "./BondsPage.css";

const SCHOOLS = [
  "Karasuno", "Aoba Johsai", "Nekoma", "Date Kogyo", 
  "Fukurodani", "Shiratorizawa", "Inarizaki", "Kamomedai", 
  "Jozenji", "Itachiyama"
];

export default function BondsPage() {
  const [search, setSearch] = useState("");
  const [schoolFilter, setSchoolFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // --- HELPER: FIND SCHOOL FOR A BOND ---
  // Most bonds don't have a 'school' property, so we check the first member's school.
  const getBondSchool = (bond: any) => {
    if (bond.school) return bond.school; // Direct match (School Buffs)
    if (bond.members && bond.members.length > 0) {
      // Find the player in the character DB
      const firstMemberName = bond.members[0];
      // Loose match logic (data might say "Hinata SSR" but char is "Shoyo Hinata SSR")
      const player = characters.find(c => 
        c.name === firstMemberName || c.name.includes(firstMemberName)
      );
      return player ? player.school : "Unknown";
    }
    return "General";
  };

  // --- HELPER: FIND PLAYER IMAGE ---
  const getPlayerImage = (fullname: string) => {
    const player = characters.find(c => c.name === fullname);
    return player ? player.img : null;
  };

  const filteredBonds = useMemo(() => {
    const q = search.toLowerCase();

    return synergies.filter(s => {
      const sSchool = getBondSchool(s);
      
      const matchSearch = !q || s.name.toLowerCase().includes(q);
      const matchSchool = !schoolFilter || sSchool === schoolFilter;
      const matchCat = !categoryFilter || s.category === categoryFilter;

      return matchSearch && matchSchool && matchCat;
    });
  }, [search, schoolFilter, categoryFilter]);

  return (
    <div className="bonds-page">
      <header className="page-header">
        <h1>Bond Library</h1>
        <p>Browse all synergies, team buffs, and character combinations.</p>
      </header>

      {/* --- CONTROLS --- */}
      <div className="controls-container">
        
        <div className="control-group">
          <label>Filter by School</label>
          <select value={schoolFilter} onChange={(e) => setSchoolFilter(e.target.value)}>
            <option value="">All Schools</option>
            {SCHOOLS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="control-group">
          <label>Category</label>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All Categories</option>
            <option value="school">School Buffs</option>
            <option value="deployment">Deployment Bonds</option>
            <option value="stats">Stat Bonds</option>
          </select>
        </div>

        <div className="control-group search-group">
          <label>Search Bonds</label>
          <div style={{position: 'relative'}}>
            <input 
                type="text" 
                placeholder="Search name..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
                <button className="clear-btn" onClick={() => setSearch("")}>✕</button>
            )}
          </div>
        </div>
      </div>

      {/* --- GRID --- */}
      <div className="bond-grid">
        {filteredBonds.length === 0 && (
            <div className="no-results">No bonds found.</div>
        )}

        {filteredBonds.map((bond, i) => (
            <div key={i} className="bond-card-full">
                <div className="bond-header">
                    <div className="bond-title-row">
                        <span className="b-name">{bond.name}</span>
                        <span className={`b-cat cat-${bond.category}`}>{bond.category}</span>
                    </div>
                    <span className="b-school">{getBondSchool(bond)}</span>
                </div>

                {/* MEMBERS ROW */}
                {bond.members && bond.members.length > 0 && (
                    <div className="bond-members-row">
                        {bond.members.map((m: string) => {
                            const img = getPlayerImage(m);
                            return (
                                <div key={m} className="mini-member" title={m}>
                                    {img ? (
                                        <img src={`data/${img}`} alt={m} onError={(e) => e.currentTarget.style.display='none'} />
                                    ) : (
                                        <div className="no-img">?</div>
                                    )}
                                    <span className="member-name">{m}</span>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* DESCRIPTION */}
                <div className="bond-body">
                    {typeof bond.description === "string" ? (
                        <p>{bond.description}</p>
                    ) : (
                        <ul className="buff-list">
                            {Object.entries(bond.description).map(([name, buff]) => (
                                <li key={name}>
                                    <strong style={{color: '#fbbf24'}}>{name}:</strong> {buff}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="bond-footer">
                    <span className="activation-tag">
                        Trigger: {bond.activation.type === "count" ? `Count (${bond.activation.min})` : "Specific Members"}
                    </span>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}