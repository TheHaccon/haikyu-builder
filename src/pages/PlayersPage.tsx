import { useState, useMemo } from "react";
import { characters } from "../data/player";
import type { WikiPlayer } from "../types/WikiPlayer"; // <--- Updated Import
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

    const getRarityRank = (r: string) => RARITY_ORDER.indexOf(r.toUpperCase());

    // Helper to safely get stats
    const getStat = (p: WikiPlayer, statKey: string) => {
        if (!p.stats) return "-";
        const levelKey = showMax ? "max" : "lvl1";

        // Access stats using the exact keys from your JSON data
        const val = p.stats[levelKey]?.[statKey];
        return val !== undefined && val !== "TBD" ? val : "-";
    };

    const filteredPlayers = useMemo(() => {
        const q = search.trim().toLowerCase();
        const targetPos = positionFilter ? POS_MAP[positionFilter] : "";

        let result = characters.filter((p) => {
            // Match "Middle Blocker" to "MB" filter
            const matchPos = !targetPos || p.position === targetPos;
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

    return (
        <div className="players-page">
            <header className="page-header">
                <h1>Player Viewer</h1>
                <p>View all players and filter them by school or rarity.</p>
            </header>
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
                    <label>Level View</label>
                    <button className="toggle-lvl-btn" onClick={() => setShowMax(!showMax)}>
                        {showMax ? "Show Level 1" : "Show Max LVL"}
                    </button>
                </div>
            </div>
            <div className="player-grid">
                {filteredPlayers.length === 0 && (
                    <div className="no-results">No players found matching filters.</div>
                )}
                {filteredPlayers.map((p, i) => (
                    <div key={i} className="player-card-full">
                        <div className="card-header">
                            <span className="p-name">{p.name}</span>
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
                                        <div className="stat"><span>Serve</span> <b>{getStat(p, "Serve")}</b></div>
                                        {getStat(p, "Quick_Attack") !== "-" && (
                                            <div className="stat"><span>Quick</span> <b>{getStat(p, "Quick_Attack")}</b></div>
                                        )}
                                        {getStat(p, "Power_Attack") !== "-" && (
                                            <div className="stat"><span>Power</span> <b>{getStat(p, "Power_Attack")}</b></div>
                                        )}
                                        <div className="stat"><span>Set</span> <b>{getStat(p, "Set")}</b></div>
                                        <div className="stat"><span>Receive</span> <b>{getStat(p, "Receive")}</b></div>
                                        <div className="stat"><span>Block</span> <b>{getStat(p, "Block")}</b></div>
                                        <div className="stat"><span>Save</span> <b>{getStat(p, "Save")}</b></div>
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
        </div>
    );
}