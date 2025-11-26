import { useState, useMemo } from "react";
import { MEMORIES } from "../data/memories";
import type { Memory, StatValue } from "../types/Memory";
import "./MemoryPage.css"; // We will create this next

const RARITY_ORDER = ["N", "R", "SR", "SP", "SSR", "UR"];

export default function MemoryPage() {
    const [positionFilter, setPositionFilter] = useState("");
    const [rarityFilter, setRarityFilter] = useState("");
    const [search, setSearch] = useState("");
    const [showMax, setShowMax] = useState(false);
    const [sortConfig, setSortConfig] = useState<{ key: "position" | "rarity"; dir: "asc" | "desc" }>({
        key: "rarity",
        dir: "desc",
    });
    const getRarityRank = (r: string) => RARITY_ORDER.indexOf(r.toUpperCase());
    const getDesc = (m: Memory) => {
        if (typeof m.description === "string") return m.description;
        return showMax ? m.description.max : m.description.lvl1;
    };
    const getStat = (val: StatValue | undefined) => {
        if (!val) return "-";
        return showMax ? val.max : val.lvl1;
    };
    const handleSort = (key: "position" | "rarity") => {
        setSortConfig((prev) => ({
            key,
            dir: prev.key === key && prev.dir === "desc" ? "asc" : "desc",
        }));
    };
    const filteredMemories = useMemo(() => {
        let result = MEMORIES.filter((m) => {
            const matchPos = !positionFilter || m.position === positionFilter;
            const matchRar = !rarityFilter || m.rarity === rarityFilter;

            const descText = getDesc(m).toLowerCase();
            const matchSearch = !search ||
                m.name.toLowerCase().includes(search.toLowerCase()) ||
                descText.includes(search.toLowerCase());

            return matchPos && matchRar && matchSearch;
        });
        result.sort((a, b) => {
            const { key, dir } = sortConfig;
            const modifier = dir === "asc" ? 1 : -1;
            if (key === "position") {
                if (a.position !== b.position) {
                    return a.position.localeCompare(b.position) * modifier;
                }
                return getRarityRank(b.rarity) - getRarityRank(a.rarity);
            }
            else {
                const rankA = getRarityRank(a.rarity);
                const rankB = getRarityRank(b.rarity);
                if (rankA !== rankB) {
                    return (rankA - rankB) * modifier;
                }
                return a.position.localeCompare(b.position);
            }
        });
        return result;
    }, [positionFilter, rarityFilter, search, sortConfig, showMax]);
    return (
        <div className="memory-page">
            <header className="memory-header">
                <div className="controls">
                    <h1>Memories</h1>
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
                        </select>
                    </div>
                    <div className="control-group search-group">
                        <label>Search</label>
                        <input
                            type="search"
                            placeholder="Search name or description..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="control-group">
                        <label>Level Viewer</label>
                        <button className="toggle-btn" onClick={() => setShowMax(!showMax)}>
                            {showMax ? "Show Lv.1" : "Show Max LVL"}
                        </button>
                    </div>
                </div>
            </header>
            <main>
                <table className="mem-table">
                    <thead>
                        <tr>
                            <th>Memory</th>
                            <th
                                className={`sortable ${sortConfig.key === "position" ? sortConfig.dir : ""}`}
                                onClick={() => handleSort("position")}
                            >
                                Position
                            </th>
                            <th
                                className={`sortable ${sortConfig.key === "rarity" ? sortConfig.dir : ""}`}
                                onClick={() => handleSort("rarity")}
                            >
                                Rarity
                            </th>
                            <th>Stats</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMemories.length === 0 && (
                            <tr><td colSpan={6} className="no-data">No memories found.</td></tr>
                        )}
                        {filteredMemories.map((m) => (
                            <tr key={m.name} className="mem-row">
                                <td className="col-name">
                                    <div className="mem-info">
                                        <div className="mem-img-wrap">
                                            <img src={`data/${m.image}`} alt={m.name} onError={(e) => e.currentTarget.style.display = 'none'} />
                                        </div>
                                        <span className="mem-name">{m.name}</span>
                                    </div>
                                </td>
                                <td className="col-pill">
                                    <span className="pill pos">{m.position}</span>
                                </td>
                                <td className="col-pill">
                                    <span className={`pill rar rar-${m.rarity}`}>{m.rarity}</span>
                                </td>
                                <td className="col-stats">
                                    <div className="stats-grid">
                                        <div className="stat-item"><span className="label">Block</span> <span className="val">{getStat(m.stats.block)}</span></div>
                                        <div className="stat-item"><span className="label">Attack</span> <span className="val">{getStat(m.stats.power)}</span></div>
                                        <div className="stat-item"><span className="label">Serve</span> <span className="val">{getStat(m.stats.serve)}</span></div>
                                        <div className="stat-item"><span className="label">Receive</span> <span className="val">{getStat(m.stats.receive)}</span></div>
                                        <div className="stat-item"><span className="label">Save</span> <span className="val">{getStat(m.stats.save)}</span></div>
                                        <div className="stat-item"><span className="label">Set</span> <span className="val">{getStat(m.stats.set)}</span></div>
                                    </div>
                                </td>
                                <td className="col-desc">
                                    <p>{getDesc(m)}</p>
                                </td>
                                <td className="col-actions">
                                    <span className="soon">Soon</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}