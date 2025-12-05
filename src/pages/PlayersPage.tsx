import { useState, useMemo } from "react";
import { characters } from "../data/player";
import type { WikiPlayer } from "../types/WikiPlayer";
import "./PlayersPage.css";

const RARITY_ORDER = ["N", "R", "SR", "SP", "SSR", "UR"];

const POS_MAP: Record<string, string> = {
  "S": "Setter",
  "MB": "Middle Blocker",
  "WS": "Wing Spiker",
  "LI": "Libero",
  "OP": "Opposite Hitter",
};

export default function PlayersPage() {
  const [positionFilter, setPositionFilter] = useState("");
  const [rarityFilter, setRarityFilter] = useState("");
  const [schoolFilter, setSchoolFilter] = useState("");
  const [search, setSearch] = useState("");

  const [showMax, setShowMax] = useState(false);

  const [selectedPlayer, setSelectedPlayer] = useState<WikiPlayer | null>(null);
  const [modalShowMax, setModalShowMax] = useState(false);

  const getRarityRank = (r: string) => RARITY_ORDER.indexOf(r.toUpperCase());

  const getStat = (p: WikiPlayer, statKey: string, useMax: boolean) => {
    if (!p.stats) return "-";
    const levelKey = useMax ? "max" : "lvl1";

    const val = p.stats[levelKey]?.[statKey] ?? p.stats[levelKey]?.[statKey.toLowerCase()];

    return val !== undefined && val !== "TBD" ? val : "-";
  };

  const filteredPlayers = useMemo(() => {
    const q = search.trim().toLowerCase();
    const targetPos = positionFilter ? POS_MAP[positionFilter] : "";

    let result = characters.filter((p) => {
      const pPos = p.position || "";
      const matchPos = !targetPos || pPos === targetPos;
      const matchRar = !rarityFilter || p.rarity === rarityFilter;
      const matchSch = !schoolFilter || p.school === schoolFilter;
      const matchSearch = !q || p.name.toLowerCase().includes(q);

      return matchPos && matchRar && matchSch && matchSearch;
    });

    result.sort((a, b) => {
      const diff = getRarityRank(b.rarity) - getRarityRank(a.rarity);
      if (diff !== 0) return diff;
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [positionFilter, rarityFilter, schoolFilter, search]);

  const openModal = (p: WikiPlayer) => {
    setSelectedPlayer(p);
    setModalShowMax(showMax);
  };

  return (
    <div className="players-page">
      <header className="page-header">
        <h1>Player Viewer</h1>
        <p>View all players and filter them by school or rarity.</p>
      </header>
      {/* --- FILTERS & CONTROLS --- */}
      <div className="controls-container">
        <div className="control-group">
          <label>Filter by Position</label>
          <select value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)}>
            <option value="">All Positions</option>
            <option value="S">S (Setter)</option>
            <option value="MB">MB (Middle Blocker)</option>
            <option value="WS">WS (Wing Spiker)</option>
            <option value="LI">LI (Libero)</option>
            <option value="OP">OP (Opposite Hitter)</option>
          </select>
        </div>
        <div className="control-group">
          <label>Filter by Rarity</label>
          <select value={rarityFilter} onChange={(e) => setRarityFilter(e.target.value)}>
            <option value="">All Rarities</option>
            <option value="UR">UR</option>
            <option value="SSR">SSR</option>
            <option value="SR">SR</option>
            <option value="R">R</option>
          </select>
        </div>
        <div className="control-group">
          <label>Filter by School</label>
          <select value={schoolFilter} onChange={(e) => setSchoolFilter(e.target.value)}>
            <option value="">All Schools</option>
            <option value="Karasuno">Karasuno</option>
            <option value="Aoba Johsai">Aoba Johsai</option>
            <option value="Nekoma">Nekoma</option>
            <option value="Date Kogyo">Date Kogyo</option>
            <option value="Shiratorizawa">Shiratorizawa</option>
            <option value="Inarizaki">Inarizaki</option>
            <option value="Kamomedai">Kamomedai</option>
            <option value="Jozenji">Jozenji</option>
            <option value="Itachiyama">Itachiyama</option>
          </select>
        </div>
        <div className="control-group search-group">
          <label>Search by Name</label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search players..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="clear-btn" onClick={() => setSearch("")}>✕</button>
            )}
          </div>
        </div>
        <div className="control-group">
          <label>Grid View</label>
          <button className="toggle-lvl-btn" onClick={() => setShowMax(!showMax)}>
            {showMax ? "Show Level 1" : "Show Max LVL"}
          </button>
        </div>
      </div>
      {/* --- PLAYER GRID --- */}
      <div className="player-grid">
        {filteredPlayers.length === 0 && (
          <div className="no-results">No players found matching filters.</div>
        )}
        {filteredPlayers.map((p, i) => (
          <div key={i} className="player-card-full">
            <div className="card-header">
              <span className="p-name" onClick={() => openModal(p)} style={{ cursor: "pointer" }}>{p.name}</span>
              <div className="p-badges">
                <span className="badge">{p.school}</span>
                <span className={`badge rarity-${p.rarity}`}>{p.rarity}</span>
              </div>
            </div>
            <div className="card-body">
              <div className="card-details">
                <div className="stats-block">
                  <h4>{showMax ? "Max Stats" : "Level 1 Stats"}</h4>
                  <div className="stats-grid-view">
                    <div className="stat"><span>Serve</span> <b>{getStat(p, "Serve", showMax)}</b></div>
                    {getStat(p, "Quick_Attack", showMax) !== "-" && (
                      <div className="stat"><span>Quick</span> <b>{getStat(p, "Quick_Attack", showMax)}</b></div>
                    )}
                    {getStat(p, "Power_Attack", showMax) !== "-" && (
                      <div className="stat"><span>Power</span> <b>{getStat(p, "Power_Attack", showMax)}</b></div>
                    )}
                    <div className="stat"><span>Set</span> <b>{getStat(p, "Set", showMax)}</b></div>
                    <div className="stat"><span>Receive</span> <b>{getStat(p, "Receive", showMax)}</b></div>
                    <div className="stat"><span>Block</span> <b>{getStat(p, "Block", showMax)}</b></div>
                    <div className="stat"><span>Save</span> <b>{getStat(p, "Save", showMax)}</b></div>
                  </div>
                </div>
                {p.skills && p.skills.length > 0 && (
                  <div className="skills-block">
                    <h4>Skills</h4>
                    <div className="skills-list">
                      {p.skills.map((skill, idx) => (
                        <div key={idx} className="skill-item">
                          <div className="skill-header">
                            <div className="skill-name">{skill.name}</div>
                          </div>
                          <div className="skill-desc">{skill.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>              
            </div>
          </div>
        ))}
      </div>
      {/* --- DETAILED LIGHTBOX MODAL --- */}
      {selectedPlayer && (
        <div className="lightbox-overlay" onClick={() => setSelectedPlayer(null)}>
          <div className="lightbox-card-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedPlayer(null)}>✕</button>
            <div className="modal-layout">
              {/* Left: Image */}
              <div className="modal-img-col">
                <img
                  src={`data/img-player/${selectedPlayer.img}`}
                  alt={selectedPlayer.name}
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
              </div>
              {/* Right: Details */}
              <div className="modal-info-col">
                <h2 className="modal-title">{selectedPlayer.name}</h2>

                <div className="modal-badges">
                  <span className="badge" style={{ background: '#444', color: '#ccc' }}>{selectedPlayer.school}</span>
                  <span className="badge" style={{ background: '#444', color: '#ccc' }}>{selectedPlayer.position}</span>
                  <span className={`badge rarity-${selectedPlayer.rarity}`}>{selectedPlayer.rarity}</span>
                </div>
                {/* STATS BOX WITH TOGGLE */}
                <div className="modal-stats-box">
                  <div className="stats-header-row">
                    <h3>Statistics</h3>
                    <div className="mini-toggle-wrapper" onClick={() => setModalShowMax(!modalShowMax)}>
                      <span className={`toggle-label ${!modalShowMax ? "active" : ""}`}>Lv.1</span>
                      <div className={`mini-switch ${modalShowMax ? "on" : "off"}`}>
                        <div className="mini-slider"></div>
                      </div>
                      <span className={`toggle-label ${modalShowMax ? "active" : ""}`}>Max</span>
                    </div>
                  </div>
                  <div className="stats-grid large">
                    <div className="stat-item"><span className="label">Serve</span> <span className="val">{getStat(selectedPlayer, "Serve", modalShowMax)}</span></div>
                    <div className="stat-item"><span className="label">Set</span> <span className="val">{getStat(selectedPlayer, "Set", modalShowMax)}</span></div>
                    <div className="stat-item"><span className="label">Receive</span> <span className="val">{getStat(selectedPlayer, "Receive", modalShowMax)}</span></div>
                    <div className="stat-item"><span className="label">Block</span> <span className="val">{getStat(selectedPlayer, "Block", modalShowMax)}</span></div>
                    <div className="stat-item"><span className="label">Save</span> <span className="val">{getStat(selectedPlayer, "Save", modalShowMax)}</span></div>
                    {getStat(selectedPlayer, "Power_Attack", modalShowMax) !== "-" && (
                      <div className="stat-item"><span className="label">Power</span> <span className="val">{getStat(selectedPlayer, "Power_Attack", modalShowMax)}</span></div>
                    )}
                    {getStat(selectedPlayer, "Quick_Attack", modalShowMax) !== "-" && (
                      <div className="stat-item"><span className="label">Quick</span> <span className="val">{getStat(selectedPlayer, "Quick_Attack", modalShowMax)}</span></div>
                    )}
                  </div>
                </div>
                {/* SKILLS IN MODAL */}
                {selectedPlayer.skills && selectedPlayer.skills.length > 0 && (
                  <div className="modal-desc-box" style={{ marginTop: 20 }}>
                    <h3>Skills</h3>
                    <div className="skills-list">
                      {selectedPlayer.skills.map((skill, idx) => (
                        <div key={idx} className="skill-item" style={{ background: '#222', padding: '10px', marginBottom: '8px', borderRadius: '6px', border: '1px solid #444' }}>
                          <div className="skill-name" style={{ fontSize: '13px', color: '#fbbf24', fontWeight: 'bold', marginBottom: '4px' }}>{skill.name}</div>
                          <div className="skill-desc" style={{ fontSize: '12px', color: '#ccc', lineHeight: '1.4' }}>{skill.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}